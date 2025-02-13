/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';

import nock from 'nock';
import { ExtensionsCatalog } from './extensions-catalog';
import type { Certificates } from '../certificates';
import type { Proxy } from '../proxy';
import { Emitter } from '../events/emitter';
import type { ProxySettings } from '@podman-desktop/api';

let extensionsCatalog: ExtensionsCatalog;

const fakePublishedExtension1 = {
  publisher: {
    publisherName: 'foo',
    displayName: 'Foo publisher display name',
  },
  extensionName: 'fooName',
  displayName: 'Foo extension display name',
  shortDescription: 'Foo extension short description',
  license: 'Apache-2.0',
  versions: [
    {
      version: '1.0.0',
      lastUpdated: '2021-01-01T00:00:00.000Z',
      ociUri: 'oci-registry.foo/foo/bar',
    },
  ],
};
const isEnabledProxyMock = vi.fn();
const onDidUpdateProxyEmitter = new Emitter<ProxySettings>();
const getAllCertificatesMock = vi.fn();

const certificates: Certificates = {
  init: vi.fn(),
  getAllCertificates: getAllCertificatesMock,
} as unknown as Certificates;
const proxy: Proxy = {
  onDidStateChange: vi.fn(),
  onDidUpdateProxy: onDidUpdateProxyEmitter.event,
  isEnabled: isEnabledProxyMock,
} as unknown as Proxy;

beforeAll(async () => {
  extensionsCatalog = new ExtensionsCatalog(certificates, proxy);
});

const originalConsoleError = console.error;
beforeEach(() => {
  vi.clearAllMocks();
  console.error = vi.fn();
});

afterEach(() => {
  console.error = originalConsoleError;
});

test('should fetch fetchable extensions', async () => {
  const url = new URL(ExtensionsCatalog.ALL_EXTENSIONS_URL);
  const host = url.origin;
  const pathname = url.pathname;
  nock(host)
    .get(pathname)
    .reply(200, {
      extensions: [fakePublishedExtension1],
    });

  const fetchableExtensions = await extensionsCatalog.getFetchableExtensions();
  expect(fetchableExtensions).toBeDefined();
  expect(fetchableExtensions.length).toBe(1);

  // check data
  const extension = fetchableExtensions[0];
  expect(extension.extensionId).toBe('foo.fooName');
  expect(extension.link).toBe('oci-registry.foo/foo/bar');
  // no error
  expect(console.error).not.toBeCalled();
});

test('should not fetch fetchable extensions if internet connection is taking too much time', async () => {
  const url = new URL(ExtensionsCatalog.ALL_EXTENSIONS_URL);
  const host = url.origin;
  const pathname = url.pathname;
  nock(host)
    .get(pathname)
    .delay(3000) // 3 seconds delay will be applied to the response header.
    .reply(200, {
      extensions: [fakePublishedExtension1],
    });

  // no error, but array should be empty as it is taking too much time to download
  const fetchableExtensions = await extensionsCatalog.getFetchableExtensions();
  expect(fetchableExtensions).toBeDefined();
  expect(fetchableExtensions.length).toBe(0);
  // error being logged
  expect(console.error).toBeCalledWith(
    expect.stringContaining('Unable to fetch the available extensions: Timeout awaiting'),
  );
});

test('check getHttpOptions with Proxy', async () => {
  // faked certificates
  getAllCertificatesMock.mockReturnValue(['1', '2', '3']);

  isEnabledProxyMock.mockReturnValue(true);
  extensionsCatalog = new ExtensionsCatalog(certificates, proxy);
  onDidUpdateProxyEmitter.fire({
    httpProxy: 'http://proxy:8080',
    httpsProxy: 'http://proxy:8080',
    noProxy: 'localhost',
  });

  const options = extensionsCatalog.getHttpOptions();
  expect(options).toBeDefined();
  // expect the two agents being defined
  expect(options.agent?.http).toBeDefined();
  expect(options.agent?.https).toBeDefined();

  // certificates should be 1, 2, 3
  expect(options.https?.certificateAuthority).toBeDefined();
  expect(options.https?.certificateAuthority?.length).toBe(3);
});

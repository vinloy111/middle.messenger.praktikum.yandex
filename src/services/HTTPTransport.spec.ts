import { expect } from 'chai';
import sinon from 'sinon';
import { HTTPTransport } from './http-transport.ts';

// eslint-disable-next-line no-undef
interface GlobalWithXMLHttpRequest extends NodeJS.Global {
  XMLHttpRequest: any;
}
const globalWithXMLHttpRequest: GlobalWithXMLHttpRequest = global;

describe('HTTPTransport', () => {
  let transport: HTTPTransport;
  let server: sinon.SinonFakeServer;

  beforeEach(() => {
    globalWithXMLHttpRequest.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    transport = new HTTPTransport('/api');
    server = sinon.fakeServer.create();
    server.autoRespond = true;
  });

  afterEach(() => {
    server.restore();
  });

  describe('GET', () => {
    it('должен выполнять GET-запрос', async () => {
      await transport.get('/test');
      expect(server.requests.length).to.equal(1);
      expect(server.requests[0].method).to.equal('GET');
      expect(server.requests[0].url).to.include('/api/test');
    });

    it('должен преобразовать данные в строку запроса', async () => {
      await transport.get('/test', { data: { a: '1', b: '2' } });

      expect(server.requests[0].url).to.include('/api/test?a=1&b=2');
    });
  });

  describe('POST', () => {
    it('должен выполнять POST-запрос', async () => {
      await transport.post('/test', { data: { key: 'value' } });

      expect(server.requests.length).to.equal(1);
      expect(server.requests[0].method).to.equal('POST');
      expect(server.requests[0].requestBody).to.equal(JSON.stringify({ key: 'value' }));
    });
  });

  describe('PUT', () => {
    it('должен выполнять PUT-запрос', async () => {
      await transport.put('/test', { data: { key: 'value' } });

      expect(server.requests.length).to.equal(1);
      expect(server.requests[0].method).to.equal('PUT');
      expect(server.requests[0].requestBody).to.equal(JSON.stringify({ key: 'value' }));
    });
  });

  describe('DELETE', () => {
    it('должен выполнять DELETE-запрос', async () => {
      await transport.delete('/test');

      expect(server.requests.length).to.equal(1);
      expect(server.requests[0].method).to.equal('DELETE');
    });
  });
});

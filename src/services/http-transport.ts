type HTTPMethod = (url: string, options?: Options) => Promise<XMLHttpRequest>;

export interface Options {
  timeout?: number;
  method?: string;
  headers?: { [key: string]: string };
  data?: { [key: string]: string };
}

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data: { [key: string]: string }) {
  if (typeof data !== 'object' || data === null) {
    return '';
  }
  return `?${Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&')}`;
}

export class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => {
    if (options.data) {
      url += queryStringify(options.data);
    }
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  post: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete: HTTPMethod = (
    url,
    options = {},
  ) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> => {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method || METHODS.GET, url);

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.timeout = timeout;

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };

      xhr.ontimeout = () => {
        reject(new Error('Timeout exceeded'));
      };

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

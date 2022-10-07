enum Method {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Delete = 'Delete',
}

type TOptions = {
  method: Method;
  data?: any;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  constructor() {

  }

  public get<Response>(path: string, data?: any): Promise<Response> {
    return this.request<Response>(path, { method: Method.Get, data });
  }

  public post<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(path, { method: Method.Post, data });
  }

  protected request<Response>(path: string, opts: TOptions): Promise<Response> {
    return new Promise((resolve, reject) => {
      const { method, headers, data } = opts;
      fetch(path, {
        method,
        headers,
        body: JSON.stringify(data)
      }).then((res) => {
        console.log(res);
        return resolve(res);
      })
    });
  }
}

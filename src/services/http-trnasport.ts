enum Method {
  Get = 'Get',
  Post = 'Post',
  Patch = 'Patch',
  Put = 'Put',
  Delete = 'Delete',
}

type TOptions = {
  method: Method;
  data?: any;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public get<Response>(path: string, data?: any): Promise<Response> {
    return this.request<Response>(path, { method: Method.Get, data });
  }

  public put<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(path, { method: Method.Put, data });
  }

  public patch<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(path, { method: Method.Patch, data });
  }

  public post<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(path, { method: Method.Post, data });
  }

  protected request<Response>(path: string, opts: TOptions): Promise<Response> {
    return new Promise((resolve, reject) => {
      const { method, headers = { 'Content-Type': 'application/json', Accept: "application/json", }, data } = opts;
      fetch(`${this.endpoint}${path}`, {
        method,
        headers,
        body: JSON.stringify(data)
      }).then((data) => resolve(data.json()))
    });
  }
}

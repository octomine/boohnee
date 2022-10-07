import { HTTPTransport } from "../services/http-trnasport";

export class APIBase {
  protected readonly http: HTTPTransport;

  constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }
}

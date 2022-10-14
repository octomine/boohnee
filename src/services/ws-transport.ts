import { getOrderFx } from '../effects';

class WSTransport {
  private io: WebSocket;

  constructor() {
    const host = window.location.origin.replace(/^http/, 'ws')
    this.io = new WebSocket(host);

    this.io.addEventListener('open', () => {
      console.log('socket open');
    });

    this.io.addEventListener('message', (evt: MessageEvent) => {
      switch (evt.data) {
        case 'update':
          getOrderFx();
          break;
        default:
      }
    });
  }

  public send(msg: string) {
    if (this.io.readyState === 1) {
      this.io.send(msg);
    }
  }
}

export default new WSTransport();

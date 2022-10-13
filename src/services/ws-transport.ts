import { onSocketMessage } from './events';

class WSTransport {
  private io: WebSocket;

  constructor() {
    console.log('ws created!!1');
    this.io = new WebSocket('ws://localhost:9000');

    this.io.addEventListener('open', () => {
      console.log('socket open');
    });

    this.io.addEventListener('message', (evt: MessageEvent) => {
      onSocketMessage(evt.data);
    });
  }

  public send(msg: string) {
    if (this.io.readyState === 1) {
      this.io.send(msg);
    }
  }
}

export default new WSTransport();

import { APIBase } from './APIBase';
import { TOrderItemModel } from '../components/order/store';

class APIOrder extends APIBase {
  constructor() {
    super('/order');
  }

  public get(): Promise<TOrderItemModel[]> {
    return this.http.get('');
  }

  public removeItem(id: string) {
    return this.http.put('/remove', { id });
  }

  public readyItem(id: string) {
    return this.http.put('/ready', { id });
  }
}

export default new APIOrder();

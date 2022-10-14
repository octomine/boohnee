import { createStore } from 'effector';
import { $invisible } from '../menu/store';
import WSTransport from '../../services/ws-transport'
import { getOrderFx } from '../../effects';

export type TOrderItemModel = {
  id: string;
  itemId: string;
  text: string;
  time: Date;
  visible: boolean;
}

export const $order = createStore<TOrderItemModel[]>([])
  .on(getOrderFx.done, (_, { result }) => result)
  .on($invisible, (order, ids) => order.map((item) => {
    const { id } = item;
    return ids.includes(id) ? { ...item, visible: false } : { ...item, visible: true };
  }));

WSTransport.send(''); // TODO: придумать, как по-нормальному

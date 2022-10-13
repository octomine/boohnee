import { createStore, sample } from 'effector';
import { $invisible, $menu } from '../menu/store';
import WSTransport from '../../services/ws-transport'
import { onSocketMessage } from '../../services/events';
import { TMenuItemModel } from '../../api/APIMenu';

export type TOrderItemModel = {
  id: string;
  text: string;
  time: Date;
  visible: boolean;
}

const sampled = sample({
  source: $menu,
  clock: onSocketMessage,
  fn: (menu, id) => {
    const text = menu.filter((item) => item.id === id)[0].text;
    return { id, text, time: new Date(), visible: true }
  }
});

export const $order = createStore<TOrderItemModel[]>([])
  .on(sampled, (state, item) => ([...state, item]))
  .on($invisible, (order, ids) => order.map((item) => {
    const { id } = item;
    return ids.includes(id) ? { ...item, visible: false } : { ...item, visible: true };
  }));

WSTransport.send(''); // TODO: придумать, как по-нормальному

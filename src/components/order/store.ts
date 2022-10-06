import { createStore } from 'effector';
import { $invisible } from '../menu/store';

export type TOrderItemModel = {
  id: number;
  text: string;
  time: string;
  visible: boolean;
}

const defaultState = [
  { id: 1, text: 'Красная стрела с шампанским', time: '2:05', visible: true },
  { id: 1, text: 'Красная стрела с шампанским', time: '3:12', visible: true },
  { id: 2, text: 'Красная стрела с тоником, мятой и всяким таким', time: '5:32', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', time: '12:54', visible: false },
  { id: 2, text: 'Красная стрела с тоником, мятой и всяким таким', time: '22:35', visible: true },
]

export const $order = createStore<TOrderItemModel[]>(defaultState)
  .on($invisible, (order, ids) => order.map((item) => {
    const { id } = item;
    return ids.includes(id) ? { ...item, visible: false } : { ...item, visible: true };
  }))

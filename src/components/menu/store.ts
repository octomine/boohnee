import { createStore, createEvent } from 'effector';

type TMenuItemModel = {
  text: string;
  visible: boolean;
}

const defaultState = [
  { text: 'Красная стрела с шампанским', visible: true },
  { text: 'Красная стрела с тоником, мятой и всяким таким', visible: true },
  { text: 'Красная стрела с ещё чем-то там', visible: false },
]

export const changeVisible = createEvent<number>();
export const $menu = createStore<TMenuItemModel[]>(defaultState)
  .on(changeVisible, (state, n) => state.map((item, index) => index === n ? { ...item, visible: !item.visible } : item));

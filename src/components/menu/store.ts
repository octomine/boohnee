import { createStore, createEvent } from 'effector';

type TMenuItemModel = {
  id: number;
  text: string;
  visible: boolean;
}

const defaultState = [
  { id: 1, text: 'Красная стрела с шампанским', visible: true },
  { id: 2, text: 'Красная стрела с тоником, мятой и всяким таким', visible: true },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
  { id: 3, text: 'Красная стрела с ещё чем-то там', visible: false },
]

export const changeVisible = createEvent<number>();
export const $menu = createStore<TMenuItemModel[]>(defaultState)
  .on(changeVisible, (state, n) => state.map((item, index) => index === n ? { ...item, visible: !item.visible } : item));

export const $invisible = $menu.map((state) => {
  const res: number[] = [];
  state.forEach(({ id, visible }) => {
    if (!visible) {
      res.push(id);
    }
  });
  return res;
});

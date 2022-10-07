import { createStore } from 'effector';
import { TMenuItemModel } from '../../api/APIMenu';
import { getMenuFx } from '../../effects';

export const $menu = createStore<TMenuItemModel[]>([])
  .on(getMenuFx.done, (_, { result }) => result);

export const $invisible = $menu.map((state) => {
  const res: string[] = [];
  state.forEach(({ id, visible }) => {
    if (!visible) {
      res.push(id);
    }
  });
  return res;
});

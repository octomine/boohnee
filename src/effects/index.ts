import { createEffect } from "effector";
import { nanoid } from 'nanoid';

import APIMenu, { TMenuItemModel } from '../api/APIMenu';

export const getMenuFx = createEffect('get-menu', {
  handler: () => APIMenu.get()
})

export const addItemFx = createEffect('add-item', {
  handler: (val: string) => {
    const data: TMenuItemModel = {
      id: nanoid(),
      text: val,
      visible: true,
    }
    return APIMenu.addItem(data)
      .then(() => getMenuFx());
  }
});

export const removeItemFx = createEffect('remove-item', {
  handler: (data: TMenuItemModel) => APIMenu.removeItem(data)
    .then(() => getMenuFx())
})

export const changeItemFx = createEffect('change-item', {
  handler: (data: TMenuItemModel) => APIMenu.changeItem(data)
    .then(() => getMenuFx())
})

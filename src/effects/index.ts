import { createEffect } from "effector";
import { nanoid } from 'nanoid';

import APIMenu, { TMenuItemModel } from '../api/APIMenu';
import APIOrder from '../api/APIOrder';

export const getMenuFx = createEffect('get-menu', {
  handler: () => APIMenu.get()
});

export const addMenuItemFx = createEffect('add-item', {
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

export const removeMenuItemFx = createEffect('remove-item', {
  handler: (data: TMenuItemModel) => APIMenu.removeItem(data)
    .then(() => getMenuFx())
});

export const changeMenuItemFx = createEffect('change-item', {
  handler: (data: TMenuItemModel) => APIMenu.changeItem(data)
    .then(() => getMenuFx())
});

export const getOrderFx = createEffect('get-order', {
  handler: () => APIOrder.get()
});

export const removeOrderItemFx = createEffect('remove-order', {
  handler: (id: string) => APIOrder.removeItem(id)
    .then(() => getOrderFx())
})

export const readyOrderItemFx = createEffect('remove-order', {
  handler: (id: string) => APIOrder.readyItem(id)
    .then(() => getOrderFx())
})

import { createStore, createEvent } from "effector";

export const setSelected = createEvent<number>();
export const $selected = createStore<number>(0)
  .on(setSelected, (_, n) => n);

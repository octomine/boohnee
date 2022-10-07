import { createStore, createEvent } from "effector";

export const setValue = createEvent<string>();
export const resetValue = createEvent<string>();
export const $value = createStore<string>('')
  .on(setValue, (_, value) => value)
  .reset(resetValue);

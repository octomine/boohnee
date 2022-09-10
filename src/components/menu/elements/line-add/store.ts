import { createStore, createEvent } from "effector";

export const setInput = createEvent();
export const resetInput = createEvent();
export const $isInput = createStore<boolean>(false).on(setInput, () => true).reset(resetInput);

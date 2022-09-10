import { createStore, createEvent } from "effector";

export const addLine = createEvent<string>();
export const removeLine = createEvent();

export const $menu = createStore<string[]>([])
    .on(addLine, (state, newLine) => [...state, newLine]);

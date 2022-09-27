import { createStore, createEvent, createEffect } from "effector";
import { getMenu } from '../../services/network';

export const addLine = createEvent<string>();
export const removeLine = createEvent();

export const getMenuFx = createEffect(() => getMenu());

export const $menu = createStore<string[]>([])
    .on(addLine, (state, newLine) => [...state, newLine])
    .on(getMenuFx.done, (_, { result }) => result.map(([{text}])=>text))

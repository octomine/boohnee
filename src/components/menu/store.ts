import { createStore } from 'effector';

export const $menu = createStore<string[]>(['a', 'b', 'c']);

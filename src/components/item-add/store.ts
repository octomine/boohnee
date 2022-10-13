import { createEvent, createStore, sample } from 'effector';

import { addItemFx } from '../../effects'
import { $value } from './elements/input/store';

export const onAccept = createEvent();
export const setInputMode = createEvent();
export const resetInputMode = createEvent();
export const $inputMode = createStore<boolean>(false)
  .on(setInputMode, () => true)
  .reset(resetInputMode)
  .reset(onAccept);

// TODO: можт coeffect запилить
sample({
  source: $value,
  clock: onAccept,
  target: addItemFx
});

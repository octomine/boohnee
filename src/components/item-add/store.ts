import { createEvent, createStore, sample, forward } from 'effector';

import { addItemFx } from '../../effects'
import { $value } from './elements/input/store';

export const setInputMode = createEvent();
export const resetInputMode = createEvent();
export const $inputMode = createStore<boolean>(false)
  .on(setInputMode, () => true)
  .reset(resetInputMode);

export const onAccept = createEvent();

forward({
  from: sample($value, onAccept),
  to: addItemFx,
})

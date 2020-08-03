
import { createStore } from 'effector'
import { withPersist } from "effector-persist";


export const $dataStore = createStore([]);

export const $changedData = withPersist(createStore({}));

export const $idx = createStore([]);

export const $loading = createStore(false);
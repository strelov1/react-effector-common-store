import { withPersist } from "effector-persist";
import { createDomain, createEvent, createEffect } from 'effector'


export const createScope = (name, dataProvider, columns) => {
    const domain = createDomain(name)

    const $dataStore = domain.createStore([]);

    const $changedData = withPersist(domain.createStore({}));

    const $idx = domain.createStore([]);

    const $loading = domain.createStore(false);

    const changeCell = createEvent('changeCell');
    const reset = createEvent('reset');
    const save = createEvent('save');

    const getData = createEffect({
        handler: dataProvider,
    });

    $dataStore
        .on(getData.done, (oldState, payload) => {
            return new Map(payload.result.map(item => [item.id, item]));;
        });

    $changedData
        .on(changeCell, (oldState, payload) => {
            console.log('Update')
            return {...oldState, [payload.key]: payload}
        })
        .on(save, async (oldState, payload) => {
            await console.log(oldState);
            await reset();
        })
        .reset(reset);


    $idx.on(getData.done, (oldState, payload) => {
        return payload.result.map(item => item.id);
    });

    $loading.on(getData.pending, (oldState, payload) => {
        return payload;
    })
  
    return {
      store: {
        $dataStore,
        $changedData,
        $idx,
        $loading,
        columns,
        name
      },
      events: { changeCell, reset, save },
      effects: {
        getData
      }
    }
}
import React from 'react';

import { $dataStore, $changedData, $idx, $loading } from './effector/store'
import { getData } from './effector/effect'
import { save, changeCell, reset } from './effector/events';
import { Table } from './Table';

export const Grid = () => {
    $dataStore
        .on(getData.done, (oldState, payload) => {
            return new Map(payload.result.map(item => [item.id, item]));;
        });

    $changedData
        .on(changeCell, (oldState, payload) => {
            return {...oldState, [payload.key]: payload}
        })
        .on(save, async (oldState, payload) => {
            await console.log(oldState);
            await reset();
        })
        .reset(reset);

    $dataStore.watch(console.log);

    $idx.on(getData.done, (oldState, payload) => {
        return payload.result.map(item => item.id);
    });

    $loading.on(getData.pending, (oldState, payload) => {
        return payload;
    })

    return <Table $loading={$loading} $idx={$idx}></Table>

}

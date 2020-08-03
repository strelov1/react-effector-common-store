
import {useStoreMap} from 'effector-react'
import { $dataStore, $changedData } from './store';

export const useCellHook = (rowKey, column) => {
    const value = useStoreMap({
        store: $dataStore,
        keys: [rowKey],
        fn: (data, [rowId]) => data.get(rowId)[column],
    });

    const changed = useStoreMap({
        store: $changedData,
        keys: [rowKey],
        fn: ((store, [rowKey]) => {
            return store[rowKey] !== undefined && store[rowKey].column === column && store[rowKey].value
        }),
    });

    return {
        value: changed ? changed : value,
        changed: !!changed
    }
}

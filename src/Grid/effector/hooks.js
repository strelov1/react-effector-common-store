import { useContext } from 'react';
import { useStoreMap } from 'effector-react'
import { GridContext } from '../context';

export const useCellHook = (rowKey, column) => {
    const { store } = useContext(GridContext);

    const value = useStoreMap({
        store: store.$dataStore,
        keys: [rowKey],
        fn: (data, [rowId]) => data.get(rowId)[column],
    });

    const changed = useStoreMap({
        store: store.$changedData,
        keys: [rowKey, column],
        fn: ((store, [rowKey]) => {
            return store[rowKey] !== undefined 
            && store[rowKey].column === column
            && store[rowKey].value
        }),
    });

    return {
        value: changed ? changed : value,
        changed: !!changed
    }
}

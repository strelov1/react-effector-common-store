import React, { useEffect, useContext } from 'react';
import { useStore } from 'effector-react'

import { Cell } from './Cell';
import { GridContext } from './context';


const TableDump = () => {
    const { store, events, effects } = useContext(GridContext);

    const idx = useStore(store.$idx);
    const loading = useStore(store.$loading);

    useEffect(() => {
        effects.getData();
    }, []);

    if (loading) {
        return <div>Loading data.....</div>
    }

    return (
        <div>
            <div>
                <button onClick={() => events.reset()}>reset</button>
                <button onClick={() => events.save()}>save</button>
            </div>
            <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {idx.map(rowKey => 
                    <tr key={rowKey}>
                        {store.columns.map(column => (
                            <Cell rowKey={rowKey} column={column}></Cell>
                        ))}
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
};


export const Table = React.memo(TableDump);
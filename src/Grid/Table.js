import React, { useEffect } from 'react';
import { useStore } from 'effector-react'

import { reset, save } from './effector/events';
import { getData } from './effector/effect';
import { Cell } from './Cell';


export const Table = React.memo(({$idx, $loading}) => {
    const idx = useStore($idx);
    const loading = useStore($loading);

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div>Loading data.....</div>
    }

    return (
        <div>
            <div>
                <button onClick={() => reset()}>reset</button>
                <button onClick={() => save()}>save</button>
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
                {idx.map(rowKey => {
                    return (
                        <tr key={rowKey}>
                            <Cell rowKey={rowKey} column='id'></Cell>
                            <Cell rowKey={rowKey} column='userId'></Cell>
                            <Cell rowKey={rowKey} column='title'></Cell>
                            <Cell rowKey={rowKey} column='body'></Cell>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    )
});

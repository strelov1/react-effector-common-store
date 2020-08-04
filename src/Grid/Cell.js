import React, { useContext } from 'react';
import { useCellHook } from './effector/hooks';
import { GridContext } from './context';

const CellDump = ({rowKey, column}) => {
    const { store, events } = useContext(GridContext);
    const { value, changed } = useCellHook(rowKey, column);

    const className = [];

    if (changed) {
        className.push('changed')
    }

    const onChange = (e) => {
        events.changeCell({
            key: rowKey,
            column,
            value: e.currentTarget.value
        })
    }

    console.log('Render Cell', store.name, rowKey, column);

    return (
        <td className={className.join(' ')} >
            <input onChange={onChange} defaultValue={value}></input>
        </td>
    )
};

export const Cell = React.memo(CellDump);

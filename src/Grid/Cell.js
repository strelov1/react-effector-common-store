
import React from 'react';
import { useCellHook } from './effector/hooks';
import { changeCell } from './effector/events';

export const Cell = React.memo(({rowKey, column}) => {
    const { value, changed } = useCellHook(rowKey, column);

    const className = [];

    if (changed) {
        className.push('changed')
    }

    const onChange = (e) => {
        changeCell({
            key: rowKey,
            column,
            value: e.currentTarget.value
        })
    }

    return (
        <td className={className.join(' ')} >
            <input onChange={onChange} defaultValue={value}></input>
        </td>
    )
});

import React from 'react';

import { Table } from './Table';
import { GridContext } from './context';
import { createScope } from './effector';

export const Grid = React.memo(({name, dataProvider, columns}) => {
    
    const scope = createScope(name, dataProvider, columns);

    return (
        <GridContext.Provider value={scope}>
            <Table/>
        </GridContext.Provider>
    );
});

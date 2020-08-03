import React from 'react'
import { Grid } from './Grid/Grid';

export const Post = React.memo(() => {
    const dataProvider = () => {

    }

    return (
        <Grid dataProvider={dataProvider}></Grid>
    )
});
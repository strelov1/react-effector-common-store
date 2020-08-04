import React from 'react'
import { Grid } from './Grid/Grid';

export const Users = React.memo(() => {
    const dataProvider = async () => {
        const url = `https://jsonplaceholder.typicode.com/users?_limit=5`
        const req = await fetch(url)
        return req.json()
    }

    const columns = ['id', 'name', 'username', 'email', 'phone', 'website'];

    return (
        <Grid name="posts" columns={columns} dataProvider={dataProvider}></Grid>
    )
});
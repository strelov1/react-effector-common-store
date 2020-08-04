import React from 'react'
import { Grid } from './Grid/Grid';

export const Post = React.memo(() => {
    const dataProvider = async () => {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=5`
        const req = await fetch(url)
        return req.json()
    }

    const columns = ['id', 'userId', 'title', 'body'];

    return (
        <Grid name="posts" columns={columns} dataProvider={dataProvider}></Grid>
    )
});
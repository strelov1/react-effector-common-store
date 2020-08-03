import { createEffect } from 'effector'

export const getData = createEffect({
    async handler() {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=5`
        const req = await fetch(url)
        return req.json()
    },
});

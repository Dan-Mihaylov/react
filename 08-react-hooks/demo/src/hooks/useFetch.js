import { useState, useEffect } from "react";

export default function useFetch (url, defaultState = {}) {
    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        setPending(true);
        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
        .then(result => result.json())
        .then(data => {
            setState(data.data.data);
        })
        .finally(() => {
            setPending(false);
        })

        return () => {
            abortController.abort();
        }

    }, [url])

    return [pending, state];
}


// Each Custom HOOK follows the COMPONENT LIFE CYCLE of the component it has been mounted to. The hook can have many independent
// life-cycles due to the ability to be reused in different components.

// The abortController helps us abort the url fetch, in case we cancel the fetch or in case we send multiple fetch requests at the same time,
// then it will execute only the last fetch request.
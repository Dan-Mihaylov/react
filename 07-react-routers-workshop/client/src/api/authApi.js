import { useRef, useEffect } from "react";
import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/users';

// HOOKS Cannot be async, they need to return values or functions, not a Promise...
// After 1 hour and 20 minutes, I give up on the AbortController...
// It is what it is.

export const useLogin = () => {
    // const abortRef = useRef(new AbortController());

    const login = async (email, password) => {
        const result = await request(`${baseUrl}/login`, 'POST', { email, password });
        return result;
    }

    // useEffect(() => {
    //     console.log('Mount...')
    //     const abortController = abortRef.current;

    //     return () => {
    //         console.log('ABORTING!');
            
    //         abortController.abort();
    //     };
    // }, [])

    return {
        login
    }
}


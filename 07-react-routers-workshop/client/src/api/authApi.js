import { useRef, useEffect, useContext } from "react";
import request from "../utils/requester";
import { UserContext } from "../context/UserContext";

const baseUrl = 'http://localhost:3030/users';

// HOOKS Cannot be async, they need to return values or functions, not a Promise...
// After 1 hour and 20 minutes, I give up on the AbortController...
// It is what it is.

export const useAuthHeaders = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    return {
        options,
        accessToken
    }
}

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


export const useRegister = () => {

    const register = async (email, password) => {
        const result = await request(`${baseUrl}/register`, 'POST', { email, password });
        return result;
    }

    return {
        register,
    }
}


export const useLogout = () => {

    const { options } = useAuthHeaders();

    const logout = async () => {
        const result = await request(`${baseUrl}/logout`, 'GET', null, options);
        return result;
    }

    return {
        logout,
    }

}

export const useLoginStatus = () => {
    // Checks if your current accessToken has a logged in session on the server
    const { options, accessToken } = useAuthHeaders();

    const loginStatus = async () => {
        if (!accessToken) {
            return;
        };

        const result = await request(`${baseUrl}/me`, 'GET', null, options);
        return result;
    }

    return {
        loginStatus
    }

}


import { useState } from 'react';


export default function useLocalStorageState(key, initialValue) {

    const [state, setState] = useState(() => {
        const localStorageState = localStorage.getItem(key);

        if (localStorageState) {
            const parsedValue = JSON.parse(localStorageState);
            return parsedValue;
        }

        return typeof (initialValue) === 'function'
            ? initialValue()
            : initialValue

    });

    const setLocalStorageState = (newState) => {
        // if it is a function, get the result of the function, then stringify it and set the
        // localStorage key to the value of it. 
        // Finally set up the [state] to be the value, before the stringification.

        const newStateValues = typeof (newState) === 'function'
            ? newState()
            : newState
        
        // Added a new property isAuthenticated for clearer meaning
        
        const value = {
            ...newStateValues,
            isAuthenticated: !!newStateValues.accessToken
        }


        const localStorageValue = JSON.stringify(value);
        localStorage.setItem(key, localStorageValue);

        setState(value);
    }


    return [
        state,
        setLocalStorageState
    ]

}
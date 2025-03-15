import { createContext } from "react";

export const UserContext = createContext({
    username: 'Anonymous',
    image: '',
    userSetHandler () {},
})
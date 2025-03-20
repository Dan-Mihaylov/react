import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    username: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});
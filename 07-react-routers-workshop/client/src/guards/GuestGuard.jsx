import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";

export default function GuestGuard () {
    
    const { isAuthenticated } = useContext(UserContext);

    if (isAuthenticated) {
        return <Navigate to="/" />;
    };

    return <Outlet />
}

import { Navigate, Outlet, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function AuthGuard() {
    const { isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

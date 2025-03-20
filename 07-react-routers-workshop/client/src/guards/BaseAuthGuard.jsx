import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function BaseAuthGuard(
    { children }
) {

    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        return navigate('/login')
    };

    return (
        <>
            {children}
        </>
    )

}
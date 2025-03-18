import { useContext, useEffect } from "react";
import { useNavigate } from "react-router"
import { useLoginStatus, useLogout } from "../../api/authApi";
import { UserContext } from "../../context/UserContext";

export default function Logout () {

    // Can be done with useEffect to invoke the logout functionality straight after component mount.

    const navigate = useNavigate();
    const  { logout } = useLogout();
    const { loginStatus } = useLoginStatus();
    const { userLogoutHandler } = useContext(UserContext);

    useEffect(()=> {

        const performLogout = async () => {
            await logout();
            const serverLoggedIn = await loginStatus();            
            
            if (serverLoggedIn.status === 200) {
                // Still logged in
                return;
            };
            
            userLogoutHandler();
            navigate('/');

        };

        performLogout();
        

    }, [])

    return (
        <h1>Spinner!</h1>
    )

}

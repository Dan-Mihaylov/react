import { useContext } from "react"
import { UserContext } from "../context/userContext"

export default function Home () {
    const { username } = useContext(UserContext);


    return (
        <>
            <h1>Home Page</h1>
            <h5>Welcome to the home page: {username}</h5>
        </>
    ) 


}
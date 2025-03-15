import { useContext } from "react"
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function AddInfo() {
    const { userSetHandler } = useContext(UserContext);
    const navigate = useNavigate();
    
    const formSubmitHandler = (formData) => {
        userSetHandler(formData);
        navigate('/');
    }

    return (
        <>
            <h1>Add Info Page!!!</h1>
            <form action={formSubmitHandler} className="info-form">
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" name="username" required/>
                </div>

                <div className="form-field">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input id="imageUrl" type="url" name="imageUrl" required/>
                </div>

                <div className="form-field">
                    <button>Enter</button>
                </div>
            </form>
        </>
    )

}
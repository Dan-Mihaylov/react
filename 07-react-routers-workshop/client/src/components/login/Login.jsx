import { useActionState, useContext } from 'react';
import { useLogin } from '../../api/authApi';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router';

export default function Login () {
    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const formSubmitHandler = async (previousState, formData) => {
        const data = Object.fromEntries(formData);
        const authData = await login(data.email, data.password);
        
        userLoginHandler(authData);
        navigate('/');
        
        return data;
    }

    const [values, loginAction, isPending] = useActionState(formSubmitHandler, {email: '', password: ''});

	return (
        <section id="login-page" className="auth">
            <form id="login" action={ loginAction }>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"/>

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password"/>
                    <input type="submit" className="btn submit" value="Login" disabled={ isPending }/>
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
	)
}

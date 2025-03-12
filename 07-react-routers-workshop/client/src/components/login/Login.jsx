export default function Login ({
    onLogin,
}) {

    const formSubmitHandler = async (formData) => {
        const data = Object.fromEntries(formData);
        onLogin(data.email);
    }


	return (
        <section id="login-page" className="auth">
            <form id="login" action={formSubmitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"/>

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password"/>
                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
	)
}

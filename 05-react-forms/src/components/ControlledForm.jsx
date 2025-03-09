import { useState } from 'react';


export default function ControlledForm(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [pending, setPending] = useState(false);

	const submitHandler = (e) => {
		// Prevent Default
		e.preventDefault();

		// Set pending status
		setPending(true);

		// Do API call of form processing
		new Promise((resolve) => {
			setTimeout(() => {
				resolve("Form send successfully.")
			}, 1000);
		})
			.then(message => {
				console.log(message);
				console.log(`Username: ${username}\nPassword: ${password}`);
				setPending(false);

				// Reset form data
				setUsername('');
				setPassword('');
			})

	}

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	}

	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
	}

	return (

			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<form onSubmit={submitHandler} className="bg-white p-6 rounded-2xl shadow-lg w-80">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Controlled Form</h2>

					<div className="mb-4">
						<label className="block text-gray-600 text-sm mb-1">Username</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={usernameChangeHandler}
							className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black-400"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-600 text-sm mb-1">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={passwordChangeHandler}
							className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black-400"
							autoComplete="on"
						/>
					</div>

					<button
						type="submit"
						className={pending ? "w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer" : "w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"}
						disabled={pending}
					>
						Login
					</button>
				</form>
			</div>
	)
}


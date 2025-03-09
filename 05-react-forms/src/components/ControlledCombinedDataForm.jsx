import { useState } from 'react';

export default function ControlledCombinedDataForm(props) {

	// We have combined all the form states into one, and we are using 1 event handler for all fields.

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})
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
				console.log(`Username: ${formData.username}\nPassword: ${formData.password}`);
				setPending(false);

				// Reset form data
				setFormData({username: '', password: ''});
			})

	}

	const changeHandler = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	}


	return (
		<>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<form onSubmit={submitHandler} className="bg-white p-6 rounded-2xl shadow-lg w-80">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Controlled Combined Form</h2>

					<div className="mb-4">
						<label className="block text-gray-600 text-sm mb-1">Username</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={changeHandler}
							className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black-400"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-600 text-sm mb-1">Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={changeHandler}
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
		</>
	)

} 

import { useRef, useState } from "react";


export default function UncontrolledForm(props) {

	const [pending, setPending] = useState(false);
	const usernameRef = useRef();
	const passwordRef = useRef();

	const submitHandler = (e) => {
		// Prevent POST Request to the server refreshing the page.
		e.preventDefault();

		// Set Pending = true to disable submit button
		setPending(true);

		// Extract form data
		const username = usernameRef.current.value;
		const password = passwordRef.current.value;

		// Do API Call
		new Promise((resolve) => {
			setTimeout(() => {resolve(`Username: ${username}, Password: ${password}. Api call successful!`)}, 1000)
		})
		.then((message) => {
			console.log(message);
			console.log('Resetting pending!')
			setPending(false);
		});

	}


	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
		  <form onSubmit={submitHandler} className="bg-white p-6 rounded-2xl shadow-lg w-80">
			<h2 className="text-xl font-semibold text-gray-700 mb-4">Uncontrolled Form</h2>
			
			<div className="mb-4">
			  <label className="block text-gray-600 text-sm mb-1">Username</label>
			  <input
				type="text"
				name="username"
				ref={usernameRef}
				className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black-400"
			  />
			</div>
			
			<div className="mb-4">
			  <label className="block text-gray-600 text-sm mb-1">Password</label>
			  <input
				type="password"
				name="password"
				ref={passwordRef}
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
	  );

}

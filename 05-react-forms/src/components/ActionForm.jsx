import { useState } from 'react';
import Joke from "./Joke";
import ButtonSubmit from './ButtonSubmit';

export default function ActionForm(props) {

	const baseApiUrl = 'https://api.freeapi.app/api/v1/public/randomjokes/';

	const [joke, setJoke] = useState({ _id: '', content: '' });
	const [pending, setPending] = useState(false);
	const [displayJoke, setDisplayJoke] = useState(false);

	const resetAll = () => {
		setPending(pending => !pending);
		setDisplayJoke(false);
		setJoke({ _id: '', content: '' });
		return;
	}

	const actionFunction = async (formData) => {

		setPending(true);
		console.log('---FORMDATA---')
		const jokeId = await formData.get('jokeId');

		if (!jokeId) {
			resetAll();
		}

		const jokeUrl = `${baseApiUrl}${jokeId}`;

		// Or get all the data
		// const data = Object.fromEntries(formData)

		fetch(jokeUrl)
			.then(response => response.json())
			.then(data => {
				setDisplayJoke(true);
				setJoke({ _id: data.data.id, content: data.data.content })
				setPending(false);
			})
			.catch((error) => {
				resetAll();
			})
	}


	return (
		<>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<form action={actionFunction} className="bg-white p-6 rounded-2xl shadow-lg w-80">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Actions Form</h2>

					<div className="mb-4">
						<label className="block text-gray-600 text-sm mb-1">Select Joke ID</label>
						<input
							type="text"
							name="jokeId"
							placeholder="13"
							className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black-400"
						/>
					</div>

					<button
						type="submit"
						className={pending ? "w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer" : "w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"}
						disabled={pending}
					>
						Fetch Joke
					</button>

					{
						displayJoke
						&&
						<Joke
							content={joke.content}
							_id={joke._id}
						/>
					}

				</form>

			</div>
		</>
	);


} 
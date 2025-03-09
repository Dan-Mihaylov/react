export default function Joke({ content, _id }) {

	
	return (
		<div className="max-w-xl mx-auto bg-white my-8">
			<h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
				Joke with ID: {_id}
			</h2>
			<p className="text-lg text-gray-600 text-center">{content}</p>
		</div>
	);
}
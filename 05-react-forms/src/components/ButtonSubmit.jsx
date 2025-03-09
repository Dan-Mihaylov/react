import { useFormStatus } from 'react-dom';

export default function ButtonSubmit() {
	const {pending} = useFormStatus();

	return (
		<button
			type="submit"
			className={pending ? "w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer" : "w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"}
			disabled={pending}
		>
			Login
		</button>
	)
}
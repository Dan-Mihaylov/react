import { useCommentsCreate } from "../../api/commentsApi";
import commentServices from "../../services/commentServices";

export default function CommentsCreate({
	email,
	gameId,
	onCreate,
}) {

	const { create } = useCommentsCreate();

	const formSubmitAction = async (formData) => {
		const data = Object.fromEntries(formData);
		const commentData = {
			...data,
			email,
			gameId
		};
		create(commentData)
		.then(onCreate);
	}

	return (
		/* <!-- Bonus --> */
		/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */
		<article className="create-comment">
			<label>Add new comment:</label>
			<form action={formSubmitAction} className="form">
				<textarea name="comment" placeholder="Comment......"></textarea>
				<input className="btn submit" type="submit" defaultValue="Add Comment" />
			</form>
		</article>
	)

}
export default function CommentItem({
	item
}) {

	return (
		<>
				{/* <!-- list all comments for current game (If any) --> */}
				<li className="comment">
					<p>{item.email}: {item.comment}</p>
				</li>
		</>
	)

}
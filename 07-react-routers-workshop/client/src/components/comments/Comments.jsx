import CommentItem from "./CommentItem";

export default function Comments({
	items
}) {

	return (
		<ul>
			{
				items.map(comment => <CommentItem key={comment._id} item={comment}/>)
			}
		</ul>
	)

}
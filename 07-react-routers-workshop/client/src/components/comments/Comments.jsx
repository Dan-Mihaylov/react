import CommentItem from "./CommentItem";

export default function Comments({
	items
}) {

	return (
		<ul>
			{
				items.map(comment => <CommentItem item={comment}/>)
			}
		</ul>
	)

}
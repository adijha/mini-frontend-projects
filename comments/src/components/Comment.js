import React, { useState } from 'react'

const Comment = (props) => {
	const { comment, addComment, deleteComment } = props
	const { commentText, childComments, id } = comment
	const [childComment, setChildComment] = useState('')
	const [isReplying, setIsReplying] = useState(false)

	const replyComment = () => {
		addComment(id, childComment)
		setChildComment('')
		setIsReplying(false)
	}
	const toggleReplying = () => {
		setIsReplying(!isReplying)
	}

	return (
		<div className="comment-box">
			<div className="flex-row">
				<div style={{ textAlign: 'left' }}>{commentText}</div>
				&nbsp;
			</div>
			{isReplying ? (
				<>
					<input
						type="text"
						value={childComment}
						onChange={(e) => setChildComment(e.target.value)}
						placeholder="add comment"
					/>
					<button onClick={replyComment}>Submit</button>
				</>
			) : (
				<>
					<p onClick={toggleReplying} className="reply-button">
						Reply
					</p>
					<button onClick={deleteComment}>delete comment</button>
				</>
			)}

			{childComments.map((childCommentEl, key) => {
				return (
					<Comment key={key} comment={childCommentEl} addComment={addComment} />
				)
			})}
		</div>
	)
}
export default Comment

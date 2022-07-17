import './App.css'
import { useState, useEffect } from 'react'
import Comment from './components/Comment'
import { getNewComment } from './utils'

function App() {
	const [comments, setComments] = useState({})
	const [rootComment, setRootComment] = useState('')

	const addComment = (parentId, newCommentText) => {
		let newComment = null
		if (parentId) {
			newComment = getNewComment(newCommentText, false, parentId)

			setComments((comments) => ({
				...comments,
				[parentId]: {
					...comments[parentId],
					childComments: [...comments[parentId].childComments, newComment.id],
				},
			}))
		} else {
			newComment = getNewComment(newCommentText, true, null)
		}
		setComments((comments) => ({ ...comments, [newComment.id]: newComment }))
	}

	const deleteComment = () => {}

	const mapComment = (comment) => {
		return {
			...comment,
			childComments: comment.childComments
				.map((id) => comments[id])
				.map((comment) => mapComment(comment)),
		}
	}

	const commentTree = Object.values(comments)
		.filter((comment) => {
			return !comment.parentId
		})
		.map(mapComment)

	const appendComment = () => {
		addComment(null, rootComment)
		setRootComment('')
	}

	return (
		<div>
			<h2>Comment Widget</h2>
			<div className="comments-container">
				<input
					type="text"
					value={rootComment}
					onChange={(e) => setRootComment(e.target.value)}
					placeholder="write a sweet comment"
				/>
				<button onClick={appendComment}>Add</button>
			</div>
			<div className="comments-tree">
				{commentTree.map((comment, key) => {
					return (
						<Comment
							key={key}
							comment={comment}
							deleteComment={deleteComment}
							addComment={addComment}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default App

import React from 'react'

const AddComment = (props) => {
	const { setCommentTree, commentTree, parentId } = props
	console.log({ setCommentTree, commentTree, parentId })

	console.log(commentTree)

	// const newId = commentTree[commentTree?.length - 1].id + 1

	const addComment = () => {
		setCommentTree([
			...commentTree,
			{
				// id: newId,
				id: 10,
				parentId,
				text: 'Good morning from Nepal',
				author: 'KP Oli',
				children: null,
			},
		])
	}
	return (
		<div>
			<input type="text"></input>
			<button onClick={addComment}>AddComment</button>
		</div>
	)
}

export default AddComment

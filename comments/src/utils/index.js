import { v4 as uuidv4 } from 'uuid'

const getNewComment = (commentValue, isRootNode = false, parentId) => {
	return {
		id: uuidv4(),
		commentText: commentValue,
		childComments: [],
		isRootNode,
		parentId,
	}
}

export { getNewComment }

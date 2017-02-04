export function addComment(comments) {
        
            return {
				type: "ADD_COMMENT_FULFILLED",
				payload: {
					comments: comments,
				}
			}
}


export function fetchComments(comments) {
        
            return {
				type: "FETCH_COMMENTs_FULFILLED",
				payload: {
					comments: comments,
				}
			}
}
export default function reducer(state={
	comment: "",
	comments: [],
	new: false
}, action) {
	switch (action.type) {
		case "ADD_COMMENT_FULFILLED": {
			return {
				...state,
				comment: action.payload,
				new: true,
			}
		}
		case "FETCH_COMMENTs_FULFILLED": {
			return {
				...state,
				comments: action.payload,
			}
		}
		default:
     		return state
	}	
}
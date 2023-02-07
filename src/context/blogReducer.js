 export default ( state, action ) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'SET_POST':
            return {
                ...state,
                currentPost: action.payload
            }
        case 'SENDING_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'REQUEST_FINISHED':
            return {
                ...state,
                loading: false
            }
            default:
                return state
    } 
     
}

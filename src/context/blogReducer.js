 export default ( state, action ) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                blogPosts: action.payload
            };
        case 'SET_POST':
            return {
                ...state,
                currentBlogPost: action.payload
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

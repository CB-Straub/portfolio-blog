import React, { useReducer } from "react";
import BlogContext from './blogContent'
import blogReducer from './blogReducer'

const BlogProvider = (props) => {

    const initialState = {
        //blogPosts changed to posts
        posts:[],
        // currentBlogPost changed to currentPost
        currentPost: null,
        loading: true
    }

    const [state, dispatch] = useReducer(blogReducer, initialState)

    const getPosts = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST'})
            const res = await fetch(`../posts`)
            const data = await res.json()
            dispatch({ type: 'REQUEST_FINISHED'})
            dispatch({ type: 'SET_POSTS', payload:data})
            
        } catch(error) {
            console.log()
            
        }
    };

    const getPostsById = async (id) => {
        try {
            dispatch({ type: 'SENDING_REQUEST'})
            const res = await fetch(`../posts/${id}`)
            const data = await res.json()
            dispatch({ type: 'REQUEST_FINISHED'})
            dispatch({ type: 'SET_POST', payload: data})

        } catch (error) {
            console.log()
            
        }
    }

    return (
        <BlogContext.Provider
            value={{
                // blogPosts: state.posts
                posts: state.posts,
                // currentBlogPost: state.currentBlogPost,
                currentPost: state.currentPost,
                loading: state.loading,
                getPosts: getPosts,
                getPostsById: getPostsById
            }}>
                {props.children}
         </BlogContext.Provider>
    )
 

}

export default BlogProvider
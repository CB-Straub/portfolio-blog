import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/blogContent'
import { useParams } from 'react-router-dom'
// import posts from './db.json'
import{ posts } from '../posts'  

const Post = (posts) => {

  const blogContext = useContext(BlogContext)
  const { getPostsById, currentPost } = blogContext

  let { postId } = useParams()

  useEffect(() => {
    getPostsById(postId)
  },[posts])


  return (

    <div className='post'>
      {
        currentPost ? (
          <>
            <div className='post-image' style={{
              width: '100%',
              height: '600px',
              // backgroundImage: `url('${ currentBlogPost.image}')`,
              backgroundImage: `url('${currentPost.image}')`,
              backgrounPosition: 'center',
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              position:'relative',
              borderTopRightRadius:'5px',
              borderTopLeftRadius: '5px',
              imageResolution: '24dpi',
             
            }}>
           </div>

           <div className='post-content'>
                {/* <p>{currentBlogPost.author}</p>
                <p>{currentBlogPost.date}</p>
                <h1> {currentBlogPost.title}</h1>
                <p> {currentBlogPost.content}</p> */}
                <p>{currentPost.author}</p>
                <p>{currentPost.date}</p>
                <h1> {currentPost.title}</h1>
                <p> {currentPost.content}</p>


           </div>
          
          
          
          </>
        ) : (

          <div> ...Loading  </div>
        )
      }

    </div>
  )
}

export default Post
import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/blogContent'
import { useParams } from 'react-router-dom'

const Post = () => {

  const blogContext = useContext(BlogContext)
  const { getPostsById, currentBlogPost } = blogContext

  let { postId } = useParams()

  useEffect(() => {
    getPostsById(postId)
  },[])


  return (

    <div className='post'>
      {
        currentBlogPost ? (
          <>
            <div className='post-image' style={{
              width: '100%',
              height: '600px',
              backgroundImage: `url('${ currentBlogPost.image}')`,
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
                <p>{currentBlogPost.author}</p>
                <p>{currentBlogPost.date}</p>
                <h1> {currentBlogPost.title}</h1>
                <p> {currentBlogPost.content}</p>

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
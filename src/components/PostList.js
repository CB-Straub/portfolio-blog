import React, { useContext, useEffect } from 'react'

//context
import BlogContext from '../context/blogContent'

//components
import PostCard from './PostCard'


const PostList = () => {

  const blogContext = useContext(BlogContext)
  const { getPosts, blogPosts, loading } = blogContext

  useEffect(() => {
    getPosts()
  },[])

  console.log(blogPosts)

  return (

    <div className='postList'>
      <div className='container'>
        {/* <h2>Posts</h2> */}
        {
          !loading ? (
            <div className='post-grid-container'>
                {
                  blogPosts.map(( post, i ) => {
                    return(
                      <PostCard
                        key={i}
                        title={post.title}
                        image={post.image}
                        author={post.author}
                        date={post.date}
                        id={post.id} />
                    )
                  })
                }

            </div>
          ) : (
            <div>...Loading</div>
          )
        }
      </div>
 </div>
  )
}

export default PostList
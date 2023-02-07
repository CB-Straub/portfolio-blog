import React, { useContext, useEffect } from 'react'

//context
import BlogContext from '../context/blogContent'

//components
import PostCard from './PostCard'
import {posts} from '../posts'


const PostList = () => {

  const blogContext = useContext(BlogContext)
  const { getPosts, loading } = blogContext

  useEffect(() => {
    getPosts()
  },[])

  console.log(posts)

  return (

    <div className='postList'>
      <div className='container'>
        {/* <h2>Posts</h2> */}
        {/* { */}
          {/* !loading ? (
            <div className='post-grid-container'>
                {
                  posts.map(( posts, i ) => {
                    return(
                      <PostCard
                        key={i}
                        title={posts.title}
                        image={posts.image}
                        author={posts.author}
                        date={posts.date}
                        id={posts.id} />
                    )
                  })
                }

            </div>
          {/* ) : (
            <div>...Loading</div>
          )
        } */}
      </div>
 </div>
  )
}

export default PostList
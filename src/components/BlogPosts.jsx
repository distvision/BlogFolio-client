import React from 'react'
import Posts from './Posts'

function BlogPosts({ onLoadingStateChange }) {

  return (
    <>
      <article className='max-w-[80%] mx-auto min-h-[71vh] md:max-w-[650px]'>
        <div className='pt-5'>
          <h1 className='text-2xl font-bold mb-5 text-zinc-300'>
            Posts
          </h1>
          <Posts onLoadingStateChange={onLoadingStateChange} />
        </div>
      </article>
    </>
  )
}

export default BlogPosts

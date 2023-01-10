import React from 'react'
import Posts from './Posts'

function BlogPosts() {
  return (
    <>
      <section className='max-w-[80%] m-auto md:max-w-[650px]'>
        <div className='py-5'>
          <h1 className='text-2xl font-bold mb-5 text-zinc-300'>
            Posts
          </h1>
          <Posts />
        </div>
      </section>
    </>
  )
}

export default BlogPosts

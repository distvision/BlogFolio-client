import React, { useState } from 'react'
import BlogPosts from '../components/BlogPosts'
import HeaderComp from '../components/HeaderComp'

import Loading from '../components/Loading';

function Blog() {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoadingStateChange(isLoading) {
    setIsLoading(isLoading)
  }

  return (
    <>
      {
        isLoading && <Loading />
      }
      <section className={`${isLoading ? "hidden" : "block"}`}>
        <div>
          <BlogPosts onLoadingStateChange={handleLoadingStateChange} />
        </div>
      </section>
    </>
  )
}

export default Blog

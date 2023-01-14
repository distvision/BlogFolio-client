import React, { useEffect, useState } from 'react';
import { client } from '../client';
import { format } from "date-fns";
import { Link } from 'react-router-dom';


function Posts({ onLoadingStateChange }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const query = '*[_type == "post"]';

    onLoadingStateChange(true)
    client.fetch(query)
      .then((data) => {
        setPosts(data)
        onLoadingStateChange(false)
      })
  }, [])


  return (
    <>
      <div className='rounded-lg border border-zinc-600 bg-neutral-900
          p-4 hover:bg-neutral-800 transition-all mb-5'>
        {posts.map((post, index) => (
          <Link key={post.title + index} to="/post">
            <h1 className='text-2xl font-bold mb-2 text-zinc-400'>{post.title}</h1>
            <p className='text-base font-medium text-zinc-400'>{post.subtitle}</p>
            <p className='text-zinc-400 mt-2'>{
              format(new Date(post.publishedAt), "YYY' • 'd' de 'MMMM' • 'k'h'mm")
            }</p>
          </Link>
        ))
        }
      </div>
    </>
  )
}

export default Posts

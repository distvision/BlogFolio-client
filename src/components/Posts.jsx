import React, { useEffect, useState } from 'react';
import { client } from '../client';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';


function Posts({ onLoadingStateChange }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // const query = '*[_type == "post"]';

    onLoadingStateChange(true)
    client.fetch(`*[_type == "post"]{
      slug, title,publishedAt, subtitle}`)
      .then((data) => {
        setPosts(data)
        onLoadingStateChange(false)
      })
  }, [])


  return (
    <>
      <div className='flex flex-col-reverse'>
        {posts.map((post) => (
          <Link key={post.slug.current} to={"/blog/" + post.slug.current}>
            <div className='border-y border-zinc-800 bg-neutral-900
            hover:bg-neutral-800 transition-all p-4 mb-5'>
              <h1 className='text-2xl font-bold mb-2 text-zinc-400'>
                {post.title}
              </h1>
              <p className='text-base font-medium text-zinc-400'>{post.subtitle}</p>
              <p className='text-zinc-400 mt-2'>{
                moment(post.publishedAt).utc(+2).format('YYYY-MMM-DD, HH:mm a')
              }</p>
            </div>
          </Link>
        ))
        }
      </div>
    </>
  )
}

export default Posts

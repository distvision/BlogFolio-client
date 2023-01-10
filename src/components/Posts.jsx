import React from 'react'

function Posts() {
  return (
    <>
      <div className='rounded-lg border border-zinc-600 bg-neutral-900
          p-4 hover:bg-[#111111] transition-all mb-5'>
        <a href="#">
          <h1 className='text-2xl font-bold mb-2 text-zinc-400'>BlogFolio</h1>
          <p className='text-base font-medium text-zinc-400'>My personal blog and portfolio</p>
          <p className='text-zinc-400 mt-2'>28 Set, 1999</p>
        </a>
      </div>
    </>
  )
}

export default Posts

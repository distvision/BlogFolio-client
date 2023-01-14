import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import { client } from '../client';
import Code from '../components/Code'


function Post() {
  const [content, setContent] = useState([])

  useEffect(() => {
    const query = '*[_type == "post"]';

    client.fetch(query)
      .then((data) => {
        setContent(data)
      })
  }, [])


  return (
    <article className='max-w-[80%] m-auto md:max-w-[650px]'>
      <div><hr className=' border-zinc-600 mt-5 w-full m-auto' /></div>
      <div className='py-5'>
        {
          content.map((item, index) => (
            <div key={item.title + index} className='text-zinc-200 font-medium'>
              < Markdown options={{
                overrides: {
                  Code: {
                    component: Code
                  }
                }
              }
              }>
                {item.body}
              </Markdown >
            </div >
          ))
        }
      </div >
    </article >
  )
}

export default Post

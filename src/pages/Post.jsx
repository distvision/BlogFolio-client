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
        console.log(data);
      })
  }, [])


  return (
    <article>
      <div>
        {
          content.map((item, index) => (
            <div key={item.title + index} className='text-zinc-200 font-medium'>
              <Markdown options={{
                overrides: {
                  Code: {
                    component: Code
                  }
                }
              }}>
                {item.body}
              </Markdown>
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default Post

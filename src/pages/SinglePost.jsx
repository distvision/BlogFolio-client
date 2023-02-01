import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { client } from '../client';
import Markdown from 'markdown-to-jsx'
import Code from '../components/Code'
import moment from 'moment/moment';
import Loading from '../components/Loading';



function SinglePost() {
  const [content, setContent] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams()



  useEffect(() => {

    client.fetch(`*[slug.current == $slug]{
      slug, title,body,publishedAt}`, { slug })
      .then((data) => {
        setContent(data[0])
        setIsLoading(false)
      }).catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [slug])


  return (
    <>
      {
        isLoading && <Loading />
      }
      <article className='max-w-[80%] m-auto md:max-w-[650px]'>
        <div className={`${isLoading ? "hidden" : "block"}`}>
          <div>
            <div className='my-5'>
              <div >
                <h1 className='text-2xl font-bold mb-2 text-zinc-400'>{content.title}</h1>
                <p className='text-zinc-400 mt-2'>{
                  moment(content.publishedAt).utc(+2).format('YYYY-MMM-DD, HH:mm a')
                }</p>
              </div>
            </div>
            <div><hr className=' border-zinc-600 mt-5 w-full m-auto' /></div>
            <div className='py-5'>
              <div className='text-zinc-400 font-medium'>
                <Markdown options={{
                  overrides: {
                    Code: {
                      component: Code
                    }
                  }
                }
                }>{content.body || ""}</Markdown>
              </div >
            </div >
          </div>
          <div className=' mb-5'>
            <Link className='rounded-lg border border-zinc-600 bg-neutral-900 hover:bg-neutral-800 transition-all px-3 py-2 text-base font-semibold text-zinc-400' to='/blog'>Back to blog</Link>
          </div>
        </div>
      </article >
    </>
  )
}

export default SinglePost

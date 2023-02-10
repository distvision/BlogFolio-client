import React from 'react'

const About = () => {
  return (
    <section className='max-w-[80%] m-auto md:max-w-[650px]'>
      <div className='py-5'>
        <h1 className='text-2xl font-bold mb-2 text-zinc-300'>Olá, I'm distvision</h1>
        <p className='text-lg font-medium text-zinc-400'>I am a 23-year-old person who like to spend time in front of a computer pretending to code. Passionate about building things
          <br /> <br />
          This blog is like a diary where i write about my experience learning, implementing and building things.
        </p>
      </div>
      {/* <div><hr className=' border-zinc-600 w-full m-auto' /></div> */}
      {/* <div className='py-5'>
        <h1 className='text-2xl font-bold mb-5 text-zinc-300'>Things that I have been doing</h1>
        <div className='border-y border-zinc-800 bg-neutral-900
            hover:bg-neutral-800 transition-all p-4'>
          <a href="#">
            <h1 className='text-2xl font-bold mb-2 text-zinc-400'>BlogFolio</h1>
            <p className='text-base font-medium text-zinc-400'>My personal blog and portfolio</p>
          </a>
        </div>
      </div> */}
    </section>
  )
}

export default About

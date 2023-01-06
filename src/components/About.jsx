import React from 'react'

const About = () => {
  return (
    <section className='max-w-[80%] m-auto md:max-w-[650px]'>
      <div className='py-5'>
        <h1 className='text-2xl font-bold mb-2 text-zinc-300'>Olá, I'm distvision</h1>
        <p className='text-base font-medium text-zinc-400'>I am a 23-year-old developer who like to spend time <br className='hidden md:block' /> in front of a  computer pretending to do something interesting. <br /> <br /> Passionate about building <i>senas nices (cool stuff)</i></p>
      </div>
      <div><hr className=' border-zinc-600 w-full m-auto' /></div>
      <div className='py-5'>
        <h1 className='text-2xl font-bold mb-5 text-zinc-300'>Things that I have been doing</h1>
        <div className='rounded-lg border border-zinc-600 bg-neutral-900
        p-4 hover:bg-[#111111] transition-all'>
          <a href="#">
            <h1 className='text-2xl font-bold mb-2 text-zinc-400'>BlogFolio</h1>
            <p className='text-base font-medium text-zinc-400'>My personal blog and portfolio</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

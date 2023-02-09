import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import HeaderComp from '../components/HeaderComp'

const ContactLinks = [
  {
    label: 'Github',
    url: 'https://github.com/distvision',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/distor_things',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/user_fred_/',
  },
];

function Contacts() {
  return (
    <>
      <HeaderComp />
      <section className='max-w-[80%] m-auto md:max-w-[650px]'>
        <div className='py-5'>
          <h1 className='text-2xl font-bold mb-2 text-zinc-300'>Contacts</h1>
        </div>
        <div><hr className=' border-zinc-800 w-full m-auto' /></div>
        <div>
          {
            ContactLinks.map((item, index) => (
              <div key={index}>
                <div>
                  <a href={item.url}
                    className='text-lg w-full font-normal text-zinc-400
                  py-2 px-1 hover:bg-neutral-900 transition-all
                  flex justify-between items-center'>
                    <span>{item.label}</span>
                    <HiArrowUpRight size={18} className='text-zinc-400' />
                  </a>
                </div>
                <div><hr className=' border-zinc-800 w-full m-auto' /></div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Contacts

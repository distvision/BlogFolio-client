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
        <div className='my-5'>
          <h1 className='text-2xl font-bold text-zinc-300'>Contacts</h1>
        </div>
        <div>
          {
            ContactLinks.map((item, index) => (
              <div key={index}>
                <div>
                  <a href={item.url}
                    className='text-lg w-full font-medium text-zinc-400
                    border-y border-zinc-800 bg-neutral-900
                    hover:bg-neutral-800 transition-all p-4 mb-5
                    flex justify-between items-center'>
                    <span>{item.label}</span>
                    <HiArrowUpRight size={18} className='text-zinc-400' />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Contacts

import React from 'react'
import { Link } from 'react-router-dom';
import profilePic from '../assets/ozen.jpg'

const links = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'Contacts',
    url: '/contacts',
  },
];

function HeaderComp() {
  return (
    <header className='max-w-[80%] m-auto md:max-w-[650px]'>
      <div className='pb-5 pt-4 flex justify-between items-center'>
        <img className='rounded-full border-2 border-zinc-400 w-[80px] mr-5' src={profilePic} alt="avatar" />

        <nav className=''>
          <ul className='flex justify-end gap-8 items-center'>
            {
              links.map((link) => (
                <li
                  className=''
                  key={link.label}
                >
                  <Link to={link.url} className='border-y border-zinc-800 bg-neutral-900 hover:bg-neutral-800 transition-all px-5 py-2 text-base font-semibold text-zinc-400'>
                    {link.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div><hr className=' border-zinc-600 w-full m-auto' /></div>
    </header>
  )
}

export default HeaderComp

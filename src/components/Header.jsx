import React from 'react'

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
    label: 'GitHub',
    url: 'https://github.com/distvision',
  },
  {
    label: 'Contacts',
    url: '/contacts',
  },
];

function Header() {
  return (
    <header className='max-w-[80%] m-auto md:max-w-[650px]'>
      <div className='pb-5 pt-4 flex flex-col'>
        <img className='rounded-full border-2 border-zinc-400 w-[120px] m-auto' src="https://avatars.githubusercontent.com/u/68926804?v=4" alt="avatar" />

        <nav className='md:m-auto'>
          <ul className='flex justify-between content-center mt-5 md:w-[450px]'>
            {
              links.map((link) => (
                <li
                  className='rounded-lg border border-zinc-600 bg-neutral-900 p-4 hover:bg-[#111111] transition-all px-3 py-[2px]'
                  key={link.label}
                >
                  <a className='text-base font-semibold text-zinc-400' href={link.url}>{link.label}</a>
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

export default Header

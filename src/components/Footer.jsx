import React from 'react'

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

function Footer() {
  return (
    <>
      <footer className='w-full bottom-0'>
        <div>
          <div className='max-w-[80%] mx-auto md:max-w-[650px] bg-[#111111]'>
            <div><hr className='border-zinc-600 w-full m-auto mb-2' /></div>
            <p className='text-sm font-normal text-zinc-400 text-center'>
              Designed and developd by distor.things
            </p>
            <div className='flex justify-center gap-5 items-center pb-2'>
              {
                ContactLinks.map((item, index) => (
                  <div key={index}>
                    <div>
                      <a href={item.url}
                        className='text-sm font-normal text-zinc-400'>
                        <span>{item.label}</span>
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

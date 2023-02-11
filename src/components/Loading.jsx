import React from 'react'
import LoadingImg from '../assets/Ozen.gif'


function Loading() {
  return (
    <div className='flex justify-center flex-col items-center min-h-[71vh]'>
      <img className='w-[80px] rounded-full' src={LoadingImg} alt="ozen" />
    </div>
  )
}

export default Loading

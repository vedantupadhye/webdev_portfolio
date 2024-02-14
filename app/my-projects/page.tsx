"use client"

import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-8 max-w-[90%] max-h-[90%]'>
        <div className='rounded-lg w-[450px] h-[50px] cursor-pointer'>
        <video autoPlay loop muted >
              <source
              src='/smedia new.mp4'
              type='video/mp4'/>
              Your browser does not support the video tag
            </video>
            <div className='text-white pt-2'>A fullstack Blog website with google authentication </div>
        </div>

        <div className='rounded-lg w-[450px] h-[250px] cursor-pointer'>
            <video autoPlay loop muted >
              <source
              src='/dropboxnew.mp4'
              type='video/mp4'/>
              Your browser does not support the video tag
            </video>
            <div className='text-white pt-2'>Dropbox Clone made with Clerk , react-dropdown, firebase </div>
        </div>

        <div className='rounded-lg w-[450px] h-[250px] cursor-pointer'>
            <video autoPlay loop muted >
              <source
              src='/admindashnew.mp4'
              type='video/mp4'/>
              Your browser does not support the video tag
            </video>
            <div className='text-white pt-2'>A fullstack Blog website with google authentication </div>
        </div>

        <div className='rounded-lg w-[450px] h-[250px] cursor-pointer'>
            <video autoPlay loop muted >
              <source
              src='/smedia.mp4'
              type='video/mp4'/>
              Your browser does not support the video tag
            </video>
            <div className='text-white pt-2'>A fullstack Blog website with google authentication </div>
        </div>
      </div>
    </div>
  )
}

export default Page
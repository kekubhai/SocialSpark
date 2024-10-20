import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner() {
 const user=useUser;
  return (
    <div className='p-2 bg-white-400 
    rounded-xl shadow-sm flex items-center
    bg-pink-800
     border gap-5'>
  
        <div>
        <h2 className='font-bold text-[29px] '>WELCOME TO SocialSpark</h2>
        <h2 className=''>Join Community, Create and Share your thought</h2>
       {!user?
        <Link href={'/sign-up'}>
        <Button className="mt-3 bg-blue-500">Get Started</Button>
        </Link>:
       <UserButton/> }
        </div>
        
    </div>
  )
}

export default Banner
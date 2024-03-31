"use client";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import React from 'react'
import CarGrid from '@/components/CarGrid';
const Main = () => {

  const { data: session } = useSession();
    return (
    <div>
      <div className='shadow-lg p-8 bg-zince-300/10 flex-col gap-2 my-6'>
        Email: <span className='font-bold'>{session?.user?.email}</span>
      </div>
        <CarGrid />
        <button 
        onClick={() => signOut()}
        className='bg-red-600 text-white font-bold cursor-pointer px-6 py-2 mt-3 mb-3 '>Log Out</button>
    </div>
  )
}

export default Main
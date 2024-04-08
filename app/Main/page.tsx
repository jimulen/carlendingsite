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
      <h1 className='text-lg mt-3 text-center font-bold'>WELCOME</h1>
        <CarGrid />
        <button 
        onClick={() => signOut()}
        className='bg-red-600 my-3 mx-8 py-3 px-3 rounded-md text-white font-bold cursor-pointer  '>Log Out</button>
    </div>
  )
}

export default Main
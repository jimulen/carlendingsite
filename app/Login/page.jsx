"use client";
// login.js
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/Main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-5 font-bold rounded-lg border-t-4 border-green-400 ">Login
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
         onChange={(e) => setEmail(e.target.value)}
        type="text" placeholder="Email" />
        <input
        onChange={(e) => setPassword(e.target.value)}
         type="password" placeholder="Password" />
        <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Login</button>
        {error && (
                  <div className='bg-red-500 text-white w-fit py-1 px-3 text-sm rounded-md mt-2 '>{error}</div>
        ) }
        <Link className='text-sm mt-3 text-right' href={'/Register'}>Don't have an account? <span className='underline'>Register</span></Link>
    </form>
    </div>
   </div>
  );
};

export default Login;

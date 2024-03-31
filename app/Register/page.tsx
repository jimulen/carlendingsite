"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nida, setNida] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: {
        target: any; preventDefault: () => void; 
}) => {
        e.preventDefault();

        if (!email || !password || !nida || !text || !name){
            setError("All fields are required");
            return;
        }

        try {


             const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
             });

             const { user } = await resUserExists.json();

             if ( user ){
                setError("user already exists.");
                return;
             }

              const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password, nida, text, name,
                }),

                
            });

            if (res.ok){
                // Reset form if registration successful
                const form = e.target;
                form.reset();
                router.push("/Main");
            } else {
                // Update state with error message if registration failed
                const data = await res.json();
                setError(data.message || "User registration failed");
            }

        } catch (error) {
            console.log("Error during registration", error);
            setError("Error during registration");
        }
    }; 

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 font-bold rounded-lg border-t-4 border-green-400">
                Register
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"  required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <input onChange={(e) => setNida(e.target.value)} type="nida" placeholder="NIDA Number" required />
                    <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Residence" />
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Location" />
                    <button type="submit" className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Register</button>
        <div className='bg-red-500 text-white w-fit py-1 px-3 text-sm rounded-md mt-2 '>{error}</div>
        <Link className='text-sm mt-3 text-right' href={'/Login'}> have an account? <span className='underline'>Login</span></Link>
                </form>
            </div>
        </div>
    )
    }
    export default Register;      
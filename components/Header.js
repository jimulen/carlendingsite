import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="header">
  <h1 className="text-3xl font-bold text-white">DODOMA CAR LENDING SITE</h1>
  <div className="header-right">
  <button><Link href={"/"}>Home</Link></button>
  <button><Link href={"/Login"}>Login</Link></button>
    <button><Link href={"/Register"}>Register</Link></button>
  </div>
</div>
  )
}

export default Header
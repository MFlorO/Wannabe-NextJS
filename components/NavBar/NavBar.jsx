import React from "react";
import Image from 'next/image'
import Link from "next/link"

const NavBar = () => {
  return (
    <div className=" bg-gray-400 w-full h-12 flex flex-row  justify-start items-center">
      <div className="pl-10 flex flex-row w-40 justify-around ">
        <Image src="/logo.png" alt="logo" width={500} height={500} className="h-10" />
        <Link href="/" alt="" className="font-sains text-2xl text-center text-black">Home</Link>
      </div>
    </div>
  );
};

export default NavBar;

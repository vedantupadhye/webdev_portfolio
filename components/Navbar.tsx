
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> 
        </div>
        <h1 className="text-purple-600 text-[25px] font-semibold">
          Vedant{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "} 
            Upadhye{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        <Link href={"https://www.linkedin.com/in/vedant-upadhye-84b136234/"}>
          <Image
            src={"/LinkedIn.png"}
            alt={'linkedIn'}
            width={28}
            height={28}
          />
          </Link>
          <Link href={"https://twitter.com/vupadhye944"}>
          <Image
            src={"/twitter.jpeg"}
            alt={"X"}
            width={28}
            height={28}
          />
          </Link>
          <Link href={"https://github.com/vedantupadhye"}>
          <Image
            src={"/github.png"}
            alt={"X"}
            width={28}
            height={28}
          />
          </Link>
    
      </div>
    </div>
  );
};

export default Navbar;
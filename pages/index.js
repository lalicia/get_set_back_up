import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Link from "next/link";

import logolm from "../assets/logo-lm.JPG";
import logodm from "../assets/logo-dm.JPG";
import "tailwindcss/tailwind.css";
import {MoonIcon, SunIcon} from "@heroicons/react/solid";

import {useTheme} from "next-themes";
import {useState, useEffect} from "react";

export default function Home() {
  const {systemTheme , theme, setTheme} = useTheme ();
  // //this and useEffect for Hydration check
  const [mounted, setMounted] = useState(false);

  useEffect(() =>{
      setMounted(true);
    },[])


  
  if(!mounted) return null;
  
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <>
      <Head>
        <title>Get Set Back Up | Home</title>
      </Head>

      {currentTheme ==="dark" ? 
          (
            <SunIcon className="w-10 h-10 text-yellow-500 toggle" role="button" onClick={() => setTheme('light')} />
          )
        :
         (
            <MoonIcon className="w-10 h-10 text-gray-900 toggle" role="button" onClick={() => setTheme('dark')} />
          )
        }

      <div className="flex flex-initial flex-col justify-self-center justify-center mx-auto max-w-[80%] mt-[25vh]" >
          <div className="flex justify-self-center justify-center">
          <Image 
            src={currentTheme === 'dark' ? logodm : logolm} alt="get set back up"/>
          </div>
        
          <div className="flex flex-initial flex-row justify-around max-w-[60%] w-full mx-auto mt-[4rem] mb-[4rem]">
            <Link href="/pc"><button className="font-bold tracking-wider px-6 py-2.5  bg-[#5271ff] uppercase rounded-full shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-500 active:shadow-lg transition duration-150 ease-in-out">PC</button></Link>
            <Link href="/mac"><button className="font-bold tracking-wider px-6 py-2.5  bg-[#5271ff] uppercase rounded-full shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-500 active:shadow-lg transition duration-150 ease-in-out">MAC</button></Link>
          </div>
      </div>

      <Link href="/about"><a className="about-link font-bold">About</a></Link>
    </>
  )
}

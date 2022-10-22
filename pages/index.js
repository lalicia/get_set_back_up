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

      <div className="flex flex-initial flex-col justify-self-center justify-center m-40" >
          <div className="flex flex-initial justify-self-center justify-center">
          <Image 
            src={currentTheme === 'dark' ? logodm : logolm} alt="get set back up"/>
          </div>
        
        <button className="rounded-full">PC</button>
        <Link href="/mac"><button className="homepage-btn">MAC</button></Link>
      </div>

      <Link href="/about"><a className="about-link">About</a></Link>
    </>
  )
}

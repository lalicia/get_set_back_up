import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Link from "next/link";

import logo from "../assets/logo-lm.JPG"

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="get set back up" />
      <Link href="/pc"><button className="homepage-btn">PC</button></Link>
      <Link href="/mac"><button className="homepage-btn">MAC</button></Link>
    </div>
  )
}

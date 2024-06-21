import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Contact } from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
    <h1> Contact </h1>
    <br/>
    <h2> Follow Me!</h2>
      <Contact/> 
      </div>
    </>

  )
}
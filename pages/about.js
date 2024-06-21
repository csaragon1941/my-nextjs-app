import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AboutMe from '@/components/About'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <div>
      <AboutMe/> 
      </div>
    </>

  );
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UpperBar from "./components/Upperbar/UpperBar";
const Home: NextPage = () => {
  return (
    <>
        {/*UPPER BAR*/}
        <UpperBar />
        {/*END OF UPPER BAR*/}

        {/* START OF NAVBAR   */}
    </>
  )
}

export default Home

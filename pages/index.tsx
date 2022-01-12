import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UpperBar from "./components/Upperbar/UpperBar";
import NavBar from "./components/Navbar/NavBar";
import LoginSignup from "./components/LoginSignup/LoginSignup";
const Home: NextPage = () => {
  return (
    <>
        {/*UPPER BAR*/}
        <UpperBar />
        {/*END OF UPPER BAR*/}

        {/* START OF NAVBAR */}
        <NavBar />
        {/* END OF NAVBAR */}

    </>
  )
}

export default Home

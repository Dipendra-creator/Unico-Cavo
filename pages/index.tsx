import NavBar from "./components/Navbar";
import Main from './components/Main';
import Footer from "./components/Footer";
import ContactUS from "./components/Contact Us";

import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Unico Cavo</title>
                <meta name="description"
                      content="Unico Cavo ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js."/>
                <meta property="og:title" content="Unico Cavo " key="title"/>
            </Head>
            <NavBar/>
            <Main/>
            <ContactUS/>
            <Footer/>
        </>
    )
}

import NavBar from "./components/Navbar";
import Main from './components/Main';
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Unico Cavo</title>
                <meta name="description"
                      content="Unico Cavo is a cable company established in Aligarh to serve clients across India"/>
                <meta property="og:title" content="Unico Cavo " key="title"/>
            </Head>
            <NavBar/>
            <Main/>
            <Contact/>
            <Footer/>
        </>
    )
}

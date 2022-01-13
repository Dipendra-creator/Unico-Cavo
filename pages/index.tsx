import type { NextPage } from 'next'
import UpperBar from "./components/Upperbar";
import Navbar from "./components/Navbar";
import Main from './components/Main';
const Home: NextPage = () => {
  return (
    <>
        {/*UPPER BAR*/}
        <UpperBar />
        {/*END OF UPPER BAR*/}

        {/* START OF NAVBAR */}
        <Navbar />
        {/* END OF NAVBAR */}

        {/* START OF MAIN */}
        <Main />
        {/* END OF MAIN */}
    </>
  )
}

export default Home

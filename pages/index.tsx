import type { NextPage } from 'next'
import UpperBar from "./components/Upperbar/UpperBar";
import NavBar from "./components/Navbar/NavBar";
import Main from './components/Main/Main';
const Home: NextPage = () => {
  return (
    <>
        {/*UPPER BAR*/}
        <UpperBar />
        {/*END OF UPPER BAR*/}

        {/* START OF NAVBAR */}
        <NavBar />
        {/* END OF NAVBAR */}

        {/* START OF MAIN */}
        <Main />
        {/* END OF MAIN */}
    </>
  )
}

export default Home

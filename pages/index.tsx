import type { NextPage } from 'next'
import UpperBar from "./components/Upperbar";
import Navbar from "./components/Navbar";
import Main from './components/Main';
const Home: NextPage = () => {
  return (
    <>
        <UpperBar />
        <Navbar />
        <Main />
    </>
  )
}

export default Home

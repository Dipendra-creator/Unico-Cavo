import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="flex container mt-0">
            <div className="sm:px-12 sm:flex-row sm:pt-12 sm:pb-6 2xl:px-0 px-4 pt-8 flex flex-col w-fw ">
                <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
                    <Link href="/">
                        <a aria-label="Home">
                            <img src="/logo.png" alt="logo" width="90" height="28"/>
                        </a>
                    </Link>
                </div>
                <div className="flex flex-wrap mt-1">
                    <Link href="/">
                        <a aria-label="Home"/>
                    </Link>
                    {/* TODO: Fix Links and Create Pages */}
                    <Link href="/">
                        <a className="sm:mr-8 sm:mb-0 mb-4 text-left mr-4">Home</a>
                    </Link>
                    <Link href="/New">
                        <a className="sm:mr-8 sm:mb-0 mb-4 text-left mr-4">New arrivals</a>
                    </Link>
                    <Link href="/Cables">
                        <a className="sm:mr-8 sm:mb-0 mb-4 text-left mr-4">Cables</a>
                    </Link>
                    <Link href="/Products">
                        <a className="sm:mr-8 sm:mb-0 mb-4 text-left mr-4">Products</a>
                    </Link>
                    <Link href="/#Contact">
                        <a className="sm:mr-8 sm:mb-0 mb-4 text-left mr-4">Contact Us</a>
                    </Link>
                    <Link href="/About">
                        <a className="sm:mr-8 sm:mb-0 mb-4 text-left mr-4">About Us</a>
                    </Link>


                </div>

            </div>
                <div className="flex flex-1 justify-end relative items-center">
                    <a href={"tel:+919639695825"}>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">
                            <p className={"text-white"}>CALL US</p>
                            <div className="w-2"/>
                            <FontAwesomeIcon icon={faPhone} height={"20px"}/>
                        </button>
                    </a>
                </div>
        </nav>
    )
}

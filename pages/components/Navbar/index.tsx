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
                    {/* TODO: Fix Links */}
                    <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Home</p>
                    <a aria-label="new arrivals" href="#">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">New arrivals</p>
                    </a>
                    <a aria-label="sofas" href="#">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Cables</p>
                    </a>
                    <a aria-label="living room" href="#">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Products</p>
                    </a>
                    <a aria-label="on sale" href="#">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Contact Us</p>
                    </a>
                    <a aria-label="chairs" href="#">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">About Us</p>
                    </a>


                </div>

            </div>
                <div className="flex flex-1 justify-end relative items-center">
                    <a href={"tel:+918533001308"}>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">
                            <p className={"text-white"}>+91256482566</p>
                            <div className="w-2"/>
                            <FontAwesomeIcon icon={faPhone} height={"20px"}/>
                        </button>
                    </a>
                </div>
        </nav>
    )
}

import Link from "next/link"
import Image from 'next/image'

import {useState} from "react";
import {Transition} from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import logo from '@/images/logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex container w-full items-center justify-between h-16">
                    <div className="flex items-center container mr-2">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <a aria-label="Home">
                                    <Image src={logo} alt="Unico Cavo Logo" width="90" height="28"/>
                                </a>
                            </Link>
                        </div>
                        <div className="flex hidden md:block container">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/">
                                    <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</a>
                                </Link>
                                <Link href="/New">
                                    <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Cables</a>
                                </Link>
                                <Link href="/Products">
                                    <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Products</a>
                                </Link>
                                <Link href="/#Contact">
                                    <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact
                                        Us</a>
                                </Link>
                                <Link href="/About">
                                    <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About Us</a>
                                </Link>
                                {/*TODO: Right align the button*/}
                                <div className={"flex flex-1 justify-end relative items-center"}>
                                    <a className={"flex flex-1 justify-end relative items-center"}
                                       href={"tel:+919639695825"}>
                                        <button
                                            className="flex align-baseline text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-2xl lg:rounded">
                                            {/* TODO: Align Icon with Text */}
                                            <FontAwesomeIcon icon={faPhoneAlt} height="20" className="lg:mr-2"/>
                                            <p className="hidden lg:block text-white uppercase">Call Us</p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                        <a href={"tel:+919639695825"} className="md:hidden ml-2">
                            <button
                                className="flex align-baseline text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-2xl">
                                {/* TODO: Align Icon with Text */}
                                <FontAwesomeIcon icon={faPhoneAlt} height="20" className="lg:mr-2"/>
                                <p className="hidden lg:block text-white uppercase">Call Us</p>
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                            <Link href="/">
                                <a className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            </Link>
                            <Link href="/New">
                                <a className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cables</a>
                            </Link>
                            <Link href="/Products">
                                <a className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>
                            </Link>
                            <Link href="/#Contact">
                                <a className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact
                                    Us</a>
                            </Link>
                            <Link href="/About">
                                <a className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About
                                    Us</a>
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

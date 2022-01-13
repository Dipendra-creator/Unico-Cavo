import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <div className="flex justify-center">
                <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
                    <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
                        <Link href="/">
                            <a aria-label="Home">
                                <img src="/logo.jpeg" alt="logo" width="90" height="28"/>
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-wrap mt-1">
                        <Link href="/">
                            <a aria-label="Home">
                                <p className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4">Home</p>
                            </a>
                        </Link>
                        <Link href="/categories">
                            <a aria-label="All categories">
                                <p className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Cables</p>
                            </a>
                        </Link>
                        <Link href="/categories">
                            <a aria-label="All categories">
                                <p className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Contact Us</p>
                            </a>
                        </Link>
                        <Link href="/categories">
                            <a aria-label="All categories">
                                <p className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">About Us</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center">
            <div className="sm:px-12 sm:flex-row sm:pt-12 sm:pb-6 2xl:px-0 px-4 pt-8 flex flex-col w-fw ">
                <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
                    <Link href="/">
                        <a aria-label="Home">
                            <img src="/logo.jpeg" alt="logo" width="90" height="28"/>
                        </a>
                    </Link>
                </div>
                <div className="flex flex-wrap mt-1">
                    <Link href="/">
                        <a aria-label="Home"/>
                    </Link>
                    {/* TODO: Fix Links */}
                    <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Home</p>
                    <a aria-label="new arrivals" href="/category/new-arrivals">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">New arrivals</p>
                    </a>
                    <a aria-label="sofas" href="/category/sofas">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Cables</p>
                    </a>
                    <a aria-label="living room" href="/category/living-room">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Products</p>
                    </a>
                    <a aria-label="on sale" href="/category/on-sale">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Contact Us</p>
                    </a>
                    <a aria-label="chairs" href="/category/chairs">
                        <p className=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">About Us</p>
                    </a>
                </div>
            </div>
        </nav>
    )
}

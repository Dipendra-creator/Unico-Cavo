import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-center">
            <div
                className="sm:flex-row sm:items-center w-full flex-col flex mx-10 px-12 py-8 2xl:px-0 border-solid border-t border-gray-300">
                <p className="block text-gray-700 text-xs">Copyright © 2022 Unico Cavo. All rights reserved.</p>
                    <div className="sm:justify-end sm:m-0 flex flex-1 mt-4">
                        <Link href="/admin">
                            <a aria-label="Admin panel">
                                <p className="text-sm font-semibold">Admins</p>
                            </a>
                        </Link>
                    </div>
            </div>
        </footer>
    )
}

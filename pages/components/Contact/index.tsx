
export default function Contact() {
    return (
        <div id={"Contact"} className=" text-gray-100 px-8 py-5">
        {/*  Text Center Div  */}
        <div
            className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Contact Us!</h2>
                    <div className="text-gray-700 mt-8">
                            <p>Call Us:</p>
                            <p><a className="underline" href={"tel:+919639695825"}>Phone: +919639695825</a></p>
                            {/* TODO: Check Timings*/}
                            <p className="mb-2">Timings: 10 am - 7 pm (Monday - Saturday)</p>
                            <p>Mail Us:</p>
                            <p className="underline"><a href="mailto:infounicocavo@gmail.com">infounicocavo@gmail.com</a></p>
                    </div>
                </div>
            {/*  MT-8 DIV  */}
            </div>
            <div className="">
                <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                           type="text" placeholder=""/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                           type="text"/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mt-8">
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

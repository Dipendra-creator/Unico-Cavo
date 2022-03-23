import CustomForm from "./CustomForm";

export default function Contact() {
    return (
        <section id={"Contact"} className="text-gray-100 md:px-8 md:py-5 px-2 py-0.5">
            <div
                className="max-w-screen-xl px-2 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Contact Us!</h2>
                        <div className="text-gray-700 mt-8">
                            <p>Call Us:</p>
                            <p><a className="underline" href={"tel:+919639695825"}>Phone: +919639695825</a></p>
                            {/* TODO: Check Timings*/}
                            <p className="mb-2">Timings: 10 am - 7 pm (Monday - Saturday)</p>
                            <p>Mail Us:</p>
                            <p className="underline"><a
                                href="mailto:infounicocavo@gmail.com">infounicocavo@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <CustomForm/>
            </div>
        </section>
    )
}

import {FormEvent, useRef, useState} from "react";

export default function Contact() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    async function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(name == "" || email == "" || message == ""){
            alert("Please Fill the form First!");
            return;
        }
        const formData = {
            name,
            email,
            message,
            "_subject": `Regarding email on ${new Date().toLocaleDateString(undefined, {timeZone: 'Asia/Kolkata'})} at
            ${new Date().toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'})}`,
            // Auto Response will not work due to Ajax and Captcha Disable
            "_autoresponse": `Dear ${name}, we have received your mail will revert you as soon as possible`,
            "_template": "box"
        }
        try {
            // TODO: Change email to infounicocavo@gmail.com
            const res = await fetch("https://formsubmit.co/ajax/40838f5535e1424aabef5f51e9273915", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        } catch (e) {
            console.log(e)
        }
        setMessage("");
        setName("");
        setEmail("");
    }

    return (
        <section id={"Contact"} className="text-gray-100 px-8 py-5">
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
                            <p className="underline"><a
                                href="mailto:infounicocavo@gmail.com">infounicocavo@gmail.com</a></p>
                        </div>
                    </div>
                    {/*  MT-8 DIV  */}
                </div>
                <form onSubmit={submitForm}>
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input name="email" type="email" placeholder="Email Address"
                               className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                               value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea name="message"
                                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                  value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className="mt-8">
                        <button type="submit"
                                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

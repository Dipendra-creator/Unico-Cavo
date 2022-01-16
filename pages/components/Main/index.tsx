import { useRouter } from 'next/router'
import { } from '@fortawesome/free-solid-svg-icons'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Image from "next/image";
import wire1 from "../../../public/static/images/wire1.png"
import wire2 from "../../../public/static/images/wire2.png"
import wire3 from "../../../public/static/images/wire3.png"
import wire4 from "../../../public/static/images/wire4.png"
import Link from 'next/link'


// @ts-ignore
function Button({ title, onClick, full = false }) {
    let classNames = "text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent"

    if (full) {
        classNames = `${classNames} w-full`
    }
    return (
        <button onClick={onClick} className={classNames}>
            <div>
                {title}
            </div>
        </button>
    )
}

// @ts-ignore
const Tag = ({ category, year }) => {
    return (
        <div className="border-l border-gray-900 px-3 pt-1 mb-10">
            <p className="text-xs tracking-wider m-0 leading-tight">{category}</p>
            { year && <p className="text-xs tracking-wider m-0 leading-tight">{year}</p>}
        </div>
    )
}

// @ts-ignore
const Center = ({ price, title, link }) => {
    const router = useRouter()
    function navigate() {
        router.push(link)
    }
    return (
        <div>
            <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{title}</p>
            <p className="py-6 tracking-wide">FROM <span>${price}</span></p>
            <Button
                onClick={navigate}
                title="Shop Now"
            />
        </div>
    )
}
// @ts-ignore
const Footer = ({ designer }) => {
    return (
        <div className="flex flex-1 flex-col justify-end pb-10 mt-4">
            <p className="font-light text-xs tracking-tight m-0 leading-tight mb-2">Design by</p>
            <p className="text-xxs font-semibold tracking-tight m-0 leading-tight">{designer}</p>
        </div>
    )
}

// @ts-ignore
const DisplayMedium = ({ imageSrc, title, subtitle, link }) => {
    return (
        <div className=" mb-4 lg:mb-0 bg-gray-300 p-8 pb-0 hover:bg-light-200">
            <Link href={`${link}`}>
                <a aria-label={title}>
                    <div className="flex flex-column justify-center items-center h-56">
                        <Image src={imageSrc} alt={title} className="mimg w-3/5" height={"220px"} width={"320px"}/>
                    </div>
                    <div className="mb-8">
                        <p className="text-3xl font-semibold mb-1">{title}</p>
                        <p className="text-xs text-gray-700">{subtitle}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

// @ts-ignore
const DisplaySmall = ({ link, title, subtitle, imageSrc }) =>  (
    <div className="lg:w-flex-fourth bg-gray-300 px-2 pt-12 pb-0 lg:p-6 lg:pb-0
  hover:bg-light-200 lg:mb-0 mb-4">
        <Link href={link}>
            <a aria-label={title}>
                <div className="flex flex-column justify-center items-center h-45">
                    <Image alt={title} src={imageSrc} className="simg w-3/5"  height={"220px"} width={"320px"}/>
                </div>
                <div className="">
                    <p className="text-xl font-semibold mb-1">{title}</p>
                    <p className="text-xs text-gray-700 mb-4">{getTrimmedString(subtitle, 150)}</p>
                </div>
            </a>
        </Link>
    </div>
)

// @ts-ignore
function getTrimmedString(string, length = 8) {
    if (string.length <= length) {
        return string
    } else {
        return string.substring(0, length) + '...'
    }
}

// @ts-ignore
function titleIfy(slug) {
    const words = slug.split('-');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }
    return words.join(' ')
}

export default function Main() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-0 py-0 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="heading backdrop-blur-xl:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Welcome to Unico Cavo
                        </h1>
                        <p className="pera lg mx-auto leading-relaxed text-base">
                            A LEADING WIRE AND CABLES MANUFACTURERS WITH QUALITY PRODUCTS.
                        </p>
                    </div>
                </div>
                <div className="bg-red-400 p-6 pb-10 smpb-6 flex lg:flex-row flex-col container px-2  mx-auto">
                    <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
                        <Tag year="2021" category="Coaxials" />
                        <Center price="200" title={"Premium Wires"} link={`#`} />
                        <Footer designer="Aashendra Rajput" />
                    </div>
                    <div className="flex flex-1 justify-center items-center relative">
                        <div className="z-10">
                            <Image src={wire1} className="w-136" alt="Showcase item" />
                        </div>
                        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88 bg-blue-300 z-0 rounded-full" />
                    </div>

                </div>

            </section>

            <div className=" container mx-auto lg:my-8 lg:grid-cols-2 grid-cols-1 grid gap-4 my-4">
                <DisplayMedium
                    imageSrc={wire2}
                    subtitle={`50 items`}
                    title={titleIfy("Wires")}
                    link={`#`}
                />
                <DisplayMedium
                    imageSrc={wire3}
                    subtitle={`50 items`}
                    title={titleIfy("Wires")}
                    link={`#`}
                />
            </div>
            <div className="pt-10 pb-6 flex flex-col items-center">
                <h2 className="text-4xl mb-3">Trending Now</h2>
                <p className="text-gray-600 text-sm">Find the perfect piece or accessory to finish off your favorite room in the house.</p>
            </div>
            <div className="ml-20 mr-20 my-8 flex flex-col lg:flex-row justify-between sm: ml-2 mr-2">
                <DisplaySmall
                    imageSrc={wire1}
                    title={"inventory[0].name"}
                    subtitle={"inventory[0].categories[0]"}
                    link={`#`}
                />

                <DisplaySmall
                    imageSrc={wire2}
                    title={"inventory[0].name"}
                    subtitle={"inventory[0].categories[0]"}
                    link={`#`}
                />

                <DisplaySmall
                    imageSrc={wire3}
                    title={"inventory[0].name"}
                    subtitle={"inventory[0].categories[0]"}
                    link={`#`}
                />

                <DisplaySmall
                    imageSrc={wire4}
                    title={"inventory[0].name"}
                    subtitle={"inventory[0].categories[0]"}
                    link={`#`}
                />

            </div>

        </>
    )
}


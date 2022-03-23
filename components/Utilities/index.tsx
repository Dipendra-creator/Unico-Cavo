import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

export function Tag({category, year}: { category: string; year: string }) {
    return (
        <div className="border-l border-white px-3 pt-1 mb-10">
            <p className="text-white text-xs tracking-wider m-0 leading-tight">{category}</p>
            {year && <p className="text-white text-xs tracking-wider m-0 leading-tight">{year}</p>}
        </div>
    )
}

export function Button(props: {
    title?: string;
    onClick: any;
    isFull: boolean
}) {
    let classNames = "text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent"

    if (props.isFull) {
        classNames = `${classNames} w-full`
    }
    return (
        <button onClick={props.onClick} className={classNames}>
            <div>
                {props.title}
            </div>
        </button>
    )
}

export function Center(props: { price: string; title: string, link: string }) {
    const router = useRouter()

    function navigate() {
        router.push(props.link)
    }

    return (
        <div>
            <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{props.title}</p>
            <p className="py-6 tracking-wide">FROM <span>₹{props.price}/90m</span></p>
            <Button
                onClick={navigate}
                title="More Info"
                isFull={false}
            />
        </div>
    )
}

export function DisplayMedium(props: {
    imageSrc: StaticImageData;
    title: string;
    subtitle: string;
    link: string
}) {
    return (
        <div className="mLeft mb-4 lg:mb-0 bg-gray-300 p-8 pb-0 hover:bg-light-200">
            <Link href={`${props.link}`}>
                <a aria-label={props.title}>
                    <div className="flex flex-column justify-center items-center h-56">
                        <Image src={props.imageSrc} alt={props.title} className="mimg w-3/5"
                               height={"220px"}
                               width={"320px"}/>
                    </div>
                    <div className="mb-8">
                        <p className="text-3xl font-semibold mb-1">{props.title}</p>
                        <p className="text-xs text-gray-700">{props.subtitle}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export function DisplaySmall(props: { link: string; title: string; subtitle: string; imageSrc: StaticImageData | string }) {
    return (
        <div className="lg:w-flex-fourth bg-gray-300 ml-2 mr-2 px-2 pt-12 pb-0 lg:p-6 lg:pb-0
  hover:bg-light-200 lg:mb-0 mb-2">
            <Link href={props.link}>
                <a aria-label={props.title}>
                    <div className="flex flex-column justify-center items-center h-45">
                        <Image alt={props.title} src={props.imageSrc} className="simg w-3/5" height={"220px"}
                               width={"320px"}/>
                    </div>
                    <div className="">
                        <p className="text-xl font-semibold mb-1">{props.title}</p>
                        <p className="text-xs text-gray-700 mb-4">{getTrimmedString(props.subtitle, 150)}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}


export function getTrimmedString(string: string, length = 8) {
    if (string.length <= length) {
        return string
    } else {
        return string.substring(0, length) + '...'
    }
}

export function titleIfy(slug: string) {
    const words = slug.split('-');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }
    return words.join(' ')
}


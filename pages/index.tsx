import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from "./components/Navbar";
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Unico Cavo is cable supplier originated in Aligarh, UP"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <div className="bg-blue-300
        p-6 pb-10
        flex lg:flex-row flex-col">
                <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
                    <div className="border-l border-gray-900 px-3 pt-1 mb-10">
                        <p className="text-xs tracking-wider m-0 leading-tight uppercase">Cables</p>
                        <p className="text-xs tracking-wider m-0 leading-tight">{2022}</p>
                    </div>
                    <div>
                        <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">Solar Cable</p>
                        <p className="py-6 tracking-wide">FROM <span>$200</span></p>
                        <button
                            className="text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black text-lg hover:text-white py-4 px-12 border-2 border-black hover:border-transparent">
                            <div>
                                Shop Now
                            </div>
                        </button>
                        <div className="left-64 flex flex-1 justify-center items-center relative">
                            <div className="z-10">
                                <Image src="/static/images/Solar-Cable.jpg" width={200} height={200} className="w-136"
                                       alt="Showcase item"/>
                            </div>
                            <div className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full" />
                        </div>
                    </div>
                    {/*<Center*/}
                    {/*    price="200"*/}
                    {/*    title={inventory[2].name}*/}
                    {/*    link={`/product/${slugify(inventory[2].name)}`}*/}
                    {/*/>*/}
                    {/*<Footer*/}
                    {/*    designer="Jason Bourne"*/}
                    {/*/>*/}
                </div>
                <div className="flex flex-1 justify-center items-center relative">
                    {/*<Showcase*/}
                    {/*    imageSrc={inventory[2].image}*/}
                    {/*/>*/}
                    <div className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full"/>
                </div>
            </div>
        </div>
    )
}

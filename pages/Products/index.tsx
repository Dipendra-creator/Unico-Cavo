import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import product1 from '@/images/products/product1.webp'
import product2 from '@/images/products/product2.webp'
import product3 from '@/images/products/product3.webp'
import product4 from '@/images/products/product4.webp'
import product5 from '@/images/products/product5.webp'
import product6 from '@/images/products/product6.webp'
import product7 from '@/images/products/product7.webp'
import product8 from '@/images/products/product8.webp'
import product9 from '@/images/products/concealed.png'
import product10 from '@/images/products/product23.jpeg'
import product11 from '@/images/products/product11.jpg'
import product12 from '@/images/products/product12.jpg'
import product13 from '@/images/products/product13.webp'
import product14 from '@/images/products/product14.jpg'
import product15 from '@/images/products/product15.webp'
import product16 from '@/images/products/product24.jpeg'
import product17 from '@/images/products/product17.jpg'
import product18 from '@/images/products/product18.webp'
import product19 from '@/images/products/product19.webp'
import product20 from '@/images/products/product20.webp'
import product21 from '@/images/products/product21.webp'
import product22 from '@/images/products/product22.webp'
import Image from "next/image";

function Card(props: {
    productName: string
    productPrice: string
    imgSrc: StaticImageData
}) {
    return (
        <div className="shadow w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" style={{height: "380px"}}>
            <a href="#">
                <div className="hover:grow hover:shadow-lg" style={{justifyContent: "center", height: 252, width: 252}}>
                    <Image width={252} height={252} src={props.imgSrc} alt=''/>
                </div>
                <div className="pt-3 flex items-center justify-between">
                    <p className="">{props.productName}</p>
                </div>
                <p className="pt-1 text-gray-900">{props.productPrice}</p>
            </a>
        </div>
    )
}

export default function Product() {
    return (
        <>
            <NavBar/>
            <section className="bg-white py-8">

                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                               href="#">
                                Products
                            </a>
                        </div>
                    </nav>

                    <Card
                        productName={"LAN"}
                        productPrice={"₹3198"}
                        imgSrc={product1}
                    />
                    <Card
                        productName={"Superex FR PVC"}
                        productPrice={"₹1699"}
                        imgSrc={product2}
                    />
                    <Card
                        productName={"Superex FR PVC Silver"}
                        productPrice={"₹2499"}
                        imgSrc={product3}
                    />
                    <Card
                        productName={"Flex Multicolor Cable"}
                        productPrice={"₹5149"}
                        imgSrc={product4}
                    />

                    <Card
                        productName={"COM Cable"}
                        productPrice={"₹2279"}
                        imgSrc={product5}
                    />
                    <Card
                        productName={"Co-X Cable"}
                        productPrice={"₹2538"}
                        imgSrc={product6}
                    />
                    <Card
                        productName={"FR/FR-LSH/LSOH Single Silver Core"}
                        productPrice={"₹2656"}
                        imgSrc={product7}
                    />
                    <Card
                        productName={"Submersible Flat Cable"}
                        productPrice={"₹13198"}
                        imgSrc={product8}
                    />

                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product9}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product10}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product11}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product12}
                    />

                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product13}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product14}

                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product15}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product16}
                    />

                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product17}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product18}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product19}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product20}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product21}
                    />
                    <Card
                        productName={"Concealed Box"}
                        productPrice={"₹15 - ₹29 / Piece"}
                        imgSrc={product22}
                    />
                </div>
            </section>
            <Footer/>
            {/*<footer className="container mx-auto bg-white py-8 border-t border-gray-400">*/}
            {/*    <div className="container flex px-3 py-8 ">*/}
            {/*        <div className="w-full mx-auto flex flex-wrap">*/}
            {/*            <div className="flex w-full lg:w-1/2 ">*/}
            {/*                <div className="px-3 md:px-0">*/}
            {/*                    <h3 className="font-bold text-gray-900">About</h3>*/}
            {/*                    <p className="py-4">*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis*/}
            {/*                        tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">*/}
            {/*                <div className="px-3 md:px-0">*/}
            {/*                    <h3 className="font-bold text-gray-900">Social</h3>*/}
            {/*                    <ul className="list-reset items-center pt-3">*/}
            {/*                        <li>*/}
            {/*                            <a className="inline-block no-underline hover:text-black hover:underline py-1"*/}
            {/*                               href="#">Add social links</a>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </>
    )
}

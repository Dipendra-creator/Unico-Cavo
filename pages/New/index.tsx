import NavBar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";

export default function New() {
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
                                Cables
                            </a>
                        </div>
                    </nav>
                    {/* TODO: Use Loader to load these files */}
                    <Card
                        productName={"LAN"}
                        productPrice={"₹3198"}
                        imgSrc={"https://5.imimg.com/data5/SV/KX/WZ/SELLER-2099169/rubber-cables-500x500.jpg"}
                    />
                    <Card
                        productName={"Superex FR PVC"}
                        productPrice={"₹1699"}
                        imgSrc={"https://3.imimg.com/data3/JT/YO/MY-989308/silicone-rubber-cables-250x250.jpg"}
                    />
                    <Card
                        productName={"Superex FR PVC Silver"}
                        productPrice={"₹2499"}
                        imgSrc={"https://5.imimg.com/data5/JC/ZF/MT/SELLER-11798530/silicone-rubber-cables-500x500.jpg"}
                    />
                    <Card
                        productName={"Flex Multicolor Cable"}
                        productPrice={"₹5149"}
                        imgSrc={"https://5.imimg.com/data5/LR/IC/MY-675191/silicone-rubber-cables-500x500.png"}
                    />

                    <Card
                        productName={"COM Cable"}
                        productPrice={"₹2279"}
                        imgSrc={"https://5.imimg.com/data5/OQ/NX/DZ/SELLER-1729523/silicone-rubber-cable-500x500.jpg"}
                    />
                    <Card
                        productName={"Co-X Cable"}
                        productPrice={"₹2538"}
                        imgSrc={"https://5.imimg.com/data5/YL/MC/JQ/SELLER-25172538/heat-resistance-silicone-rubber-cable-500x500.png"}
                    />
                    <Card
                        productName={"FR/FR-LSH/LSOH Single Silver Core"}
                        productPrice={"₹2656"}
                        imgSrc={"https://4.imimg.com/data4/HI/XO/MY-1749292/rubber-insulated-wires-500x500.jpg"}
                    />
                    <Card
                        productName={"Submersible Flat Cable"}
                        productPrice={"₹13198"}
                        imgSrc={"https://5.imimg.com/data5/SY/DY/ME/SELLER-1100898/submersible-pump-cable-500x500.jpg"}
                    />
                </div>
            </section>
            <Footer/>
        </>
    )
}

function Card(props: {
    productName: string
    productPrice: string
    imgSrc: string
}) {
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name="description"
                      content="Unico Cavo is a cable company established in Aligarh to serve clients across India"/>
                <meta property="og:title" content="Unico Cavo " key="title"/>
            </Head>
            <div className="flex justify-center items-center bg-blue-lightest w-full md:w-1/2 xl:w-1/3 p-6">
                <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
                    <img className="w-1/2 h-full rounded-l-sm" src={props.imgSrc} alt="Room Image"/>
                    <div className="w-full flex flex-col">
                        <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1 text-grey-darkest">{props.productName}</h3>

                            <span className="text-5xl text-grey-darkest">{props.productPrice}</span>
                            <div className="flex items-center mt-4">
                                <div className="pr-2 text-xs">
                                    /90 meters
                                </div>
                            </div>
                        </div>
                        <a href={"tel: +919639695825"}>
                            <div
                                className="bg-gray-200 p-3 flex items-center justify-between transition hover:bg-grey-light">
                                Contact Now
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

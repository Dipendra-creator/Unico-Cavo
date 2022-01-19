import Footer from "pages/components/Footer";
import Navbar from "../components/Navbar";

export default function About () {
    return (
        <>
            <Navbar/>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                We connect the world with
                                <br className="hidden md:block" />
                                Electricity{' '}
                                <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  with quality cables
                </span>
              </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Ill be sure to note that in my log
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Lookout flogging bilge rat main sheet bilge water nipper fluke
                                        to go on account heave down.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        A business big enough that it could be listed
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Those options are already baked in with this model shoot me an
                                        email clear.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            144K
                        </h6>
                        <p className="font-bold">Downloads</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            32.1K
                        </h6>
                        <p className="font-bold">Users</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            12.9K
                        </h6>
                        <p className="font-bold">Subscribers</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            24.5K
                        </h6>
                        <p className="font-bold">Cookies</p>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path
    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/>
                                </svg>
                                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch
                                    everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest
                                    fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a className="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/106x106"
                                         className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path
    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/>
                                </svg>
                                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch
                                    everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest
                                    fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a className="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/107x107"
                                         className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="p-8">
                <div className="flex felx-col items-center justify-center"><span
                    className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">      Insight    </span>
                </div>
                <h1 className="text-4xl font-medium text-gray-700 text-center mt-6"> Full-Funnel Social Analytics </h1>
                <p className="text-center mt-6 text-lg font-light text-gray-500"> The time is now for it to be okay to
                    be great. For being a bright color. For standing out. </p></div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8">
                    <div
                        className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                        </svg>
                    </div>
                    <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3"> Social conversations </h2>    <p
                    className="font-light text-sm text-gray-500 mb-3"> We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to give others a hand. </p>
                    <a
                    className="text-indigo-500 flex items-center hover:text-indigo-600" href=""> More about us
                    icon <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                        <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              />
                    </svg></a></div>
                <div className="p-8">
                    <div
                        className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                  />
                        </svg>
                    </div>
                    <h2 className="uppercase mt-6 text-green-500 font-medium mb-3"> Social conversations </h2>    <p
                    className="font-light text-sm text-gray-500 mb-3"> We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to give others a hand. </p>    <a
                    className="text-green-500 flex items-center hover:text-green-600" href=""> More about us icon <svg
                    xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          />
                </svg></a></div>
                <div className="p-8">
                    <div
                        className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                  />
                        </svg>
                    </div>
                    <h2 className="uppercase mt-6 text-red-500 font-medium mb-3"> Social conversations </h2>    <p
                    className="font-light text-sm text-gray-500 mb-3"> We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to give others a hand. </p>
                    <a
                    className="text-red-500 flex items-center hover:text-red-600" href=""> More about us icon <svg
                    xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          />
                </svg></a></div>
            </div>
            <Footer/>
        </>
    )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from '@fortawesome/free-solid-svg-icons'
// import { Swiper, SwiperSlide } from "swiper/react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function Main() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="main">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="heading backdrop-blur-xl:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Welcome to Unico Cavo
                        </h1>
                        <p className="pera lg mx-auto leading-relaxed text-base">
                            A LEADING WIRE AND CABLES MANUFACTURERS WITH QUALITY PRODUCTS.
                        </p>
                    </div>
                    <AwesomeSlider>
                        <div data-src="/static/images/1.jpg" />
                        <div data-src="/static/images/2.jpg" />
                        <div data-src="/static/images/3.jpg" />
                    </AwesomeSlider>
                </div>
            </section>
            {/*<Swiper*/}
            {/*    spaceBetween={30}*/}
            {/*    centeredSlides={true}*/}
            {/*    autoplay={{*/}
            {/*        "delay": 2500,*/}
            {/*        "disableOnInteraction": false*/}
            {/*    }}*/}
            {/*    pagination={{*/}
            {/*        "clickable": true*/}
            {/*    }}*/}
            {/*    navigation={true} className="mySwiper">*/}
            {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 5</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 6</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 7</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 8</SwiperSlide>*/}
            {/*    <SwiperSlide>Slide 9</SwiperSlide>*/}
            {/*</Swiper>*/}
        </>
    )
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow'; // Import Coverflow effect styles
import 'swiper/css/effect-flip'; // Import Flip effect styles
import 'swiper/css/effect-cards'; // Import Cards effect styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Autoplay, EffectCube, EffectCoverflow, EffectFlip, EffectCards } from 'swiper/modules'; // Removed EffectParallax
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import frontImage from '../../img/frontImage.jpeg';
import frontImage2 from '../../img/frontImage2.jpeg';
import frontImage3 from '../../img/frontImage3.jpg';
import frontImage4 from '../../img/frontImage4.jpeg';
import './SlickCarousel.css'; // Import custom CSS for scaling effects

function Sliders() {
    const slickSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        speed: 500,
        pauseOnHover: false,
        className: "center",
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="sliders-page-container p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Sliders</h1>
            <div className="slider-container space-y-6">
                {/* Full-Screen Slider */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Full-Screen Slider</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="h-64"
                    >
                        <SwiperSlide>
                            <img src={frontImage} alt="Slide 1" className="w-full h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage2} alt="Slide 2" className="w-full h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage3} alt="Slide 3" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>

                {/* Carousel Slider */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Carousel Slider</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={10}
                        navigation
                        autoplay={{ delay: 3000 }}
                        className="h-64"
                    >
                        <SwiperSlide>
                            <img src={frontImage} alt="Slide 1" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage2} alt="Slide 2" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage3} alt="Slide 3" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage4} alt="Slide 4" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>


                {/* Parallax Slider */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Parallax Slider</h2>
                    <Swiper
                        modules={[Pagination, Autoplay]} // Removed EffectParallax module
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="h-64"
                    >
                        <SwiperSlide>
                            <img src={frontImage3} alt="Parallax Slide" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>

                {/* Responsive Gallery Slider */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Responsive Gallery Slider</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={2}
                        spaceBetween={10}
                        navigation
                        className="h-64"
                    >
                        <SwiperSlide>
                            <img src={frontImage} alt="Gallery 1" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage2} alt="Gallery 2" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage3} alt="Gallery 3" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frontImage4} alt="Gallery 4" className="w-full h-full object-cover rounded" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>

                {/* Cube Transition Carousel */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Cube Transition Carousel</h2>
                    <div className="w-96 h-96 mx-auto"> {/* Standard size for the div */}
                        <Swiper
                            modules={[EffectCube, Pagination, Autoplay]} // Added Autoplay module
                            effect="cube"
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
                            className="h-full"
                        >
                            <SwiperSlide>
                                <img src={frontImage} alt="Cube Slide 1" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage2} alt="Cube Slide 2" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage3} alt="Cube Slide 3" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage4} alt="Cube Slide 4" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>

                {/* Coverflow Transition Carousel */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Coverflow Transition Carousel</h2>
                    <div className="w-96 h-96 mx-auto"> {/* Standard size for the div */}
                        <Swiper
                            modules={[EffectCoverflow, Pagination, Autoplay]} // Added EffectCoverflow module
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay configuration
                            className="h-full"
                        >
                            <SwiperSlide>
                                <img src={frontImage} alt="Coverflow Slide 1" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage2} alt="Coverflow Slide 2" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage3} alt="Coverflow Slide 3" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage4} alt="Coverflow Slide 4" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>

                {/* Flip Transition Carousel */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Flip Transition Carousel</h2>
                    <div className="w-96 h-96 mx-auto"> {/* Standard size for the div */}
                        <Swiper
                            modules={[EffectFlip, Pagination, Autoplay]} // Added EffectFlip module
                            effect="flip"
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay configuration
                            className="h-full"
                        >
                            <SwiperSlide>
                                <img src={frontImage} alt="Flip Slide 1" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage2} alt="Flip Slide 2" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage3} alt="Flip Slide 3" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage4} alt="Flip Slide 4" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>

                {/* Cards Transition Carousel */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Cards Transition Carousel</h2>
                    <div className="w-96 h-96 mx-auto"> {/* Standard size for the div */}
                        <Swiper
                            modules={[EffectCards, Pagination, Autoplay]} // Added EffectCards module
                            effect="cards"
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay configuration
                            className="h-full"
                        >
                            <SwiperSlide>
                                <img src={frontImage} alt="Cards Slide 1" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage2} alt="Cards Slide 2" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage3} alt="Cards Slide 3" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage4} alt="Cards Slide 4" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>

                {/* Infinite Loop Carousel */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Infinite Loop Carousel</h2>
                    <div className="w-full h-32 mx-auto"> {/* Standard size for the div */}
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={4}
                            spaceBetween={20}
                            loop={true} // Enable infinite loop
                            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }} // Continuous autoplay
                            speed={3000} // Adjust speed for seamless looping
                            className="h-full"
                        >
                            <SwiperSlide>
                                <img src={frontImage} alt="Logo 1" className="w-full h-full object-contain" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage2} alt="Logo 2" className="w-full h-full object-contain" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage3} alt="Logo 3" className="w-full h-full object-contain" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage4} alt="Logo 4" className="w-full h-full object-contain" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage} alt="Logo 5" className="w-full h-full object-contain" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={frontImage2} alt="Logo 6" className="w-full h-full object-contain" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>

                {/* Infinite Loop Carousel with Scaling Effect */}
                <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Infinite Loop Carousel with Scaling Effect</h2>
                    <div className="w-full h-64 mx-auto relative"> {/* Standard size for the div */}
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={4}
                            spaceBetween={20}
                            loop={true} // Enable infinite loop
                            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }} // Continuous autoplay
                            speed={3000} // Adjust speed for seamless looping
                            centeredSlides={true} // Center the slides
                            className="h-full scaling-carousel"
                        >
                            <SwiperSlide className="scaling-slide">
                                <img src={frontImage} alt="Logo 1" className="w-full h-1/4 object-contain" />
                            </SwiperSlide>
                            <SwiperSlide className="scaling-slide">
                                <img src={frontImage2} alt="Logo 2" className="w-full h-1/4 object-contain" />
                            </SwiperSlide>
                            <SwiperSlide className="scaling-slide">
                                <img src={frontImage3} alt="Logo 3" className="w-full h-1/4 object-contain" />
                            </SwiperSlide>
                            <SwiperSlide className="scaling-slide">
                                <img src={frontImage4} alt="Logo 4" className="w-full h-1/4 object-contain" />
                            </SwiperSlide>
                            <SwiperSlide className="scaling-slide">
                                <img src={frontImage} alt="Logo 5" className="w-full h-1/4 object-contain" />
                            </SwiperSlide>
                            <SwiperSlide className="scaling-slide">
                                <img src={frontImage2} alt="Logo 6" className="w-full h-1/4 object-contain" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>
                {/* Closing div for Infinite Loop Carousel with Scaling Effect */}


            </div>
        </div>
    );
}

export default Sliders;
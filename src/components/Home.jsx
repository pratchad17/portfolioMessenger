import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You may need to import the AOS styles as well

import HeroImage from "../Assets/heroImage.png";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
        <div
            name="home"
            className=" w-full bg-gradient-to-b from-black via-black to-gray-800  md:h-screen pb-10 "
        >
            <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full w-full">
                    <div>
                        <div className="pb-4" data-aos="fade-up">
                            <h1 className="text-white  text-4xl sm:text-4xl font-bold pb-2">
                                Hi, I am
                            </h1>
                            <h1 className="text-blue-300  text-4xl sm:text-6xl font-bold">
                                Safkat Hasin Alavi
                            </h1>
                        </div>
                        <span className="text-white text-2xl sm:text-4xl">
                            And I am a
                        </span>
                        <TypeAnimation
                            className="text-blue-500 text-2xl sm:text-4xl"
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                " Software Engineer",
                                1000,

                                " Frontend Engineer",
                                1000,
                            ]}
                            speed={10}
                            repeat={Infinity}
                        />
                    </div>

                    <div className="mt-10">
                        <button
                            data-aos="fade-up"
                            className="group text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                />
                            </span>
                        </button>
                    </div>
                </div>
                <div data-aos="fade-left" className="w-1/2">
                    <img src={HeroImage} alt="my profile" className="mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
        <div
            name="about"
            className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-10"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-5 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p data-aos="fade-left" className="text-xl mt-20">
                    Seeking a challenging career in the IT sector, where I can
                    collaborate with a team of seasoned professionals, utilizing
                    my creative initiative, ideas, and genuine enthusiasm to
                    drive progress.
                </p>
                <ul data-aos="fade-left" className="text-xl mt-5 list-disc">
                    <li className="mt-3 ms-4">
                        <span className="me-1 font-bold">
                            Front-End Web Development:
                        </span>
                        Over two years of experience in HTML, CSS, SCSS,
                        JavaScript, WordPress, Tailwind, Bootstrap, and Appfarm.
                    </li>
                    <li className="mt-3 ms-4">
                        <span className="font-bold me-1">Frameworks:</span>
                        Proficient in React JS with a good understanding of
                        popular frameworks.
                    </li>
                    <li className="mt-3 ms-4">
                        <span className="font-bold me-1">Adaptability:</span>
                        Experienced in working in diverse environments.
                    </li>
                    <li className="mt-3 ms-4">
                        <span className="font-bold me-1">Ownership:</span>
                        Capable of taking ownership of projects with passion and
                        honesty.
                    </li>
                </ul>
                <br />
                <p data-aos="fade-right" className="text-xl">
                    Highly skilled front-end web developer with a solid
                    foundation in a range of technologies and frameworks. My
                    experience includes successful contributions to projects
                    utilizing HTML, CSS, JavaScript, and various frameworks,
                    such as React Js. I thrive in collaborative environments,
                    bringing creativity, initiative, and a genuine enthusiasm
                    for technology to drive positive outcomes. Known for taking
                    ownership of tasks and delivering results with passion and
                    honesty.
                </p>
                <p data-aos="fade-left" className="mt-10 text-xl">
                    Currently, I am leading a Norwegian project where my
                    responsibilities include client management and ensuring the
                    project aligns with their requirements. Additionally, I
                    oversee the testing phase before project deployment,
                    showcasing my expertise in handling clients and ensuring
                    project quality.
                </p>
                <br />
                <p data-aos="fade-right" className="text-xl">
                    During my student life, I actively participated in various
                    science-based project competitions, laying the foundation
                    for my passion for hands-on experiences and problem-solving.
                    In university, my involvement in robotics and business
                    competitions further honed my skills in diverse areas,
                    emphasizing my commitment to continuous learning.
                </p>
                <br />
                <p data-aos="fade-left" className="text-xl">
                    As an individual, I have a keen interest in gathering
                    diverse experiences. This curiosity has driven my active
                    participation in projects, competitions, and leadership
                    roles, contributing to both personal and professional
                    growth.
                </p>
            </div>
        </div>
    );
};

export default About;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedIn.com",
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com",
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:pratchad.alavi@gmail.com",
        },
    ];
    return (
        <div className="w-full h-30 bg-black text-white pb-10">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
                <div className="flex justify-center items-center pt-5">
                    <p className="text-lg">
                        Concept and Developed by ©{" "}
                        <a
                            className="text-xl font-bold text-blue-700"
                            href="https://www.linkedin.com/in/safkat-hasin-alavi-b68270184/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Safkat Hasin Alavi Pratchad
                        </a>
                    </p>
                </div>
                <div>
                    <div className="flex justify-center items-center mt-3 gap-6 ">
                        {links.map(({ id, child, href }) => (
                            <div
                                key={id}
                                className="hover:scale-150 duration-500 "
                            >
                                <a
                                    href={href}
                                    className=" text-white "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {child}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

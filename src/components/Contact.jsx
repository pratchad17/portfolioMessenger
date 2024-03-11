import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import MyMap from "./MyMap";
import AOS from "aos";
import "aos/dist/aos.css";
import FacebookMsg from "./FacebookMsg";
AOS.init({
    duration: 3000,
});

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //your emailjs service ID, template ID and public Key

        const serviceId = "service_gnwq195";
        const templateId = "template_imdt0ze";
        const publicKey = "wxmW7DPIk2iyTusxY";

        //create a new object that contains dynamic template params

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Alavi",
            message: message,
        };
        //send email using EmailJs
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };
    return (
        <div
            name="contact"
            className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white "
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        Contact
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center pr-5">
                    <div className="flex flex-col md:w-1/2 pt-8">
                        <div>
                            <p className="text-3xl font-bold text-blue-200">
                                Get in touch
                            </p>
                            <div data-aos="fade-right" className="pt-10">
                                <ul className="text-xl ">
                                    <li className="font-bold">
                                        Email :
                                        <p className="underline text-blue-400 ms-2">
                                            pratchad.alavi@gmal.com
                                        </p>
                                    </li>
                                    <li className="font-bold mt-2">
                                        Mobile :
                                        <p className="font-normal ms-2">
                                            +8801758190057
                                        </p>
                                    </li>
                                    <li className="font-bold mt-2">
                                        Address :
                                        <p className="ms-2 font-normal ">
                                            11/13, block-C,
                                            Tazmahalroad,Mohammadpur,Dhaka-1207
                                        </p>
                                    </li>
                                </ul>
                                <div className="pr-10 mt-10">
                                    <MyMap />
                                </div>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col  md:w-1/2 pt-24 "
                    >
                        <p className="py-6 text-lg  text-blue-200">
                            Submit the form below to get in touch with me
                        </p>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter your name "
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Enter your email "
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button
                            data-aos="fade-up"
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                            type="submit"
                        >
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
            <FacebookMsg />
        </div>
    );
};

export default Contact;

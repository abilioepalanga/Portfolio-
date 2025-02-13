"use client";
import { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "Building fast, responsive, and SEO-friendly websites using modern technologies.",
        details:
            "Specialized in developing custom web applications, e-commerce platforms, and corporate websites using the latest frameworks such as React, Next.js, and more.",
    },
    {
        num: "02",
        title: "Mobile Development",
        description:
            "Specialized in crafting high-performance, scalable mobile applications tailored for optimal user experiences.",
        details:
            "Our team develops cross-platform mobile applications with seamless user experiences, integrating with the latest APIs and cloud technologies.",
    },
    {
        num: "03",
        title: "UI/UX Design",
        description:
            "Creating beautiful and user-friendly interfaces for web and mobile applications.",
        details:
            "We craft intuitive UI/UX designs that enhance usability and accessibility, ensuring an engaging experience for end users.",
    },
    {
        num: "04",
        title: "Digital Marketing",
        description:
            "Helping businesses grow by creating and managing digital marketing campaigns.",
        details:
            "Our marketing strategies include SEO, social media management, and targeted advertising to maximize brand reach and customer engagement.",
    },
];

const Services = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <section className="min-h-screen flex flex-col justify-center py-12 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                scale: expandedService === index ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`flex flex-col justify-center p-6 bg-gray-800 rounded-2xl shadow-lg relative overflow-hidden transform transition-transform duration-300 border-2 ${
                                expandedService === index
                                    ? "border-blue-500 scale-110"
                                    : hoveredService === index
                                    ? "border-blue-400 hover:scale-105"
                                    : "border-transparent hover:scale-105"
                            }`}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            onClick={() =>
                                setExpandedService(
                                    expandedService === index ? null : index
                                )
                            }
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500 opacity-10 transition-opacity duration-300"></div>
                            <div className="w-full flex justify-between items-center mb-4">
                                <motion.div className="text-6xl font-extrabold text-white transition-colors duration-200">
                                    {service.num}
                                </motion.div>
                                <motion.div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center transition-all  animate-[pulse_1.5s_infinite_ease-in-out]">
                                    <FaRocket className="text-3xl text-black" />
                                </motion.div>
                            </div>
                            <h2 className="text-3xl font-semibold text-white transition-all duration-300">
                                {service.title}
                            </h2>
                            <p className="text-gray-400 mt-2 text-lg">
                                {service.description}
                            </p>
                            {expandedService === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-white mt-4 p-4 bg-gray-700 rounded-lg"
                                >
                                    {service.details}
                                </motion.div>
                            )}
                            <motion.div className="border-b border-blue-500 mt-6 w-0 group-hover:w-full transition-all duration-500"></motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

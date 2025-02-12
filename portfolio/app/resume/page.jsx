"use client";
import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const timelineData = [
    {
        year: "2017 - 2018",
        title: "Master's Degree - University",
        description:
            "Completed coursework in Mechanical Engineering with a focus on automation and computational methods.",
        category: "education",
    },
    {
        year: "2018 - 2019",
        title: "Pipe Technician - Saipem",
        description:
            "Worked in offshore pipeline coating operations, ensuring quality and process optimization.",
        category: "experience",
    },
    {
        year: "2019 - 2020",
        title: "Master's Degree - University",
        description:
            "Research on automation and PLC programming for mechanical applications.",
        category: "education",
    },
    {
        year: "2020 - 2023",
        title: "Senior Pipe Technician - Saipem",
        description:
            "Led technical teams in advanced coating and pipeline integrity projects.",
        category: "experience",
    },
    {
        year: "2023 - Present",
        title: "React & Next.js Developer - Freelance",
        description:
            "Building web applications with modern frameworks, enhancing UX/UI and performance.",
        category: "experience",
    },
];

const MyJourney = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            <div className="container mx-auto px-8">
                <h2 className="text-5xl font-bold text-center text-white mb-16">
                    My <span className="text-blue-500">Journey</span>
                </h2>

                <div className="relative flex flex-col md:flex-row items-center">
                    {/* Linha Vertical */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500"></div>

                    {timelineData.map((_, index) => (
                        <div
                            key={index}
                            className="absolute left-1/2 transform -translate-x-1/2"
                            style={{
                                top: `$${
                                    (index + 1) *
                                    (100 / (timelineData.length + 1))
                                }%`,
                            }}
                        >
                            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
                        </div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full"
                    >
                        <div className="text-center text-3xl font-bold text-white">
                            Education
                        </div>
                        <div className="text-center text-3xl font-bold text-white">
                            Experience
                        </div>
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`relative flex flex-col justify-center p-8 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 transform transition-all hover:scale-110 hover:shadow-blue-500/50 hover:bg-gray-700 ${
                                    item.category === "education"
                                        ? "md:mr-auto"
                                        : "md:ml-auto"
                                }`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 mr-4 shadow-md">
                                        {item.category === "education" ? (
                                            <FaGraduationCap className="text-white text-lg" />
                                        ) : (
                                            <FaBriefcase className="text-white text-lg" />
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-lg font-semibold">
                                        {item.year}
                                    </p>
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 mt-3 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MyJourney;

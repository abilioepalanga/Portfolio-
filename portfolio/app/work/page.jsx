"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern portfolio website built with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        image: "/images/cakes.png",
        video: "/videos/portfolio.mp4",
        link: "#",
    },
    {
        title: "E-commerce Platform",
        description:
            "A full-stack e-commerce application with Stripe integration.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/images/ecommerce.jpg",
        video: " /videos/ecommerce.mp4",
        link: "#",
    },
    {
        title: "Task Manager App",
        description:
            "A task management web app with drag-and-drop functionality.",
        technologies: ["React", "Firebase", "Redux"],
        image: "/images/taskmanager.jpg",
        video: "/videos/taskmanager.mp4",
        link: "#",
    },
    {
        title: "AI Image Generator",
        description:
            "A web app that generates AI-based images using OpenAI API.",
        technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
        image: "/images/ai-generator.jpg",
        video: "/videos/ai-generator.mp4",
        link: "#",
    },
];

const Work = () => {
    return (
        <section className="min-h-screen py-8 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-8">
                    <span className="text-white">My</span>{" "}
                    <span className="text-blue-400">Projects</span>
                </h1>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-0 rounded-lg shadow-lg transition duration-300 relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative w-full h-auto max-h-[600px] flex justify-center items-center">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto max-h-[600px] object-contain rounded-lg"
                                />
                                <motion.video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute inset-0 w-full h-auto max-h-[600px] object-contain rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                                />
                            </div>
                            <div className="p-4 bg-gray-900 rounded-lg mt-2">
                                <h2 className="text-lg font-semibold">
                                    {project.title}
                                </h2>
                                <p className="text-gray-300 text-xs">
                                    {project.description}
                                </p>
                                <div className="text-xs mt-2">
                                    <strong className="text-blue-400">
                                        Technologies:
                                    </strong>{" "}
                                    <span className="text-gray-300">
                                        {project.technologies.join(", ")}
                                    </span>
                                </div>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs transition mt-2"
                                >
                                    View Project <FaExternalLinkAlt />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

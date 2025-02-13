"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern portfolio website built with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        image: "/images/portfolio.jpg",
        link: "#",
    },
    {
        title: "E-commerce Platform",
        description:
            "A full-stack e-commerce application with Stripe integration.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/images/ecommerce.jpg",
        link: "#",
    },
    {
        title: "Task Manager App",
        description:
            "A task management web app with drag-and-drop functionality.",
        technologies: ["React", "Firebase", "Redux"],
        image: "/images/taskmanager.jpg",
        link: "#",
    },
    {
        title: "AI Image Generator",
        description:
            "A web app that generates AI-based images using OpenAI API.",
        technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
        image: "/images/ai-generator.jpg",
        link: "#",
    },
];

const Work = () => {
    return (
        <section className="min-h-screen py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-10">
                    <span className="text-white">My</span>{" "}
                    <span className="text-blue-400">Projects</span>
                </h1>
                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:border hover:border-blue-400 hover:ring-2 hover:ring-blue-400 transition duration-300"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-3xl font-semibold mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                            >
                                View Project <FaExternalLinkAlt />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

"use client";
import { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Linguagens Fundamentais",
        items: [
            { name: "HTML", percent: 90 },
            { name: "CSS", percent: 84 },
            { name: "JavaScript (JS)", percent: 80 },
        ],
    },
    {
        category: "Frameworks e Bibliotecas",
        items: [
            { name: "React.js", percent: 88 },
            { name: "Next.js", percent: 82 },
            { name: "Angular", percent: 48 },
            { name: "Vue.js", percent: 21 },
        ],
    },
    {
        category: "Pré-processadores e Estilização Avançada",
        items: [
            { name: "SASS/SCSS/Less", percent: 70 },
            { name: "Tailwind CSS", percent: 75 },
            { name: "Bootstrap", percent: 60 },
            { name: "Material UI", percent: 70 },
        ],
    },
    {
        category: "APIs e Integrações",
        items: [
            { name: "REST APIs", percent: 85 },
            { name: "GraphQL", percent: 70 },
            { name: "Axios/Fetch API", percent: 78 },
            { name: "WebSockets", percent: 28 },
        ],
    },
    {
        category: "Testes e Qualidade de Código",
        items: [
            { name: "Jest", percent: 70 },
            { name: "React Testing Library", percent: 60 },
            { name: "Cypress", percent: 73 },
        ],
    },
    {
        category: "Controle de Versão e Colaboração",
        items: [
            { name: "Git", percent: 80 },
            { name: "GitHub", percent: 80 },
            { name: "GitLab", percent: 70 },
        ],
    },
    {
        category: "UI/UX Design",
        items: [
            { name: "Figma", percent: 85 },
            { name: "Adobe XD", percent: 50 },
        ],
    },
    {
        category: "Ferramentas de Deploy e Cloud",
        items: [
            { name: "Vercel e Netlify", percent: 80 },
            { name: "Docker", percent: 40 },
            { name: "AWS", percent: 30 },
        ],
    },
    {
        category: "Noções de Backend",
        items: [
            { name: "Node.js", percent: 50 },
            { name: "Express.js", percent: 50 },
            { name: "NestJS", percent: 38 },
            { name: "PostgreSQL", percent: 51 },
            { name: "MySQL", percent: 53 },
            { name: "MongoDB", percent: 30 },
        ],
    },
];

const Skills = () => {
    return (
        <section className="min-h-screen py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-10">
                    <span className="text-white">My</span>{" "}
                    <span className="text-blue-400">Skills</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skillCategory, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                {skillCategory.category}
                            </h2>
                            {skillCategory.items.map((skill, idx) => (
                                <div key={idx} className="mb-4">
                                    <div className="flex justify-between">
                                        <span>{skill.name}</span>
                                        <span>{skill.percent}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-2 bg-blue-500"
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: `${skill.percent}%`,
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: "easeOut",
                                            }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

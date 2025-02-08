"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    { num: 6, text: "Years of Experience" },
    { num: 10, text: "Projects Completed (Last Year)" },
    { num: 3, text: "Companies Worked" },
    { num: 100, text: "Code Commits" },
];

const Stats = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-10">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-80 backdrop-blur-md transition-transform transform hover:scale-105 hover:shadow-2xl min-h-[180px] flex-1"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <motion.span
                                className="text-5xl font-extrabold text-blue-400"
                                whileHover={{
                                    scale: 1.2,
                                    textShadow:
                                        "0px 0px 8px rgba(59,130,246,0.8)",
                                }}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={3}
                                    delay={1}
                                />
                            </motion.span>
                            <p className="text-lg text-gray-300">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

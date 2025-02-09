"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
                }}
                className="relative flex justify-center items-center"
            >
                {/* Outer Animated Circle */}
                <motion.svg
                    className="absolute"
                    width="clamp(250px, 40vw, 600px)"
                    height="clamp(250px, 40vw, 600px)"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="230"
                        stroke="#00f"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                </motion.svg>

                {/* Image */}
                <motion.div
                    className="relative"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <Image
                        src="/assets/Four-Invert.png"
                        priority
                        quality={100}
                        width={400}
                        height={400}
                        alt="Profile Picture"
                        className="rounded-full object-cover w-[clamp(150px, 30vw, 450px)] h-[clamp(150px, 30vw, 450px)]"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;

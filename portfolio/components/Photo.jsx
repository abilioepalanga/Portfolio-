"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
                }}
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] 
                mix-blend-lighten absolute"
                >
                    <Image
                        src="/assets/Four-Invert.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>
                {/* End Image */}

                {/* Circle */}
                <motion.svg
                    className="w-[300px] xl:w-[506px]  h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#0026ffe9"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="253"
                            y1="0"
                            x2="253"
                            y2="506"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#1A202C" />
                            <stop offset="1" stopColor="#2D3748" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                {/* End Circle */}
            </motion.div>
        </div>
    );
};

export default Photo;

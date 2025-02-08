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
                style={{ transform: "translate(-50px, -50px)" }} // Movido mais para cima e para a esquerda
            >
                {/* Circle */}
                <motion.svg
                    className="absolute"
                    width={500} // Aumentado de 400 para 500
                    height={500} // Aumentado de 400 para 500
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
                        r="250"
                        stroke="#0026ffe9"
                        strokeWidth="8" // Mantido o dobro da espessura
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent" // Garante que o fundo dentro do círculo seja transparente
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
                        width={400} // Aumentado de 300 para 400
                        height={400} // Aumentado de 300 para 400
                        alt="Profile Picture"
                        className="rounded-full object-cover"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;

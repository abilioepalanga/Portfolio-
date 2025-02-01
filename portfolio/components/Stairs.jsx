import { animate, delay } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};
const Stairs = () => {
    return (
        <>
            {/*Render 6 motion divs, each representating o step of the stairs*/}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-blue-950 relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs;

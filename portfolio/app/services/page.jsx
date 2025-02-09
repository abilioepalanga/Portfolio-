"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "Building fast, responsive, and SEO-friendly websites using modern technologies.",
        href: "/web-development",
    },

    {
        num: "02",
        title: "Mobile Development",
        description: "Developing cross-platform mobile applications",
        href: "/mobile-development",
    },

    {
        num: "03",
        title: "DesignUI/UX Design ",
        description:
            "Creating beautiful and user-friendly interfaces for web and mobile applications.",
        href: "/design",
    },

    {
        num: "04",
        title: "Digital Marketing",
        description:
            "Helping businesses grow by creating and managing digital marketing campaigns.",
        href: "/digital-marketing",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group "
                            >
                                {/*Top*/}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl front-extrabold text-outline text-transparent group-hover:text-outline-hover">
                                        {service.num}
                                    </div>
                                    <Link href={service.href}>
                                        <BsArrowDownRight />
                                    </Link>
                                </div>
                                {/*Title*/}
                                <h2>{service.title}</h2>
                                {/*Description*/}
                                <p>{service.description}</p>
                                {/*Border*/}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

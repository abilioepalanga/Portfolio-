import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Download from "@/components/Download";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
    return (
        <section className="h-full bg-gray-900">
            <div className="container mx-auto h-full">
                <div
                    className="flex flex-col xl:flex-row items-center justify-between
                xl:pt-8 xl:pb-24"
                >
                    <div className="text-center xl:text-left order-2 xl:-order-none">
                        <span className="text-xl ">Frontend Developer</span>
                        <h1 className="h1 mb-6">
                            Hello! I'm
                            <br />
                            <span className="text-blue-500">
                                Abílio Elvis Epalanga
                            </span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I’m a Frontend Developer passionate about crafting
                            pixel-perfect, high-performance, and user-friendly
                            web applications. With expertise in modern
                            frameworks and a keen eye for design, I turn ideas
                            into seamless digital experiences. Let’s build
                            something amazing together!
                        </p>
                        {/* Button and Socials media*/}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Download />
                            <div className=" mb-8 xl:m-0">
                                <Social
                                    containerStyles=" flex gap-6"
                                    iconStyles="w-9 h-9 border border-blue-500 rounded-full
                                    flex justify-center items-center text-blue-500 text-base 
                                    hover:bg-blue-500 hover:text-white transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="order-1 xl:order-none nb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Download from "@/components/Download";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div
                    className="flex flex-col xl:flex-row items-center justify-between
                xl:pt-8 xl:pb-24"
                >
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Frontend Developer</span>
                        <h1 className="h1 mb-6">
                            Hi there! I'm
                            <br />
                            <span className="text-blue-800">
                                Abílio Elvis Epalanga
                            </span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I’m a Frontend Developer passionate about crafting
                            pixel-perfect, high-performance, and user-friendly
                            web applications. With expertise in modern
                            frameworks and a keen eye for design, I turn ideas
                            into seamless digital experiences. Let’s build
                            something amazing together!"
                        </p>
                        {/* Button and Socials media*/}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Download />
                        </div>
                    </div>
                    {/* Image */}
                    <div>Photo</div>
                </div>
            </div>
        </section>
    );
};

export default Home;

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto">
                {/* logoTipo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Elvis<span className="text-cyan-600">.</span>
                    </h1>
                </Link>
                {/* Desktop nov */}
                <Nav />
            </div>
        </header>
    );
};

export default Header;

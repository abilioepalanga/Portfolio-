import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                {/* logoTipo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Elvis<span className="text-blue-500">.</span>
                    </h1>
                </Link>

                {/* Desktop nov & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className=" xl:hidden">
                    <MobileNav />
                </div>

                {/* Fimmm */}
            </div>
        </header>
    );
};

export default Header;

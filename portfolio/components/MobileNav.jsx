"use client";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];
const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-violet-50" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Adicionando um título acessível */}
                <SheetHeader>
                    <SheetTitle>logo</SheetTitle>
                </SheetHeader>
                {/* logo */}
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

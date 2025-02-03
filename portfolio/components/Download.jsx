"use client"; // 🔹 Garante que o componente rode no cliente

import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
    const [open, setOpen] = useState(false); // 🔹 Definindo o estado corretamente

    return (
        <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* Botão que abre o diálogo */}
            <button
                onClick={() => setOpen(true)} // ✅ Estado controlado corretamente
                className="flex items-center gap-2 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-semibold uppercase tracking-wide transition hover:bg-blue-500 hover:text-white"
            >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
            </button>

            {/* Caixa de diálogo */}
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className="flex flex-col items-center text-center">
                    <SheetHeader>
                        <SheetTitle>Choose the language of the CV</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-4">
                        <a
                            href="/CV_Portugues.pdf"
                            download
                            className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-semibold uppercase tracking-wide transition hover:bg-blue-500 hover:text-white"
                        >
                            Download in Portuguese
                        </a>
                        <a
                            href="/CV_English.pdf"
                            download
                            className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-semibold uppercase tracking-wide transition hover:bg-blue-500 hover:text-white"
                        >
                            Download in English
                        </a>
                        <SheetClose className="mt-4 px-4 py-2 border border-gray-400 text-gray-600 rounded-full text-sm font-semibold uppercase tracking-wide transition hover:bg-gray-200">
                            Cancel
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default DownloadButton;

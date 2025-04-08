"use client";
import { Pages, Routes } from "@/constants/enums"
import Link from "../link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const links = [
        { id: crypto.randomUUID(), title: 'Home', href: Routes.ROOT },
        { id: crypto.randomUUID(), title: 'About', href: Routes.ABOUT },
        { id: crypto.randomUUID(), title: 'Contact', href: Routes.CONTACT },
        { id: crypto.randomUUID(), title: 'Login', href: `${Routes.AUTH}/${Pages.LOGIN}` },

    ]
    return (
        <nav className="flex-1 flex justify-end">
            <Button
                variant="secondary"
                size='sm'
                className="lg:hidden"
                onClick={ () => setIsOpen(!isOpen) }
            >
                <Menu className="w-5 h-5" />
            </Button>
            <ul className={ `fixed lg:static 
                ${isOpen ? 'left-0 z-50' : '-left-full'} top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10` }>
                <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-10 right-10 lg:hidden"
                    onClick={ () => setIsOpen(false) }
                >
                    <XIcon className="!w-6 !h-6" />
                </Button>
                { links.map(link => (
                    <li key={ link.id } className={ `${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? `${buttonVariants({ size: 'lg' })} !px-8 !rounded-full` : "text-accent hover:text-primary duration-200 transition-colors"} font-semibold duration-200 transition` }>
                        <Link href={ `/${link.href}` }>{ link.title }</Link>
                    </li>
                )) }

            </ul>
        </nav>
    )
}

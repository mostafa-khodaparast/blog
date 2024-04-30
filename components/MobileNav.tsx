"use client"

import { navlinks } from "@/constants"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from "react"



export default function MobileNav() {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="flex md:hidden z-10 top-2 w-10 h-10 rounded-lg">
            {open
                ?
                <button onClick={() => setOpen(false)}>
                    <XMarkIcon className="w-8 h-8" />
                </button>
                :
                <button onClick={() => setOpen(true)}>
                    <Bars3Icon className="w-8 h-8" />
                </button>
            }
            {open && <nav className="fixed top-0 z-10  h-screen w-1/3 left-0 bg-slate-200 dark:bg-custom-primary">
                <ul className="m-4 flex flex-col text-sm justify-evenly items-center h-screen">
                    {navlinks.map(link => <li key={link.path}>
                        <Link href={link.path}>
                            {link.title}
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>}

        </div>
    )
}
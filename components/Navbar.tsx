import Link from "next/link"
import { Auth, MobileNav, Social, ThemeSwitch } from "."
import { navlinks } from "@/constants"


export default function Navbar() {
  return (
    <div className="flex justify-between py-4 px-4 md:px-0">
      <div className="flex space-x-2 flex-1 items-center">
        <Social />
      </div>
      <div className="flex space-x-3 flex-1 justify-end items-center">
        <ThemeSwitch />
        <ul className="items-center space-x-3 hidden md:flex">
          {navlinks.map(link => <li key={link.path}>
            <Link href={link.path}>
              {link.title}
            </Link>
          </li>
          )}
        </ul>
        <MobileNav />
        <Auth />
      </div>
    </div>
  )
}


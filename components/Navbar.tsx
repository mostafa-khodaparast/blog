import Link from "next/link"
import { Auth, Social, ThemeSwitch } from "."


export default function Navbar() {
  return (
    <div className="flex justify-between py-4">
      <div className="flex space-x-2 flex-1 items-center">
        <Social />
      </div>
      <div className="flex space-x-3 flex-1 justify-end items-center">
        <ThemeSwitch />
        <Link href='/'>Homepage</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>About</Link>
        <Auth />
      </div>
    </div>
  )
}


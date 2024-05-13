import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row my-8">
      <div>
        <div className="flex space-x-1 items-center basis-1/5 mx-2">
          <Image
            src="/images/mostafakh.jpg"
            width={50}
            height={50}
            alt="creator"
            className="rounded-full"
          />
          <h2>Mostafa Khodaparast</h2>
        </div>
        <p className="text-wrap p-2 font-semibold text-sm">
          Highly motivated frontend developer. A quick learner who embraces
          new technologies. Collaborative team player with the ability to work
          closely with designers and other developers.
        </p>
      </div>
      <div className="basis-4/5">
        <div className="grid grid-cols-3 h-full">
          <div className="flex flex-col items-center justify-between font-semibold text-sm">
            <span className="underline">Links</span>
            <Link href="/">Home</Link>
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
          </div>
          <div className="flex flex-col items-center justify-between font-semibold text-sm">
            <span className="underline">Tags</span>
            <Link href="#">Fashion</Link>
            <Link href="#">Travel</Link>
            <Link href="#">Coding</Link>
          </div>
          <div className="flex flex-col items-center justify-between font-semibold text-sm">
            <span className="underline">Socials</span>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Linkedin</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


import Image from "next/image";
import Link from "next/link";


export default function Social() {
    return (
        <>
            <Link href="https://github.com/mostafa-khodaparast">
                <Image
                    width={31}
                    height={31}
                    src="/images/github.svg"
                    alt="github"
                />
            </Link>
            <Link href="https://www.linkedin.com/in/mkhdeveloper76/">
                <Image
                    width={32}
                    height={32}
                    src="/images/linkedin.svg"
                    alt="github"
                />
            </Link>
        </>
    )
}

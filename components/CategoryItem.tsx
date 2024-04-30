import { CategoryProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";


export default function CategoryItem({ category }: { category: CategoryProps }) {
    const { title, image, path, color } = category
    return (
        <Link
            href={path}
            className={`px-10 text-xl h-20 rounded-md flex items-center justify-center space-x-2`}
            style={{backgroundColor: color}}
        >
            <Image
                src={image}
                width={32}
                height={32}
                alt={title}
            />
            <span>{title}</span>
        </Link>
    )
}

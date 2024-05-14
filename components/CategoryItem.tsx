import { CategoryProps } from "@/types/types"
import Image from "next/image"
import Link from "next/link"


export default function CategoryItem({ category } : {category: CategoryProps}) {
    
    const { id, slug, title, img } = category
   
    return (
        <Link
            href={id}
            className={`px-10 text-xl h-20 rounded-md flex items-center justify-center space-x-2 text-yellow-50 bg-custom-primary`}
            style={{ backgroundColor: slug }}
        >
            {img && <Image
                src={img}
                width={32}
                height={32}
                alt={title}
            />}
            <span>{title}</span>
        </Link>
    )
}

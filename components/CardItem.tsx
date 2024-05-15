import { PostProps } from "@/types/types"
import Image from "next/image"


export default function CardItem({ card }: { card: PostProps }) {

    const { createdAt, catSlug, desc, img, title } = card

    return (
        <div className="mt-6 flex flex-col md:flex-row">
            {img && <Image
                src={img}
                width={450}
                height={300}
                alt="postImage"
                className="self-center object-cover rounded-md aspect-video md:w-[300px] md:h-[200px]"
            />}
            <div className="flex flex-col space-y-3 justify-around items-start pl-4 my-2 md:my-0">
                    <p className="text-xl">{title}</p>
                <div className="flex items-center space-x-2 font-bold text-sm">
                    <p className="px-2 text-sm py-1 bg-custom-primary dark:bg-slate-100 text-white dark:text-custom-primary rounded-3xl ">{new Intl.DateTimeFormat('en-US').format(createdAt)}</p>
                    <p className="px-2 py-1 text-sm bg-custom-primary dark:bg-slate-100 text-white dark:text-custom-primary rounded-3xl ">{catSlug}</p>
                </div>
                <p className="text-sm font-semibold">
                    {desc}
                </p>
                <button>
                    read more
                </button>
            </div>
        </div>
    )
}

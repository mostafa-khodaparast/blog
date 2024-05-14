import Image from "next/image"


export default function CardItem({ card }) {

    const { date,category, description, image } = card

    return (
        <div className="mt-6 flex flex-col md:flex-row">
            <Image
                src={image}
                width={450}
                height={300}
                alt="postImage"
                className="self-center object-cover rounded-md aspect-video md:w-[300px] md:h-[200px]"
            />
            <div className="flex flex-col space-y-3 justify-around items-start pl-4">
                <div className="flex items-center space-x-2 font-bold text-sm">
                <p>{date}</p>
                <p>{category}</p>
                </div>
                <p className="text-sm font-semibold">
                    {description}
                </p>
                <button>
                    read more
                </button>
            </div>
        </div>
    )
}

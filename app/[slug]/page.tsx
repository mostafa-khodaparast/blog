import { Menu } from "@/components";
import Comments from "@/components/Comments";
import Image from "next/image";
import Link from "next/link";


export default function SinglePostPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-evenly md:items-center">
                <div className="flex flex-col mx-2">
                    <p className="text-xl font-bold">
                        lorem ipsum sit amet consectoeroe dispi eref.
                    </p>
                    <div className="flex items-center my-3 max-w-max">
                        <Image
                            src="/images/culture.png"
                            width={50}
                            height={50}
                            alt="editor"
                            className="rounded-e-xl mr-2 object-fill"
                        />
                        <div className="flex flex-col">
                            <Link href="#" className="pr-3">
                                mostafa
                            </Link>
                            <span className="dark:text-gray-400">
                                2024-12-14
                            </span>
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/culture.png"
                    width={450}
                    height={300}
                    alt="main picture"
                    className="self-center object-cover rounded-md aspect-video"
                />
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="basis-7/12 p-3 my-4">
                    <p className="text-wrap p-2 font-semibold text-sm">
                        Highly motivated frontend developer. A quick learner who embraces
                        new technologies. Collaborative team player with the ability to work
                        closely with designers and other developers.
                    </p>
                    <p className="text-wrap p-2 font-semibold text-sm">
                        Highly motivated frontend developer. A quick learner who embraces
                        new technologies. Collaborative team player with the ability to work
                        closely with designers and other developers.
                    </p>
                    <div>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

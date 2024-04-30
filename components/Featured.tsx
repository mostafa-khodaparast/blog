import Image from "next/image";


export default function Featured() {
  return (
    <div className="m-8">
      <h1 className="text-4xl font-bold text-center">
        Hi, I&apos;m Mostafa! Discover Tech & programming with me
      </h1>
      <div className="mt-6 flex flex-col md:flex-row md:justify-center">
      <Image
        src="/images/culture.png"
        width={450}
        height={300}
        alt="postImage"
        className="self-center object-cover rounded-md aspect-video"
      />
      <div className="flex flex-col space-y-3 justify-around items-start md:pl-8">
        <p className="font-bold text-2xl">post title</p>
        <p className="text-sm font-semibold">
          post descriptggt descriptggggggggggggggggggiot
          post descriptggt descriptggggggggggggggggggiopost descriptggt descriptggggggggggggggggggio
          post descriptggt descriptggggggggggggggggggio
        </p>
        <button
          className="font-semibold px-4 py-3 bg-custom-primary text-white dark:bg-slate-300 rounded-md dark:text-custom-primary"
        >
          read more
          </button>
      </div>
    </div>
    </div>
  )
}

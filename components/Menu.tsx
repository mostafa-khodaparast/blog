import { categories } from "@/constants";
import Image from "next/image";
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="md:basis-2/5 px-4">
      <div>
        <h2>
          Most Popular
        </h2>
        <div className="flex flex-col my-3 max-w-max mx-2">
          <h4>
            category
          </h4>
          <Link href="#">
            title tteetoeefefe
          </Link>
          <div className="flex space-x-1">
            <span className="pr-3">
              mostafa
            </span>
            <span className="dark:text-gray-400">
              2024-12-14
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2>Discover by category</h2>
        <div className="flex flex-wrap">
          {categories.map(item => (
            <Link href={item.path} key={item.path} style={{ backgroundColor: item.color }} className="max-w-max rounded-lg px-3 py-2 m-1">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2>
          Discover by editor
        </h2>
        <div className="flex items-center my-3 max-w-max">
          <Image
            src="/images/culture.png"
            width={50}
            height={50}
            alt="editor"
            className="rounded-e-xl mr-2 object-fill"
          />
          <div>
            <h4>
              category
            </h4>
            <h3>
              title tteetoeefefe
            </h3>
            <Link href="#" className="pr-3">
              mostafa
            </Link>
            <span className="dark:text-gray-400">
              2024-12-14
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

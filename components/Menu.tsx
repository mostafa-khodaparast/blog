import { getCategories } from "@/actions"
import Image from "next/image"
import Link from 'next/link'

export default async function Menu() {

  const categories = await getCategories()

  return (
    <div className="md:basis-2/5 px-4">
      <div>
        <h2>
          Most Popular
        </h2>
        <div className="flex flex-col my-3 max-w-max mx-2">
          <h4>
            coding
          </h4>
          <Link href="#">
            react 19 released!
          </Link>
          <div className="flex space-x-1">
            <span className="pr-3">
              mostafa
            </span>
            <span className="dark:text-gray-400">
              10/05/2024
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2>Discover by category</h2>
        <div className="flex flex-wrap">
          {categories?.map(item => (
            <Link href={item.id} key={item.id}  className="max-w-max rounded-lg px-3 py-2 m-1 text-yellow-50 bg-custom-primary">
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
            src="/images/mostafakh.jpg"
            width={50}
            height={50}
            alt="editor"
            className="rounded-e-xl mr-2 object-fill"
          />
          <div>
            <h4>
              travel
            </h4>
            <h3>
              the best hobby for weekend
            </h3>
            <Link href="#" className="pr-3">
              mohsen
            </Link>
            <span className="dark:text-gray-400">
            10/04/2024
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

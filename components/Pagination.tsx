"use client"

import { useRouter } from "next/navigation"

export default function Pagination({ pageNumber, hasPrev, hasNext }: { pageNumber: number, hasPrev: boolean, hasNext: boolean }) {

  const router = useRouter()

  return (
    <div className="flex justify-evenly md:justify-between  items-center my-3">
      <button
        onClick={() => router.push(`?page=${pageNumber - 1}`)}
        className="px-2 py-1 dark:bg-purple-400 disabled:cursor-not-allowed cursor-pointer"
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`?page=${pageNumber + 1}`)}
        className="px-2 py-1 dark:bg-purple-400 disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
        disabled={!hasNext}
      >
        next
      </button>
    </div>
  )
}

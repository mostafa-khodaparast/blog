

export default function Pagination() {
  return (
    <div className="flex justify-evenly md:justify-between  items-center my-3">
      <button className="px-2 py-1 dark:bg-purple-400">
        Previous
      </button>
      <button className="px-2 py-1 dark:bg-purple-400">
        next
      </button>
    </div>
  )
}

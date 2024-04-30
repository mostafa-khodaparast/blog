import { categories } from "@/constants";
import { CategoryItem } from ".";


export default function CategoryList() {
  return (
    <div className="w-full px-4 overflow-x-scroll my-4">
      <h2>Popular Categories</h2>
      <div className="flex items-center space-x-2 my-4 justify-evenly">
        {categories.map(category => <CategoryItem key={category.path} category={category} />)}
      </div>
    </div>
  )
}

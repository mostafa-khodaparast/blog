import { CardList, CategoryList, Featured, Menu } from "@/components"



export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex justify-between">
        <CardList />
        <Menu />
      </div>
    </>
  )
}

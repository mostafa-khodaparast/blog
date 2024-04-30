import { CardList, CategoryList, Featured, Menu } from "@/components"



export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row justify-between">
        <CardList />
        <Menu />
      </div>
    </>
  )
}

import { CardList, CategoryList, Featured, Menu } from "@/components"
import { SearchParamsProps } from "@/types/types"
import { NextPage } from 'next';

interface HomeProps {
  searchParams: {
    page?: string;
  }
}

const Home: NextPage<HomeProps> = ({ searchParams }) => {

  const pageNumber = parseInt(searchParams.page || '1')

  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row md:justify-between">
        <CardList pageNumber={pageNumber} />
        <Menu />
      </div>
    </>
  )
}

export default Home
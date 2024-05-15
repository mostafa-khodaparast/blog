//import { cardList } from "@/constants"
import { POST_PER_PAGE } from "@/constants"
import { CardItem, Pagination } from "."
import { getPosts } from "@/actions"
import { PostProps } from "@/types/types"


export default async function CardList({ pageNumber }: { pageNumber: number }) {


  const {posts, count} = await getPosts(pageNumber)
  

  const hasPrev = POST_PER_PAGE * (pageNumber -1) > 0
  const hasNext = POST_PER_PAGE * (pageNumber - 1) + POST_PER_PAGE < count

  return (
    <div className="md:basis-3/5">
      <h2>Recent Posts</h2>
      {posts?.map(card => <CardItem key={card.id} card={card} />)}
      <Pagination
        pageNumber={pageNumber}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </div>
  )
}


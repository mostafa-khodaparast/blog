import { cardList } from "@/constants"
import { CardItem, Pagination } from "."
import { getPosts } from "@/actions"


export default async function CardList() {

  const posts = await getPosts()

  return (
    <div className="md:basis-3/5">
      <h2>Recent Posts</h2>
      {cardList.map(card => <CardItem key={card.id} card={card} />)}
      <Pagination />
    </div>
  )
}


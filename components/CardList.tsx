import { cardList } from "@/constants"
import { CardItem, Pagination } from "."


export default function CardList() {
  return (
    <div className="md:basis-3/5">
      <h2>Recent Posts</h2>
      {cardList.map(card => <CardItem key={card.id} card={card} />)}
      <Pagination />
    </div>
  )
}


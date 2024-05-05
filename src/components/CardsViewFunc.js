import ShopCard from './ShopCardFunc'

export default function CardsView(props) {
  const { cards } = props

  return (
    <div className="cards">
      {cards.map((card, index) => <ShopCard card={card} key={index} />)}
    </div>
  )
}
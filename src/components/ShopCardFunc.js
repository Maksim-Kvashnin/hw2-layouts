export default function ShopCard(props) {
  const { card } = props;
  
  return (
    <div className="card" style={{ background: 'url(' + card.img + ')', backgroundSize: "300px" }}>
      <div className="card-header">
        <p className="card-name">{card.name}</p>
        <p className="card-color">{card.color}</p>
      </div>
      <div className="card-footer">
        <p className="card-price">{'$' + card.price}</p>
        <button className="card-button">Add to cart</button>
      </div>
    </div>
  )
}
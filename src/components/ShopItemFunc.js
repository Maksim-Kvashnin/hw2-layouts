export default function ShopItem(props) {
  const { item } = props;

  return (
    <div className="item">
      <div className="item-image" style={{ background: 'url(' + item.img + ')', backgroundSize: '100%', backgroundPosition: '50% 80%' }} />
      <p className="item-name">{item.name}</p>
      <p className="item-color">{item.color}</p>
      <p className="item-price">{'$' + item.price}</p>
      <button className="item-button">Add to cart</button>
    </div>
  )
}
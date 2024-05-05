import { useState } from 'react';
import { products } from '../data/products';
import IconSwitch from './IconSwitchFunc'
import CardsView from './CardsViewFunc'
import ListView from './ListViewFunc'

export default function Store() {
  const [icon, setIcon] = useState("view_list");

  return (
    <div className='store'>
      <IconSwitch icon={icon} onSwitch={(icon) => setIcon(icon)} />
      {icon === "view_list" ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  )
}
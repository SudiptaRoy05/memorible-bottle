/* eslint-disable react/jsx-key */
import './cart.css'
export default function Cart({cart}) {
  return (
    <div>
        <h3>Cart : {cart.length}</h3>
        <div className="cartContainer">
            {
                cart.map(bottle => <img src={bottle.img}></img>)
            }
        </div>
    </div>
  )
}

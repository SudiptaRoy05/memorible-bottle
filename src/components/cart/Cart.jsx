
import './cart.css'
export default function Cart({cart, removeFromLocalStorage}) {
  return (
    <div>
        <h3>Cart : {cart.length}</h3>
        <div className="cartContainer">
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img>
                    <button onClick={()=>removeFromLocalStorage(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    </div>
  )
}

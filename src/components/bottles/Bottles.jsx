import { useEffect, useState } from "react"
import Bottle from "../bottle/Bottle";
import './bottles.css'

export default function Bottles() {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('../../../public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
        
    }, []);

    const handleAddToCard =(bottle)=>{
        const newCart = [...cart, bottle]
        setCart(newCart);
    }
  return (
    <div>
        <div>
            <p>Cart : {cart.length}</p>
        </div>
        <h3>Bottle Here : {bottles.length}</h3>
       <div className="bottles">
        {
            bottles.map(bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleAddToCard={handleAddToCard}
                ></Bottle>)
        }
       </div>
    </div>
  )
}

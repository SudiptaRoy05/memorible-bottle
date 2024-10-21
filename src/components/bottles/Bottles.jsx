import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addToLS, getStoredCart } from "../../utility/localStorage";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../../../public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
    }
  }, [bottles]);

  const handleAddToCard = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };
  return (
    <div>
      <div>
        <p>Cart : {cart.length}</p>
      </div>
      <h3>Bottle Here : {bottles.length}</h3>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCard={handleAddToCard}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}

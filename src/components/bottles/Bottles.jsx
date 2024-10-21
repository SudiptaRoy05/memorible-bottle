import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addToLS, getStoredCart,removeFromLocalStorage } from "../../utility/localStorage";
import Cart from "../cart/Cart";

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
      //   console.log(storedCart);
      const savedCard = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCard.push(bottle);
        }
      }
      setCart(savedCard);
    }
  }, [bottles]);

  const handleAddToCard = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    removeFromLocalStorage(id)
  };

  return (
    <div>
      <div>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
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

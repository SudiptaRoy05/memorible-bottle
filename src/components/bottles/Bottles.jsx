import { useEffect, useState } from "react"
import Bottle from "../bottle/Bottle";
import './bottles.css'

export default function Bottles() {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('../../../public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
        
    }, []);
  return (
    <div>
        <h3>Bottle Here : {bottles.length}</h3>
       <div className="bottles">
        {
            bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
        }
       </div>
    </div>
  )
}

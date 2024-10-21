import './bottle.css'

export default function Bottle({bottle, handleAddToCard}) {
    
    const {name, img, price, ratings}= bottle;
  return (
    <div className='bottle'>
        <h4>{name}</h4>
        <img className="width" src={img} alt="" />
        <p>Price : {price}</p>
        <p><small>{ratings}</small></p>
        <button onClick={()=>handleAddToCard(bottle)}>Purchase</button>
    </div>
  )
}

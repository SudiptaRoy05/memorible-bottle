import './bottle.css'
// eslint-disable-next-line react/prop-types
export default function Bottle({bottle}) {
    // eslint-disable-next-line react/prop-types
    const {name, img, price, ratings}= bottle;
  return (
    <div className='bottle'>
        <h4>{name}</h4>
        <img className="width" src={img} alt="" />
        <p>Price : {price}</p>
        <p><small>{ratings}</small></p>
    </div>
  )
}

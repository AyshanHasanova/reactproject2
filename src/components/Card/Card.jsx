import React, { useContext } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import MainContext from '../../context/context'

const Card = ({item}) => {
  const {addTOBasket}= useContext(MainContext)
  return (
    <div className='cards'>
      <img style={{width:"250px",height:"250px"}} src={item.image} alt="" />
     <h3>{item.title}</h3>
     <p>{item.price}</p>
     <Link to={`details/${item.id}`}>Detail page</Link>
     <button onClick={()=>{
      addTOBasket(item  )
     }}>add to basket</button>
    </div>
  )
}

export default Card

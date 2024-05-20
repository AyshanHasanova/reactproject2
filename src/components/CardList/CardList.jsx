import { useContext } from "react"
import Card from "../Card/Card"
import './CardList.css'
import MainContext from "../../context/context"


const CardList = () => {
    const {data,setData}=useContext(MainContext)
  return (
    <section className="cardItem">
     
       <h2>Featured Products</h2>
       <div className="cardItems">
          
          {
            data.map((item,index)=>{
               return(<Card key={index} item ={item}/>)
            })
          }

       </div>
    </section>
  )
}

export default CardList
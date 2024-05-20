import {useEffect, useState } from 'react'
import './App.css'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import axios from 'axios'
function App() {
  const [data,setData]=useState([])
  const router=createBrowserRouter(ROUTES)
  const [basketItems,setBasketItems]= useState ([])
  const addTOBasket= (item)=>{
    const target= basketItems.find(x=> x.item.id == item.id)
    if(target){
       target .count +=1,
       target.totalPrice += item.price
       setBasketItems([...basketItems])
       console.log(basketItems)

    }else{
      const newBasketItem={
        item: item ,
        count:1,
        totalPrice : item.price


      }
      setBasketItems([...basketItems,newBasketItem])
      console.log(  basketItems,newBasketItem)
    }
  
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      console.log(res.data)
      setData([...res.data])
    })
  },[])
  const contextData={
    data,setData,basketItems,setBasketItems,addTOBasket
  }
  return (
    <>
     <MainContext.Provider value={contextData}>
        <RouterProvider router={router}/>
     </MainContext.Provider>
    </>
  )
}

export default App

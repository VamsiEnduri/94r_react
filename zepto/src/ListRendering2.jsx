import React from 'react'
import "./ListRendering2.css"
import { data } from './data'
const ListRendering2 = () => {
  return (
    <>
    <h2>ListRendering2 comp</h2>
    <div id='card_container'>
      
      {data.map((elem,index)=>{
        return <div id='card'>
            <img src={elem.image} width={250}/>
            <p>{elem.title}</p>
            <span>{elem.price}</span>
            <button>AddTocart</button>
            <button>buyNow</button>
        </div>
      })}
    </div>
    </>
  )
}

export default ListRendering2

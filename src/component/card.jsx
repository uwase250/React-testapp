import React from 'react'
import iphone from "../asset/iphone.jpeg"
import Button from './button'

const Card = ({name, image,description, price,link}) => {

  return (
    <div className='card'>
      <img src={image} alt="" className='product-image'/>
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{price}</span>
      <Button name="Add to Cart"/> 
    </div>
  )
}

export default Card
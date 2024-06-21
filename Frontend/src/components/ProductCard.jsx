import React from 'react'
import { FaPlus } from 'react-icons/fa'

const server = 'productOne'

const ProductCard = ({ productId, price, name, photo, stock, handler }) => {
  return (
    <div className='productCart'>
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartItems = ({ cartItem }) => {
    // const { photo, productId, name, price, quantity, stock } = cartItem

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='cartItem'>
            <img src={data.image} alt={name} />
            <article>
                {/* <Link to={`/product/${productId}`}>{name}</Link> */}
                <span>₹{data.price}</span>
            </article>
            <div>
                <button>-</button>
                {/* <p>{data.rating.count}</p> */}
                <button>+</button>
            </div>
            <button><FaTrash /></button>
        </div>
    )
}

export default CartItems
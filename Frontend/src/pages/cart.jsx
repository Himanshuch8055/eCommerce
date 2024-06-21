import React, { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc'
import CartItems from '../components/CartItems';
import { Link } from 'react-router-dom';

const cartItems = [
  {
    productId: 'asdfasd',
    photo: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg',
    name: 'mac',
    price: 234,
    quantity: 4,
    stock: 12,
  }
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;

const cart = () => {
  const [couponCode, setCouponCode] = useState('')
  const [isValidCouponCode, setIsValidCouponCode] = useState(false)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true)
      else setIsValidCouponCode(false)
    }, 1000);

    return () => {
      clearInterval(timeOutId)
      setIsValidCouponCode(false)
    }
  }, [couponCode])

  return (
    <div className='cart'>
      <main>
        {
          cartItems.length > 0 ? (cartItems.map((i, index) => (
            <CartItems key={index} cartItem={i} />
          ))) : (<h1>No Items Added</h1>)
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className='red'>-₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type='text'
          placeholder='Enter Coupon Code'
          value={couponCode}
          onChange={(e) => { setCouponCode(e.target.value), console.log(e.target.value) }}
        />
        {
          couponCode && (
            isValidCouponCode ? (
              <span className='green'>₹{discount} off using the <code>{couponCode}</code></span>
            ) : (
              <span className='red'>Invalid Coupon Code <VscError /></span>
            )
          )
        }
        {
          cartItems.length > 0 && (<Link to={'/shipping'}>Checkout</Link>)
        }
      </aside>
    </div>
  )
}

export default cart
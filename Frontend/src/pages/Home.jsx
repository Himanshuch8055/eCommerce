import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='home'>
      <section></section>
      <h1>
        Latest Products
        <Link to={'/search'} className='findmore'>
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId='asdfasd'
          name='mac'
          price={234}
          stock={12}
          handler={()=>{console.log('sdf')}}
          photo='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg'
        />
      </main>
    </div>
  )
}

export default Home
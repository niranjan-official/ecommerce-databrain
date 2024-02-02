import React, { useEffect } from 'react'

const ProductCard = ({name,description,price}) => {

  return (
    <div className='w-full h-max flex p-4 bg-white'>
      <div className='w-24 h-auto bg-gray-300'></div>
      <div className='w-full flex h-max flex-col pl-2'>
        <div className='flex flex-col'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <p className='text-gray-500 text-sm'>{description}</p>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <span className='text-2xl font-semibold'>${price}</span>
            <button className=' p-2 rounded-3xl font-semibold bg-orange-500 text-white shadow-md'>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

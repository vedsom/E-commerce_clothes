import React from 'react'
import './Breadcrum.css'
import breadcrum_icon from '../breadcrum_icon.png'
export const Breadcrum = (props) => {
  const {product} =props;
    return (
    <div className='breadcrum'>
        HOME <img src={breadcrum_icon} className='breadcrum_icon' alt=''/> SHOP <img src={breadcrum_icon} className='breadcrum_icon' alt='' /> {product.category} <img src={breadcrum_icon} className='breadcrum_icon' alt='' /> {product.name}
    </div>
  )
}

import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an onine platform that facilitate
                buying and selling of products or services over the internet serves as a virtual arketplace where business and individual
                showcase their products, interact with customers and conduct transctions without the need of physical presence. E-commerce
                website have gained immense popularity due to their convenient
                accessibility and global reach they offer
            </p>
        </div>
    </div>
  )
}

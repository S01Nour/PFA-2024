import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h2>Supports</h2>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Repair Workshop</li>
              <li>Insurance</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Links</h2>
            <ul>
              <li>Self-claim</li>
              <li>Claims processing</li>
              <li>Contract management</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Categories</h2>
            <ul>
              <li>Computer </li>
              <li>Smart phones </li>
              <li>Home appliance </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Payments</h2>
            <img src="./images/pay-removebg-preview.png"></img>
          </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
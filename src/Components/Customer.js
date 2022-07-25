import React from 'react'
import Header from './Header'
import Nav from './Nav'
import "./Customer.css"

const Customer = () => {
  return (
    <>
    <Header />
    <Nav />
    <div className='customer'>
      <h2>Digital Services and Device Support</h2>
      <p>We provide flexible and 24/7 customer service that fits around You.</p>
      <div className='service'>
        <div className='singleService'>
          <h4>01</h4>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='singleService'>
          <h4>02</h4>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='singleService'>
          <h4>03</h4>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Customer
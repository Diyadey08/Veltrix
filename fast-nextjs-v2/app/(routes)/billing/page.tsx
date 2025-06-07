import React from 'react'
import {PricingTable} from '@clerk/nextjs'
function Billing() {
  return (
    <div>
        <h2 className='font-bold text-3xl'>
            Choose your plan
        </h2>
        <p className='text-lg'>Select subscription model to get all AI Tools</p>
    <PricingTable/>
    </div>
  )
}

export default Billing
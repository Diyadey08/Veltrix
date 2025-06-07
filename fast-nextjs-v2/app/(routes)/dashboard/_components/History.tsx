"use client"
import React,{useState} from 'react'
import Image from 'next/image';
function History() {
    const [userHistory,setUserHistory]=useState([]);
  return (
    <div className='mt-5'>
        <h2>Previous History</h2>
        <p>What Your previously work on,You can find them here</p>
    {userHistory?.length == 0 && 
    <div>
        <Image src={'/bulb.png'} alt='bulb'width={50} height={50}/>
        <h2>
            You dont have History
        </h2>
        <Button className='mt-2'>Explore AI tools</Button>
    </div>
    }
    </div>
  )
}

export default History
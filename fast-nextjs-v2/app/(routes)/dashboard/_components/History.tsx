"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button'

function History() {
    const [userHistory,setUserHistory]=useState([]);
  return (
     <div className="flex justify-center items-center min-h-[300px]">
      <div className="border rounded-2xl shadow-md p-8 text-center max-w-md w-full bg-white">
        <div className="flex justify-center mb-4">
          <Image src="/bulb.png" alt="bulb" width={50} height={50} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          You don’t have History
        </h2>
        <Button className="mt-2">Explore AI Tools</Button>
      </div>
    </div>
  )
}

export default History
"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({totalcurrentbalance} : {totalcurrentbalance:number}) => {
  return (
    <div>
        <p className='mb-2'>Total Current Balance</p>
        <CountUp 
        end={totalcurrentbalance}
        prefix='₹'
        separator=',' className='text-3xl'/>

    </div>
  )
}

export default AnimatedCounter
import React from 'react'
import { PiContactlessPaymentLight } from "react-icons/pi";
import { SiVisa } from "react-icons/si";

const Bankcard = ({user,userdata}:{user:user,userdata:userData}) => {
  return (
    <div className='w-full'>
        <div className='absolute w-[360px] h-[200px] mt-10 ml-10 rounded-xl bg-blue-400 flex flex-row'>
            <div className='h-[200px] w-2/3 flex flex-col ml-6 mt-4 pb-7 pr-4 justify-between'>
                <p className='font-bold text-lg text-white'>{user.accounts[0]}</p>
                <div className='text-white font-bold'>
                    <div className='flex flex-row justify-between pb-1'>
                        <p>{userdata.name}</p>
                        <p>06/26</p>
                    </div>
                    <p className='text-xl'>1234  1234  1234  1234</p>
                </div>
            </div>
            <div className='h-[200px] w-1/3 rounded-r-xl flex flex-col justify-between text-white'>
                <PiContactlessPaymentLight className='ml-16 mt-3 size-9'/>
                <SiVisa className='ml-14 size-9 mb-2'/>

            </div>
        </div>
        <div className='absolute w-[360px] h-[200px] rounded-xl bg-slate-800 flex flex-row'>
            <div className='h-[200px] w-2/3 flex flex-col ml-6 mt-4 pb-7 pr-4 justify-between'>
                <p className='font-bold text-lg text-white'>{user.accounts[0]}</p>
                <div className='text-white font-bold'>
                    <div className='flex flex-row justify-between pb-1'>
                        <p>{userdata.name}</p>
                        <p>06/26</p>
                    </div>
                    <p className='text-xl'>1234  1234  1234  1234</p>
                </div>
            </div>
            <div className='h-[200px] w-1/3 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-300 rounded-r-xl flex flex-col justify-between text-white'>
                <PiContactlessPaymentLight className='ml-16 mt-3 size-9'/>
                <SiVisa className='ml-14 size-9 mb-2'/>

            </div>
        </div>
    </div>
  )
}

export default Bankcard
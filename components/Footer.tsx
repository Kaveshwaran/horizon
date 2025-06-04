
import { logOutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';
import React from 'react'
import { RxExit } from "react-icons/rx";

const Footer = ({userdata}:{userdata:userData}) => {
  console.log(userdata);
  const router = useRouter();
  const handleLogOut = async()=>{
  const logout = await logOutAccount();
  if(logout) router.push('/sign-in');
  }
  return (
    <div className='h-20 border-t pt-5 flex flex-row mb-5'>
      <div className='w-fit flex items-center'>
        <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center text-xl font-bold'>
          {userdata.name[0]}
        </div>
      </div>
      <div className='w-full ml-4 pt-2'>
        <div>
          {userdata.name}
        </div>
        <div>
          {userdata.email}
        </div>
      </div>
      <div className='w-fit flex items-center mr-2 ml-2'>
        <RxExit className='size-6' onClick={handleLogOut}/>
      </div>
    </div>
  )
}

export default Footer
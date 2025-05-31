import React from "react";
import Link from "next/link";
import Bankcard from "./Bankcard";
import { BsThreeDotsVertical } from "react-icons/bs";

const Rightbar = (user:user) => {
  return (
    <div className="flex flex-grow flex-col">
      <div className="bg h-[120px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-800 via-emerald-600 to-zinc-900">
        <div className="relative top-[80px] left-10 bg-slate-50 size-24 rounded-full flex items-center justify-center">
            <span className="text-5xl font-bold text-green-600">{user.name[0]}</span>
        </div>
      </div>
      <div className="mt-20 ml-10">
        <p className="text-3xl font-bold">{user.name}</p>
        <p className="text-neutral-600">{user.mail}</p>
        <div className="mt-10 mr-8">
            <div className="flex flex-row justify-between mb-10">
                <p className="text-xl">My Banks</p>
                <Link href="/mybanks" className="pr-5 text-neutral-600 pt-1">+ Add bank</Link>
            </div>
            {user.totalbanks>0 &&(
                Bankcard(user)
            )}
        </div>
      </div>
      <div className="pt-[270px] flex flex-col w-full pr-8 pl-10">
            <div className="flex flex-row justify-between">
                <p className="text-xl ">My Budgets</p>
                <BsThreeDotsVertical/>
            </div>
        </div>
    </div>
  );
};

export default Rightbar;

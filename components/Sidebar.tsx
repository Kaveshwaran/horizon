"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiHome } from "react-icons/hi";
import { MdCurrencyRupee } from "react-icons/md";
import { TbReceiptRupee } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiBankCardLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "My Banks", path: "/mybanks", icon: <MdCurrencyRupee /> },
  { name: "Transaction History", path: "/history", icon: <TbReceiptRupee /> },
  {
    name: "Payment Transfer",
    path: "/transfer",
    icon: <FaMoneyBillTransfer />,
  },
  { name: "Connect Bank", path: "/connect", icon: <RiBankCardLine /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[270px] bg-slate-500 flex flex-col p-4 min-h-screen justify-between">
      <div>
        <div className="font-black text-3xl pt-4 pb-4">Horizon</div>
        <div>
          <div className="absolute pt-2 pl-2">
            <CiSearch className="size-6" />
          </div>
          <input
            type="text"
            className="border-2 border-black rounded-md h-10 pl-8 w-[220px]"
            placeholder="Search"
          />
        </div>
        <div className="mt-5">
        {navItems.map((nav) => (
          <Link
            key={nav.path}
            href={nav.path}
            className={`flex items-center gap-2 p-3 w-52 rounded-md transition-colors duration-200 ${
              pathname === nav.path ? "bg-slate-700 text-white" : "text-black"
            }`}
          >
            {nav.icon}
            {nav.name}
          </Link>
        ))}
        </div>
      </div>
      <div className="pb-2">Footer</div>
    </div>
  );
};

export default Sidebar;

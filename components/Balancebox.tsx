import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DougnutChart from "./DougnutChart";
import Link from "next/link";

const Balancebox = ({
  totalbanks,
  totalbalance,
  accounts,
  balance,
}: balanceboxprops) => {
  return (
    <div className="w-full bg-slate-300 rounded-md flex flex-row p-5">
      <div className="size-52">
        <DougnutChart balance={balance} accounts={accounts} />
      </div>
      <div className="ml-7 w-[500px]">
        <div className="text-2xl mt-5">Bank Accounts : {totalbanks}</div>
        <div className="mt-12">
          <AnimatedCounter totalcurrentbalance={totalbalance} />
        </div>
      </div>
      <div className="flex flex-col ml-auto pr-10">
        <Link className="hover:text-blue-400" href={'/connect'}>+ Add Bank</Link>
      </div>
    </div>
  );
};

export default Balancebox;

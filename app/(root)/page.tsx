import Balancebox from "@/components/Balancebox";
import Rightbar from "@/components/Rightbar";

export default function page(user: user) {
  user={
    name:"Kaveshwaran D",
    nickname:"Kavesh",
    id : "asdvdfg34",
    mail : "dkaveshwaran@gmail.com",
    accounts : ["Axis Bank","SBI","KVB"],
    balance : [1200,5600,3200],
    totalbalance : 10000,
    totalbanks: 3,
  }
  return (
    <div className="flex flex-grow flex-row min-h-screen w-fit">
      <div className="bg-neutral-200 w-[1100px] p-10">
        <div className="flex flex-row">
          <h1 className="text-black font-bold text-4xl ">Hello, </h1>
          <h1 className="text-cyan-600 font-bold text-4xl pl-3 ">{user.nickname}</h1>
        </div>
        <h1 className="text-xl text-neutral-600 pt-2">
          Access and manage your account and transaction efficiently.
        </h1>
        <Balancebox totalbanks={user.totalbanks} totalbalance={user.totalbalance} accounts={user.accounts} balance={user.balance}/>
        <div>
          Recent Transations
        </div>
      </div>
      {Rightbar(user)}
    </div>
  );
}

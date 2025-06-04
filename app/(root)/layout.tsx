import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const RootLayout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) =>{
  const userdata = await getLoggedInUser();
  if(userdata == null) redirect('sign-in')
  return (
    <main className="flex flex-row">
        <Sidebar userdata={userdata}/>
        {children}
    </main>
  );
}
export default RootLayout;
import { useSession } from "next-auth/react";
export default function UserDashboard() 
{
    const { data: session } = useSession();
    
  return (
    <>
    <h1 className="text-green-600 text-center">You are Logged IN as : </h1>
    <h2 className="text-blue-600 text-center">{session?.user?.name}</h2> 
    </>
  );  
}
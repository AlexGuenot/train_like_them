import { useSession } from "next-auth/react";
export default function UserDashboard() 
{
    const { data: session } = useSession();
    const firstName = session?.user?.name?.split(" ")[0];
  return (
    <>
    <section className="text-center" style={{ fontFamily: 'Bebas Neue'}}>
      <h1 className="text-6xl">Welcome Back<span className="text-orange-600 block">{firstName}</span>
      </h1>
    </section>
    <section>
      
    </section>
    </>
  );  
}
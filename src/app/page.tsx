"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const showSession = () => {
    if (status === "unauthenticated") {
      return(
        <h1 className="text-red-600 text-center">You are Logged OUT</h1>
      )
    } else if (status === "authenticated") {
      return(
        <>
        <h1 className="text-green-600 text-center">You are Logged IN as : </h1>
        <h2 className="text-blue-600 text-center">{session?.user?.name}</h2>     
        </>
    )}
  }
  return (
    <>
    {showSession()}
    </>
  );
  }
  

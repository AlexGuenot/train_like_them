"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "./components/header";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "unauthenticated") {
      return(
        <h1 className="text-red-600 text-center">You are Logged OUT</h1>
      )
    } else if (status === "authenticated") {
      return(
        <h1 className="text-green-600 text-center">You are Logged IN</h1>
      )    
    }
  }
  return (
    <>
    <Header/>
    {showSession()}
    </>
  );
  }
  

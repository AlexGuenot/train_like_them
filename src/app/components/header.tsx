'use client'
import { signOut,useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";

export default function Header(){
    const { status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const showSession = () => {
      if (status === "unauthenticated") {
        if (pathname === '/login' || pathname === '/register') {
          return (
            null         
          );
        }
        return(
          <>
            <Link href="/login" className="btn btn-sm text-white bg-blue-600 hover:bg-blue-700">
              SIGN IN
            </Link>
          </>
        )
      } else if (status === "authenticated") {
        return(
          <>
            <Link href="/" className="btn btn-sm  text-white bg-red-600 hover:bg-red-700"
                  onClick={() => { signOut({ redirect: false }).then(() => {
                      router.push("/");
                    });
                  }}>
              SIGN OUT
            </Link>
          </>
        )
    }
  }
  return(
    <div className="navbar flex justify-between px-8 sticky top-0 z-50 bg-base-100">
      <Link href="/" className="text-3xl" style={{ fontFamily: 'Bebas Neue'}}>TRAIN LIKE THEM</Link>
      {showSession()}
    </div>
  )
}
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
            <Link href="/" className="text-xl">Train like them</Link>
        );
        }
        return(
          <>
            <Link href="/" className="text-xl">Train like them</Link>
            <Link href="/login" className="btn btn-outline btn-sm">
              Sign In
            </Link>
          </>
        )
      } else if (status === "authenticated") {
        return(
          <>
            <Link href="/" className="text-xl">Train like them</Link>
            <Link href="/" className="btn btn-outline btn-sm bg-red-600"
                  onClick={() => { signOut({ redirect: false }).then(() => {
                      router.push("/");
                    });
                  }}>
              Sign Out
            </Link>
          </>
        )

    }
  }
  return(
    <div className="navbar flex justify-between px-8 py-4">
      {showSession()}
    </div>
  )
}
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header(){
    const { status } = useSession();
    const router = useRouter();
    const showSession = () => {
      if (status === "unauthenticated") {
        return(
          <>
            <h1 className="text-xl">Train like them</h1>
            <Link href="/login" className="btn btn-outline btn-sm">
              Sign In
            </Link>
          </>
        )
      } else if (status === "authenticated") {
        return(
          <>
            <h1 className="text-xl">Train like them</h1>
            <Link href="/" className="btn btn-outline btn-sm bg-red-600">
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
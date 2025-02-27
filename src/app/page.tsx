"use client";
import { useSession } from "next-auth/react";
import UserDashboard from "./logged_in_pages/dashboard/page";
import LandingDashboard from "./logged_out/dashboard/page";
import { useState, useEffect } from "react"; // Import useState and useEffect

export default function Home() {
  const { status } = useSession();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (status) {
      setLoading(false); // Set loading to false once status is available
    }
  }, [status]);

  const showSession = () => {
    if (loading) {
      return <div>Loading...</div>; // Render loading indicator
    } else if (status === "unauthenticated") {
      return <LandingDashboard />;
    } else if (status === "authenticated") {
      return <UserDashboard />;
    } else {
        return <div>Loading...</div>; // handle initial undefined status.
    }
  };

  return <>{showSession()}</>;
}
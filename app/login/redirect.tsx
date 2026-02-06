"use client";

import { useEffect } from "react"";
import { useRouter } from "next/navigation";

const LoginRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    const isAuthenticated = false; // Replace with actual authentication logic
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return null;
};

export default LoginRedirect;

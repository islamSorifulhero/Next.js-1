"use client";

import { useContext } from "react";
import { AuthContext } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) return <h2>Loading...</h2>;

  if (!user) {
    router.push("/login");
    return null;
  }

  return children;
}

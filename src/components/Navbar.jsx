"use client";

import Link from "next/link";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    document.cookie = "token=; path=/";
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-whit bg-base-300">
      <Link href="/" className="font-bold text-xl">
        Care.xyz
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        {user && (
          <Link href="/my-bookings" className="hover:text-blue-600">
            My Bookings
          </Link>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link href="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/auth"; // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথ ঠিক আছে কি না দেখে নিন
import { useEffect, useState } from "react";

export default function Navbar() {
  // জাভাস্ক্রিপ্টে <any> লেখার প্রয়োজন নেই, শুধু useState(null) দিলেই হবে
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase auth স্টেট পরিবর্তন হলে ইউজার সেট করা
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // লগআউট হলে কুকি ডিলিট করে দেওয়া (মিডলওয়্যারের জন্য জরুরি)
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      window.location.reload(); // স্টেট রিফ্রেশ করার জন্য
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link href="/" className="font-bold text-xl text-blue-600">
        Care.xyz
      </Link>

      <div className="space-x-6 flex items-center">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/my-bookings" className="hover:text-blue-500">My Bookings</Link>

        {user ? (
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">{user.email}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link href="/login" className="hover:text-blue-500">Login</Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
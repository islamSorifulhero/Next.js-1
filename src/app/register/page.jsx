"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      alert("Password must be 6+ chars with upper & lower case");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/login");
  };

  return (
    <form className="max-w-md mx-auto mt-10 space-y-4" onSubmit={handleRegister}>
      <h2 className="text-2xl font-bold">Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2">Register</button>
    </form>
  );
}

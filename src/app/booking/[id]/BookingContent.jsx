"use client";

import { useState, useContext } from "react";
// import { services } from "@/data/services";
import { AuthContext } from "@/lib/AuthProvider";
import { services } from "@/components/data/services";

export default function BookingContent({ params }) {

  const { user } = useContext(AuthContext);

  const service = services.find(s => s.id === params.id);

  const [duration, setDuration] = useState(1);

  const total = duration * service.price;

  const handlePayment = async () => {

    localStorage.setItem("pendingBooking", JSON.stringify({
      service: service.name,
      duration,
      total,
      status: "Confirmed"
    }));

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        service: service.name,
        total
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div style={{padding:20}}>
      <h1>Book {service.name}</h1>

      <input
        type="number"
        value={duration}
        onChange={(e)=>setDuration(Number(e.target.value))}
      />

      <p>Total Cost: {total} BDT</p>

      <button onClick={handlePayment}>
        Pay & Confirm Booking
      </button>
    </div>
  );
}

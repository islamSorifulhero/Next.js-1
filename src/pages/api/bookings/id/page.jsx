"use client";

import { useState } from "react";
import { services } from "@/data/services";

export default function BookingPage({ params }) {
  const service = services.find(s => s.id === params.id);

  const [duration, setDuration] = useState(1);
  const total = duration * service.price;

  const handleBooking = () => {
    const booking = {
      service: service.name,
      duration,
      total,
      status: "Pending"
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

    alert("Booking Successful!");
  };

  return (
    <div style={{padding:20}}>
      <h1>Book {service.name}</h1>

      <input 
        type="number"
        value={duration}
        onChange={(e)=>setDuration(e.target.value)}
      />

      <p>Total Cost: {total} BDT</p>

      <button onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

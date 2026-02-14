"use client";

import { useState, useContext } from "react";
import { useParams } from "next/navigation";
import { AuthContext } from "@/lib/AuthProvider";
import { services } from "@/utils/services";

export default function BookingContent() {
  const params = useParams();
  const { user } = useContext(AuthContext);

  const service = services.find(s => s.id === params.id);

  const [duration, setDuration] = useState(1);

  const total = duration * service.price;

  const handleBooking = async () => {
    const booking = {
      service: service.name,
      duration,
      total,
      status: "Pending"
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

    // email invoice send
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        service: service.name,
        duration,
        total
      }),
    });

    alert("Booking Successful & Email Sent!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Book {service.name}</h1>

      <label>Duration (hours)</label>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />

      <p>Total Cost: {total} BDT</p>

      <button onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function MyBookingContent() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>My Bookings</h1>

      {bookings.length === 0 && <p>No bookings found</p>}

      {bookings.map((booking, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{booking.service}</h3>
          <p>Duration: {booking.duration}</p>
          <p>Total Cost: {booking.total}</p>
          <p>Status: {booking.status}</p>
        </div>
      ))}
    </div>
  );
}

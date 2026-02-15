"use client";
import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>My Bookings</h1>

      {bookings.map((booking, index) => (
        <div key={index}>
          <h3>{booking.service}</h3>
          <p>Duration: {booking.duration}</p>
          <p>Total: {booking.total}</p>
          <p>Status: {booking.status}</p>
        </div>
      ))}
    </div>
  );
}

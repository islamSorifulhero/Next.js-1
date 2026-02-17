"use client";
import { useEffect, useState } from "react";

export default function MyBookingContent() {

  const [bookings,setBookings] = useState([]);

  useEffect(()=>{

    const pending = JSON.parse(localStorage.getItem("pendingBooking"));

    if(pending){
      const existing = JSON.parse(localStorage.getItem("bookings")) || [];
      localStorage.setItem("bookings", JSON.stringify([...existing, pending]));
      localStorage.removeItem("pendingBooking");
    }

    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);

  },[]);

  return (
    <div style={{padding:20}}>
      <h1>My Bookings</h1>

      {bookings.map((booking,index)=>(
        <div key={index} style={{marginBottom:10}}>
          <h3>{booking.service}</h3>
          <p>Duration: {booking.duration}</p>
          <p>Total: {booking.total}</p>
          <p>Status: {booking.status}</p>
        </div>
      ))}
    </div>
  );
}

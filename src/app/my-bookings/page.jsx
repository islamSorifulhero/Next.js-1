"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("/api/my-bookings");
        setBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.put(`/api/bookings/${id}`, { status: "Cancelled" });
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: "Cancelled" } : b))
      );
      alert("Booking Cancelled");
    } catch (err) {
      console.log(err);
      alert("Failed to cancel booking");
    }
  };

  if (bookings.length === 0)
    return <p className="text-center mt-10">No bookings found.</p>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      <div className="space-y-6">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="border p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{b.serviceTitle}</h2>
              <p>Duration: {b.duration} days</p>
              <p>
                Location: {b.location.division}, {b.location.district},{" "}
                {b.location.city}, {b.location.area}, {b.location.address}
              </p>
              <p className="font-bold">Total Cost: ৳ {b.totalCost}</p>
              <p>Status: {b.status}</p>
            </div>

            <div className="space-y-2 flex flex-col">
              <Link
                href={`/services/${b.serviceId}`}
                className="bg-blue-600 text-white px-4 py-2 rounded text-center"
              >
                View Details
              </Link>
              {b.status !== "Cancelled" && (
                <button
                  onClick={() => handleCancel(b._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

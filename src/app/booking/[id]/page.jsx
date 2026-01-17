"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/utils/services";
import axios from "axios";

export default function BookingPage({ params }) {
  const router = useRouter();
  const service = services.find((s) => s._id === params.id);

  const [duration, setDuration] = useState(1);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");

  if (!service) return <p className="text-center mt-10">Service Not Found</p>;

  const totalCost = duration * service.price;

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      userEmail: document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1] || "unknown@example.com",
      serviceId: service._id,
      duration,
      location: { division, district, city, area, address },
      totalCost,
      status: "Pending",
    };

    try {
      await axios.post("/api/bookings", bookingData);
      alert("Booking Successful! Status: Pending");
      router.push("/my-bookings");
    } catch (err) {
      console.log(err);
      alert("Booking Failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Book: {service.title}</h1>

      <form onSubmit={handleBooking} className="space-y-4">
        {/* Duration */}
        <div>
          <label>Duration (Days)</label>
          <input
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Location */}
        <div>
          <label>Division</label>
          <input
            type="text"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>District</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Area</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Total Cost */}
        <p className="text-lg font-bold mt-4">
          Total Cost: ৳ {totalCost}
        </p>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded mt-4"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

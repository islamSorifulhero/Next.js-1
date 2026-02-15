"use client";

import PrivateRoute from "@/components/PrivateRoute";
import BookingContent from "./BookingContent";

export default function BookingPage(props) {
  return (
    <PrivateRoute>
      <BookingContent {...props}/>
    </PrivateRoute>
  );
}

"use client";

import PrivateRoute from "@/components/PrivateRoute";
import MyBookingContent from "./MyBookingContent";

export default function Page(){
  return(
    <PrivateRoute>
      <MyBookingContent/>
    </PrivateRoute>
  )
}

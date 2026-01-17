import { NextResponse } from "next/server";

export function middleware(request) {
  // কুকি থেকে টোকেন চেক করা
  const token = request.cookies.get("token")?.value;

  const privateRoutes = ["/booking", "/my-bookings"];

  // চেক করা হচ্ছে ইউজার প্রাইভেট রুটে যাওয়ার চেষ্টা করছে কি না
  const isPrivateRoute = privateRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isPrivateRoute) {
    if (!token) {
      // টোকেন না থাকলে লগইন পেজে পাঠিয়ে দিবে
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// কোন কোন পেজে মিডলওয়্যার চলবে তা বলে দেওয়া
export const config = {
  matcher: ["/booking/:path*", "/my-bookings/:path*"],
};
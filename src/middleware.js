import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const privateRoutes = ["/booking", "/my-bookings"];

  const isPrivateRoute = privateRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isPrivateRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/booking/:path*", "/my-bookings/:path*"],
};
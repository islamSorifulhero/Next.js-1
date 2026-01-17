import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page Not Found</p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}

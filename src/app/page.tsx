import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24">
      <h1 className="font-bold">Anonymous page</h1>
      <div className="flex gap-2 items-end">
        <Link
          className="border-2 bg-gray-100 p-2 border-black rounded-lg"
          href="/signup"
        >
          Sign-up
        </Link>
        <Link
          className="border-2 bg-gray-100 p-2 border-black rounded-lg"
          href="/login"
        >
          Login
        </Link>
      </div>
    </main>
  );
}

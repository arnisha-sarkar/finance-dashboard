import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
        Welcome to Finance Dashboard
      </h1>
      <p className="text-slate-500 mb-8">
        Take control of your money with ease.
      </p>

      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
      >
        Go to Dashboard →
      </Link>
    </div>
  );
}

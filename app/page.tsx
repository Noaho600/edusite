export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold">Edu Platform</h1>
      <p className="mt-4 text-gray-600">Your learning starts here 🚀</p>
      <div className="mt-6 space-x-4">
        <a
          href="/auth/sign-in"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Sign In
        </a>
        <a
          href="/auth/sign-up"
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}

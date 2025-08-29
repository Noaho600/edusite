export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account? <a href="/auth/sign-up" className="text-blue-600">Sign Up</a>
        </p>
      </div>
    </main>
  );
}

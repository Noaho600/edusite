export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-xl font-bold text-blue-600">EduPlatform</a>
      <div className="space-x-4">
        <a href="/dashboard/student" className="text-gray-700 hover:text-blue-600">Student</a>
        <a href="/dashboard/teacher" className="text-gray-700 hover:text-blue-600">Teacher</a>
        <a href="/auth/sign-in" className="text-gray-700 hover:text-blue-600">Sign In</a>
      </div>
    </nav>
  );
}

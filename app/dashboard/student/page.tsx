import Navbar from "@/components/Navbar";

export default function StudentDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here are your lessons:</p>
        <ul className="mt-4 space-y-2">
          <li className="p-4 bg-white shadow rounded">
            <a href="/lessons/1" className="text-blue-600">Lesson 1: Introduction</a>
          </li>
          <li className="p-4 bg-white shadow rounded">
            <a href="/lessons/2" className="text-blue-600">Lesson 2: Basics</a>
          </li>
        </ul>
      </div>
    </main>
  );
}

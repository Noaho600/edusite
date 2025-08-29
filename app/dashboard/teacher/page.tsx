import Navbar from "@/components/Navbar";

export default function TeacherDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage lessons and students:</p>
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">Create Lesson</h2>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">New Lesson</button>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">View Students</h2>
            <button className="mt-2 px-4 py-2 bg-gray-200 rounded">Student List</button>
          </div>
        </div>
      </div>
    </main>
  );
}

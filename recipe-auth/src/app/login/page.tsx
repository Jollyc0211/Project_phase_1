'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    alert(`Logging in: ${JSON.stringify(form)}`);
    // TODO: Add real login logic here
  };

  const loginAsGuest = () => {
    alert("Logged in as Guest");
    // TODO: Handle guest login or redirect
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">🍽️ Recipe Manager</h1>
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Login
          </button>
          <button
            type="button"
            onClick={loginAsGuest}
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Login as Guest
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
}

'use client'

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
        >
          Sign in with Github
        </button>
      </div>
    </div>
  );
}

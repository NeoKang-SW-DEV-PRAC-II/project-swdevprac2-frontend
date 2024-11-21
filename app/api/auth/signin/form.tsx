"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignInForm({ csrfToken }: { csrfToken: string }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const searchParams = useSearchParams();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const callbackUrl = searchParams?.get("callbackUrl") || "/";
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // Do not redirect automatically
      });

  
      if (res?.ok) {
        // Redirect on success
        window.location.href = callbackUrl;
      } else {
        // Alert error and stay on the same page
        alert("Authentication failed");
      }
    };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 space-y-10 w-full sm:w-[400px] py-3">
      <div className="text-2xl font-medium text-center text-gray-600 py-3">
        <h1>Login</h1>
      </div>
      <input
        type="hidden"
        name="csrfToken"
        defaultValue={csrfToken}
      />
      <div className="grid w-full items-center gap-1.5 px-3 text-gray-600">
        <label htmlFor="email">
          Email
          <input
            className="w-full"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="grid w-full items-center gap-1.5 px-3 text-gray-600">
        <label htmlFor="password">
          Password
          <input
            className="w-full"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" className="px-3 py-2 bg-lime-600 hover:bg-lime-700 w-1/4 mx-3 my-3">Sign in</button>
      <Link href="/api/auth/signup" className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-1/4 mx-3 my-3">Sign up</Link>
    </form>
  );
}
"use client";

import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignInForm({ csrfToken }: { csrfToken: string }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
  
      const callbackUrl = searchParams?.get("callbackUrl") || "/";
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // Do not redirect automatically
      });
  
      setIsLoading(false);
  
      if (res?.ok) {
        // Redirect on success
        window.location.href = callbackUrl;
      } else {
        // Alert error and stay on the same page
        alert("Authentication failed");
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="csrfToken"
        defaultValue={csrfToken}
      />
      <div>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Sign in</button>
      <Link href="/api/auth/signup">Sign up</Link>
    </form>
  );
}
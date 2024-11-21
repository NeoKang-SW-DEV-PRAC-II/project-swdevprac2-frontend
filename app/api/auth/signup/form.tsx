"use client";

import { UsersAPI } from "../../user";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

// TODO: handle form validation
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async () => {
      try {
        const { registerUser } = UsersAPI();
        const body: UserRegisterBody = {
            name,
            tel,
            email,
            role: "user",
            password,
            createAt: new Date().toISOString(),
            };
        await registerUser(body);
        setName("");
        setTel("");
        setEmail("");
        setPassword("");
        window.alert("Register successfully!");
      } catch {
        setError("ลงทะเบียนไม่สำเร็จ");
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
      <form onSubmit={handleSubmit} className="bg-gray-200 space-y-10 w-full sm:w-[500px] py-3">
        <div className="text-2xl font-medium text-center text-gray-600 py-3">
          <h1>Register</h1>
        </div>
        <div className="grid w-full items-center gap-1.5 px-3 text-gray-600">
          <label>
            Name
            <input
              className="w-full"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="grid w-full items-center gap-1.5 px-3 text-gray-600">
          <label>
            Tel
            <input
              className="w-full"
              type="tel"
              name="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </label>
        </div>
        <div className="grid w-full items-center gap-1.5 px-3 text-gray-600">
          <label>
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
          <label>
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
        <button type="submit" disabled={isPending} className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-1/4 mx-3 my-3">
          {isPending ? "Loading..." : "Register"}
        </button>
        {error && <p>{error}</p>}
      </form>
  );
}
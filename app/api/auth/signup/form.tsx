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
    <div className="flex flex-col items-center">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Tel
            <input
              type="tel"
              name="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </label>
        </div>
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
        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Register"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUserLogin } from "@/src/hooks/auth.hook";

const LoginForm: React.FC = () => {
  const { handleLogin, isPending, isSuccess } = useUserLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/admin");
    }
  }, [isSuccess, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="card w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-control">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="input input-bordered w-full text-md rounded-lg p-4 border border-primary-50"
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="block  text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="input input-bordered w-full text-md rounded-lg p-4 border border-primary-50"
              id="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

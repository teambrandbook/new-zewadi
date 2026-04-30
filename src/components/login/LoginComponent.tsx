"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("member");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/signup");
  };

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center bg-[#d9d1c5] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/home/heroBg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mx-auto w-full max-w-[1050px] pb-6 pt-20 md:pt-10 lg:pt-28">
        <div className="overflow-hidden rounded-[24px] border-[3px] border-white bg-transparent shadow-xl">
          <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 z-10 w-[110%] rounded-[24px] bg-transparent" />
            </div>

            <div className="relative flex items-center justify-center bg-white px-5 py-8 sm:px-6 lg:px-10">
              <div className="w-full max-w-[300px]">
                <div className="mb-5 text-center">
                  <h1 className="text-[20px] font-bold tracking-tight text-[#0a4833]">
                    Welcome Back
                  </h1>
                  <p className="text-[11px] text-[#4b5563]">
                    Access your account details below
                  </p>
                </div>

                <div className="mb-5 flex flex-col items-center font-mulish">
                  <h2 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#0a4833]">
                    Login as
                  </h2>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setLoginType("guest")}
                      className={`h-[36px] w-[110px] rounded-md border text-xs font-semibold transition-all ${
                        loginType === "guest"
                          ? "border-[#9f8151] bg-[#fdfaf3] text-[#9f8151]"
                          : "border-gray-200 bg-white text-gray-400 opacity-60"
                      }`}
                    >
                      Guest
                    </button>

                    <span className="text-sm font-bold italic text-[#0a4833]">or</span>

                    <button
                      type="button"
                      onClick={() => setLoginType("member")}
                      className={`h-[36px] w-[110px] rounded-md text-xs font-semibold transition-all ${
                        loginType === "member"
                          ? "bg-[#0a4833] text-white shadow"
                          : "bg-gray-100 text-gray-400 opacity-60"
                      }`}
                    >
                      Member
                    </button>
                  </div>
                </div>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-1 block text-[9px] font-bold uppercase text-[#374151]">
                      Email Address
                    </label>
                    <input
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      placeholder="name@company.com"
                      className="h-[38px] w-full rounded-md border border-gray-300 px-3 text-xs outline-none focus:border-[#0a4833]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[9px] font-bold uppercase text-[#374151]">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="h-[38px] w-full rounded-md border border-gray-300 px-3 pr-9 text-xs outline-none focus:border-[#0a4833]"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px]">
                    <label className="flex cursor-pointer items-center gap-1 text-gray-600">
                      <input type="checkbox" className="h-3 w-3 accent-[#0a4833]" />
                      Remember
                    </label>

                    <button type="button" className="font-bold text-[#9f8151]">
                      Forgot?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="h-[40px] w-full rounded-md bg-[#0a4833] text-xs font-bold text-white shadow transition hover:bg-[#0c5a40]"
                  >
                    Sign In
                  </button>

                  <div className="relative py-1">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-100"></span>
                    </div>
                    <div className="relative flex justify-center text-[9px] uppercase">
                      <span className="bg-white px-2 text-gray-400">Social Login</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex h-[38px] w-full items-center justify-center gap-2 rounded-md border border-gray-200 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                      <path
                        fill="#EA4335"
                        d="M12 10.2v3.9h5.4c-.24 1.26-.96 2.32-2.04 3.03l3.3 2.56c1.92-1.77 3.03-4.38 3.03-7.48 0-.71-.06-1.39-.19-2.05H12Z"
                      />
                      <path
                        fill="#4285F4"
                        d="M12 21.5c2.73 0 5.03-.9 6.7-2.43l-3.3-2.56c-.91.61-2.08.97-3.4.97-2.61 0-4.82-1.76-5.61-4.12H2.98v2.65A10.12 10.12 0 0 0 12 21.5Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M6.39 13.36a6.08 6.08 0 0 1 0-3.86V6.85H2.98a10.12 10.12 0 0 0 0 9.16l3.41-2.65Z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 8.52c1.48 0 2.81.51 3.86 1.5l2.89-2.89C17.02 5.52 14.72 4.5 12 4.5A10.12 10.12 0 0 0 2.98 6.85l3.41 2.65C7.18 10.28 9.39 8.52 12 8.52Z"
                      />
                    </svg>
                    Google
                  </button>

                  <div className="flex justify-center gap-3 pt-3 text-[8px] font-bold uppercase text-[#0a4834]/60">
                    <Link href="#" className="hover:underline">
                      Privacy
                    </Link>
                    <Link href="#" className="hover:underline">
                      Terms
                    </Link>
                    <Link href="#" className="hover:underline">
                      Support
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

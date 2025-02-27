"use client";
import { useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (!email || !password || !name) {
      toast.error("Please fill in all fields.");
      return;
    }

    const r = await register({
      email,
      password,
      name,
    });

    if (r?.error) {
      if (r.error.includes("already in use")) {
        toast.error("Email already exist");
      } else {
        toast.error(r.error);
      }
      return;
    } else {
      ref.current?.reset();
      toast.success("Registration successful!");
      return router.push("/login");
    }
  };

  return (
    <section className="flex justify-center mt-16">
      <form
        ref={ref}
        onSubmit={handleSubmit} // Use onSubmit instead of action
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2"
      >
        <h1 className="mb-5 text-2xl font-bold">Register</h1>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            placeholder="Full Name"
            className="grow"
            name="name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            className="grow"
            name="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="password"
            placeholder="Password"
          />
        </label>

        <button className=" btn btn-success">Sign Up</button>

        <Link
          href="/login"
          className="text-sm text-[#888] transition duration-300 ease hover:text-[#eb650b]"
        >
          I already have an account
        </Link>
      </form>
    </section>
  );
}
"use client";
import { signIn } from "@/auth/helpers";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginComponent = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      window.location.reload()
      router.push(res);
      console.log("Login successful", res);
    } catch (err: any) {
      console.error("Login error", err.message);
      setError(err.message || 'An error occurred');
    }
  };
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <label htmlFor="email" style={{color:"white"}}>Email Address {error}</label>
        <Input
          id="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          name="email"
          style={{marginBottom:"1 0px"}}
          className=" text-black"
        />

        <label htmlFor="email" style={{color:"white"}}>Password</label>
        <Input
          id="password"
          placeholder="*************"
          type="password"
          name="password"
          className="mb-6 text-black"
        />

        <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Login &rarr;
        </button>

        <p className="text-center text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
          Dont have account? <Link href="/register">Register</Link>
        </p>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form> 
    </div>
  );
};

export default LoginComponent;

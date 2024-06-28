import { Input } from "@/components/ui/input";
import Link from "next/link";
import { login } from "@/server/user";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  
  const session = await auth();
  const user = session?.user;
  console.log(session,'register  ',user)
  if (user) redirect("/"); 

  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <form action={login} className="my-8">
        <label htmlFor="email">Email Address</label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" name="email" />

        <label htmlFor="email">Password</label>
        <Input id="password" placeholder="*************" type="password" name="password" className="mb-6" />

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          
        >
          Login &rarr;
        </button>

        <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
          Dont have an account? <Link href="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

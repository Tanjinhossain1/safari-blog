"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { signIn } from "@/auth/helpers";

const RegisterComponent = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = {
      fullName,
      email,
      password,
      role: "user",
    };
    axios
      .post(`/api/auth/register`, data)
      .then(async (response: any) => {
        console.log("response in register ", response);
        if (response?.data?.error) {
          console.log("error in register ", response?.data?.error);
          toast({
            variant: "destructive",
            title: response?.data?.error,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
        if (response.data.success) {
          toast({
            variant: "default",
            title: response?.data?.message,
          });
          const data = response?.data?.data[0];

          await signIn("credentials", {
            redirect: false,
            email: data?.email,
            password: data?.password,
          });
          router.push("/");
        }
      })
      .catch((error) => {
        console.log("error in register ", error);
      });
  };
  return (
    <div className="my-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MyShop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>

      <form onSubmit={handleSubmit} className="my-8">
        {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col col-span-12">
            <label>Full Name</label>
            <Input
              id="fullName"
              placeholder="Full Name"
              type="text"
              name="fullName"
            />
          </div>
        </div> */}
        <label>Full Name</label>
        <Input
          id="fullName"
          placeholder="Full Name"
          type="text"
          name="fullName"
        />
        <label>Email Address</label>
        <Input
          id="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          name="email"
        />

        <label>Password</label>
        <Input
          id="password"
          placeholder="***********"
          type="password"
          name="password"
          className="mb-5"
        />

        <button
          type="submit"
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Sign up &rarr;
        </button>

        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default RegisterComponent;

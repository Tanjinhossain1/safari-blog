import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginComponent from "@/Component/Login/LoginComponent";

const Login = async () => {
  const session = await auth();
  const user = session?.user;
  console.log(session, "register  ", user);
  if (user) redirect("/");

  return (
     <LoginComponent />
  );
};

export default Login;

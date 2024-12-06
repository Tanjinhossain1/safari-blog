
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import RegisterComponent from "@/Component/Register/RegisterComponent";

const Register = async () => {
  const session = await auth();
  const user = session?.user;
  console.log(session,'register  ',user)
  if (user) redirect("/"); 


  return (
   <RegisterComponent />
  );
};
export default Register;

import { redirect } from "next/navigation";
import { auth } from "@/auth";
import RegisterComponent from "@/Component/Register/RegisterComponent";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/HomePage/Footer";

const Register = async () => {
  const session = await auth();
  const user = session?.user;
  console.log(session,'register  ',user)
  if (user) redirect("/"); 


  return (
    <>
    <Navbar />
    <RegisterComponent />
    <Footer />
    </>
  );
};
export default Register;
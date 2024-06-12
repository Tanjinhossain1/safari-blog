import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";
import Footer from "@/Component/HomePage/Footer"; 

  function HomePage() {
  return (
    <>
      <Navbar />
      <Banner   />
      <Footer />
    </>
  );
}
 

export default HomePage;
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    </>
  );
}

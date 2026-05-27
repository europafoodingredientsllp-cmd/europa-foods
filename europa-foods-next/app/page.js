import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Europa Foods - Premium Dehydrated Foods & Spices",
  description:
    "30+ years of expertise. Zero chemicals. International certifications. Built for global trade.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeClient />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

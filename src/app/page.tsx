"use client";

import About from "../../components/About/About";
// import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Scills from "../../components/Scills/Scills";
import Works from "../../components/Works/Works";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    };
    initAos();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Scills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

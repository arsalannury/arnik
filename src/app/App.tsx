import "../styles/globals.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import { Footer } from "react-day-picker";

export default function App() {
  return (
    <>
      <div
        className="bg-black text-white min-h-screen overflow-x-hidden"
        style={{ fontFamily: "Vazir" }}
      >
        <Navbar />
        {/* ──────────────────── NAV ──────────────────── */}

        {/* ──────────────────── HERO ──────────────────── */}
        <Hero />

        {/* ──────────────────── SERVICES ──────────────────── */}
        <Services />

        {/* ──────────────────── PROCESS ──────────────────── */}
        <Process />

        {/* ──────────────────── ABOUT ──────────────────── */}

        {/* ──────────────────── TESTIMONIALS ──────────────────── */}
        <Testimonials />

        {/* ──────────────────── FINAL CTA ──────────────────── */}
        <FinalCta />

        {/* ──────────────────── FOOTER ──────────────────── */}
        <Footer />
      </div>
    </>
  );
}

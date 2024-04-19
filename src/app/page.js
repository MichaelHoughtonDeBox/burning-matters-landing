"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


export default function Home() {

  return (
    <>
    {/* <Navbar /> */}
    <main className="items-center justify-center min-h-screen bg-white text-black relative">
      <Hero />
      {/* Rest of your content */}
    </main>
    </>  
  );
}
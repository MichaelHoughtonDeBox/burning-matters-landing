"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.beehiiv.com/v2/publications/YOUR_PUBLICATION_ID/subscriptions", {
        email,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY",
        },
      });

      if (response.status === 200) {
        setIsModalOpen(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white text-black">
      
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: `url(https://res.cloudinary.com/dkbn21xdu/image/upload/v1703687418/liquid-cheese_bienkd.svg)`,
        maskImage: `radial-gradient(circle at center, transparent 20%, black 90%)`,
        WebkitMaskImage: `radial-gradient(circle at center, transparent 20%, black 90%)`
      }}></div>

      <div className="relative">
        {/* Background elements
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div> */}

        {/* Content */}
        <div className="relative z-10">
          {/* Text above the hero */}
          <div className="flex items-center justify-center mb-2">
            <h2 className="text-md font-bold text-center mr-4">
              Fire Safety Knowledge That Matters.
            </h2>
            <Image
              src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1713515589/icon_ocjtvw.png"
              alt="Logo"
              width={50}
              height={50}
              className="ml-4"
            />
          </div>
          <h1 className="text-8xl font-black mb-8 text-center">
            Burning Matters
          </h1>

          {/* Text below the hero */}
          <p className="mt-8 text-sm text-center max-w-3xl">
            Burning Matters is a community of passionate Fire Science and Fire Safety professionals.
            The Newsletter shares information about recent events, research, manufacturers, spotlights our members and provides insights and opinions on important matters in the fire safety industry.
            The author, Professor Grunde Jomaas (BSc from University of Maryland and PhD from Princeton University), is an award-winning mentor, educator and fire safety communicator.
          </p>

          {/* Email sign-up form */}
          <form onSubmit={handleSubmit} className="mt-8 flex justify-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Join Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Subscription Success"
        className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Thank you for subscribing!</h2>
          <p className="mb-4">You have successfully subscribed to our newsletter.</p>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </Modal>
    </main>
  );
}
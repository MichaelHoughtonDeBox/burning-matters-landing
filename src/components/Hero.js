"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

export default function Hero() {
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
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white text-black relative">
        
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-90" style={{
            backgroundImage: `url(https://res.cloudinary.com/dkbn21xdu/image/upload/v1713526527/aewsrdtgfhyj_damdry.png)`,
            maskImage: `radial-gradient(circle at center, transparent 20%, black 80%)`,
            WebkitMaskImage: `radial-gradient(circle at center, transparent 20%, black 80%)`
        }}></div>

        <div className="relative">

            <div className="relative z-10">
                {/* Text above the hero */}
                <div className="flex items-center justify-center mb-4">
                    <h2 className="text-sm md:text-md lg:text-md font-bold text-center px-4 bg-red-500 text-white rounded-2xl">
                    Fire Safety Knowledge That Matters.
                    </h2>
                </div>
                {/* Heading and logo */}
                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-6xl md:text-6xl lg:text-8xl font-black text-black mr-4">
                    Burning Matters
                    </h1>
                    <Image
                    src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1713515589/icon_ocjtvw.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    />
                </div>
                {/* Text below the hero */}
                <div className="flex justify-center">
                    <p className="mt-2 text-md text-center font-base max-w-3xl">
                        The Newsletter that shares information about recent events, research, manufacturers, spotlights our members and provides insights and opinions on important matters in the fire safety industry.
                    </p>
                </div>

                {/* Email sign-up form */}
                <div className="flex justify-center mt-8">
                    <form onSubmit={handleSubmit} className="flex justify-center gap-4 sm:w-full lg:w-3/4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 font-bold bg-red-500 text-white rounded-2xl hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
                    >
                        Join
                    </button>
                    </form>
                </div>
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
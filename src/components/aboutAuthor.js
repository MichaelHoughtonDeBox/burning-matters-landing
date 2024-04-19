"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";

export default function AboutAuthor() {
  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white text-black relative">
        
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
            backgroundImage: `url(https://res.cloudinary.com/dkbn21xdu/image/upload/v1713526527/aewsrdtgfhyj_damdry.png)`,
            maskImage: `radial-gradient(circle at center, transparent 20%, black 90%)`,
            WebkitMaskImage: `radial-gradient(circle at center, transparent 20%, black 90%)`
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
            </div>
        </div>
    </main>
  );
}
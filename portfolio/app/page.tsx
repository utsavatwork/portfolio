"use client";

import SectionMap from "@/components/SectionMap";
import { useEffect } from "react";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import MiniMap from "@/components/MiniMap";

const HomeSection = () => {
  return (
    <div className="relative w-full h-full px-4 sm:px-8 md:px-16 flex items-center justify-start">
      {/* 👤 Image floating on the left, overlapping slightly */}
      <div className="relative sm:static sm:ml-0 top-1/2 sm:-left-16 md:-left-24">
        <Image
          src="/profile-pic.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* 🧑 Main Info Block */}
      <div className="ml-40 sm:ml-52 md:ml-30 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Utsav Prashant Tayde</h1>
        <p className="text-xl text-gray-300">
          Software Engineer · 3+ years experience
        </p>
        <p className="text-sm text-gray-400">📍 Pune, India</p>

        <a
          href="/resume.pdf"
          download
          className="mt-4 inline-block px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
        >
          <div className="flex items-center space-x-2">
            <span>Download Resume</span>
            <MdDownload />
          </div>
        </a>

        {/* ⌨️ Mini-map Hint */}
        <p className="mt-6 text-xs text-gray-500 animate-pulse">
          Navigate via mini-map in the bottom corner →
        </p>
      </div>
    </div>
  );
};


export default function Home() {
  useEffect(() => {
    // Scroll to center [1,1] on mount
    window.scrollTo({
      top: window.innerHeight,
      left: window.innerWidth,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="relative w-[300vw] h-[300vh] overflow-hidden">
      {[...Array(9)].map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        return (
          <div
            key={`${row}-${col}`}
            className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center text-2xl border border-white"
            style={{
              top: `${row * 100}vh`,
              left: `${col * 100}vw`,
              backgroundColor: `hsl(${i * 40}, 30%, 15%)`,
            }}
          >
            {row === 1 && col === 1 ? <HomeSection /> : `Section [${row},${col}]`}
          </div>
        );
      })}
      {/* Mini map grid nav */}
      {/* <SectionMap /> */}
      <MiniMap />
    </div>
  );
}

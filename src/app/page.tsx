"use client";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-softDark text-gray-200 px-6">
      <Navbar />
      <Banner />
      <Projects  />
    </div>
  );
}

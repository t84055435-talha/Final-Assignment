"use client"; // Required because this handles user interaction/navigation

import React from "react";
import "@/styles/home.css"; // Using @ alias
import Link from "next/link"; // Next.js specific Link component

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Bias Detection App</h1>
      <ul className="navbar-links">
        {/* Changed 'to' to 'href' and used Next.js Link */}
        <li><Link href="/">Home</Link></li>
        <li><Link href="/trends">Trends</Link></li>
        <li><Link href="/chathistory">Chat History</Link></li>
        <li><Link href="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
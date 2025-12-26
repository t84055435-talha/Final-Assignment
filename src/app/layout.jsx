import React from "react";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import "@/styles/global.css";

export const metadata = {
  title: "Political Bias Detector",
  description: "Analyze text for political bias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Navbar />
          <main>{children}</main>
          {/* Note: In Next.js, it's more common to put a Footer here. 
              If 'Contact' is a full page, you might want to remove it from here. */}
          <Contact /> 
        </div>
      </body>
    </html>
  );
}
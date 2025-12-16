import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Developer Take-Home Assessment (Next.js)",
  description:
    "This assessment is designed to evaluate your ability to convert designs into clean, responsive, production-ready frontend code using React/Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.className} w-screen h-screen flex items-center justify-center`}
        style={outfit.style}
      >
        <div className="w-screen md:w-150 md:max-h-190 max-h-screen md:rounded-4xl bg-white px-5 py-10 md:px-10 md:py-15 overflow-auto">
          <ToastContainer
            position="top-right"
            autoClose={3000}
          />
          {children}
        </div>
      </body>
    </html>
  );
}

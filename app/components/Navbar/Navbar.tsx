"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/poha_logo.jpg"
            alt="Gavi Shri"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10 text-[#2F352E] font-medium">
          <Link href="#productssection" className="hover:opacity-70 transition">
            Products
          </Link>

          <Link href="#contactus" className="hover:opacity-70 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#2F352E]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#EDEBE6] border-t border-[#d8d5cf]">
          <div className="flex flex-col items-center gap-6 py-8 text-[#2F352E] text-lg">

            <Link
              href="#products"
              onClick={() => setOpen(false)}
              className="hover:opacity-70"
            >
              Products
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:opacity-70"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Achievements", href: "/achievements" },
  { label: "Shipments", href: "/shipments" },
];

export default function Navbar({ variant = "light" }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = variant === "dark";

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`sticky top-0 transition-all duration-500 backdrop-blur-md z-50 border-b border-outline-variant/10 ${
          scrolled
            ? "nav-scrolled"
            : isDark
            ? "bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 md:py-6 max-w-container-max mx-auto">
          {/* Brand */}
          <div className="font-headline-md text-headline-md font-serif tracking-wide font-bold">
            <Link
              href="/"
              className={`flex items-center gap-3 ${
                isDark
                  ? "text-stark-white"
                  : "text-on-surface dark:text-on-primary-container"
              }`}
            >
              <img
                src="/images/Europa Logo Without bg.png"
                alt="Europa Foods Logo"
                className="h-10 w-auto object-contain"
              />
              <span>Europa Foods</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body-md text-body-md tracking-wide transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-champagne-gold font-semibold border-b-2 border-champagne-gold pb-1"
                    : isDark
                    ? "text-stark-white/80 hover:text-champagne-gold"
                    : "text-on-surface-variant hover:text-champagne-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-champagne-gold text-deep-navy font-body-md px-6 py-2 rounded shadow-sm hover:opacity-90 transition-opacity inline-block"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(true)}
          >
            <span
              className={`material-symbols-outlined text-3xl ${
                isDark
                  ? "text-stark-white"
                  : "text-on-surface dark:text-on-primary-container"
              }`}
            >
              menu
            </span>
          </button>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

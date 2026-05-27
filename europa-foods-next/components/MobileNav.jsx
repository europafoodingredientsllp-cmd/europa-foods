"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Achievements", href: "/achievements" },
  { label: "Shipments", href: "/shipments" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav({ open, onClose }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[85%] max-w-[380px] bg-deep-navy shadow-2xl border-l border-champagne-gold/10 flex flex-col transform transition-transform duration-350 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stark-white/10">
          <div className="flex items-center gap-2">
            <img
              src="/images/Europa Logo Without bg.png"
              alt="Europa Foods Logo"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="font-headline-md text-headline-md font-serif text-champagne-gold">
              Europa Foods
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-stark-white hover:text-champagne-gold transition-colors p-1"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className={`block text-[22px] font-body-lg py-3 px-2 rounded transition-colors duration-200 ${
                isActive(l.href)
                  ? "text-champagne-gold font-semibold border-l-4 border-champagne-gold pl-5 bg-champagne-gold/5"
                  : "text-stark-white hover:text-champagne-gold hover:bg-stark-white/5 pl-6"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-stark-white/10">
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-center bg-champagne-gold text-deep-navy font-label-caps text-label-caps px-6 py-4 rounded uppercase tracking-wider hover:bg-secondary-fixed-dim transition-colors font-semibold"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

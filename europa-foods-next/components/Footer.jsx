import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary-container dark:bg-primary-container text-stark-white font-body-md text-body-md rounded-none border-t border-outline-variant/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/Europa Logo Without bg.png"
              alt="Europa Foods Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <span className="font-headline-lg text-headline-lg text-champagne-gold font-serif">
              Europa Foods
            </span>
          </div>
          <p className="text-on-tertiary-container mb-6">
            Premium Dehydrated Foods &amp; Spices for the Global Market.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/quality"
              >
                Quality
              </Link>
            </li>
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest mb-6">
            Products
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/products"
              >
                Dehydrated Vegetables
              </Link>
            </li>
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/products"
              >
                Indian Spices
              </Link>
            </li>
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="/products"
              >
                Organic Herbs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest mb-6">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="text-on-tertiary-container">info@europafoods.com</li>
            <li className="text-on-tertiary-container">+1 234 567 8900</li>
            <li>
              <Link
                className="text-on-tertiary-container hover:text-stark-white transition-colors hover:translate-x-1 transition-transform duration-200 inline-block hover:text-champagne-gold"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/10 px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center md:text-left text-on-tertiary-container text-sm">
        © 2024 Europa Foods Global Exports. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Products - Europa Foods",
  description: "Explore our premium catalog of dehydrated vegetables and Indian spices. Exceptional quality for the global market.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "Dehydrated Vegetables",
      category: "DEHYDRATED VEGETABLES",
      image: "/images/Dehydrated Vegetables.jpeg",
      href: "/products/dehydrated-vegetables"
    },
    {
      name: "Indian Spices",
      category: "INDIAN SPICES",
      image: "/images/Indian SPices.jpeg",
      href: "/products/indian-spices"
    },
    {
      name: "Organic Spices",
      category: "ORGANIC SPICES",
      image: "/images/Organic Spices.jpeg",
      href: "/products/organic-spices"
    },
    {
      name: "Organic Herbs",
      category: "ORGANIC HERBS",
      image: "/images/Organic Herbs.jpeg",
      href: "/products/organic-herbs"
    },
    {
      name: "Spray Dried Powders",
      category: "SPRAY DRIED POWDERS",
      image: "/images/Spray Dried Vegetable and powder.jpeg",
      href: "/products/spray-dried-powders"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="light" />

      <main className="flex-grow bg-warm-cream py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="font-display-lg-mobile text-headline-xl md:text-display-lg-mobile text-deep-navy font-bold leading-tight">
              Our Premium Products
            </h1>
            <div className="w-16 h-0.5 bg-champagne-gold mx-auto mt-4"></div>
          </div>

          {/* Premium Products 3-2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {products.map((product, idx) => {
              // Custom alignment logic for the 3-2 layout
              let alignmentClasses = "col-span-1 md:col-span-1 lg:col-span-2";
              if (idx === 3) {
                // 4th item starts at column 2 on desktop to center the bottom row
                alignmentClasses = "col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-2";
              } else if (idx === 4) {
                // 5th item spans 2 columns on tablet/desktop
                alignmentClasses = "col-span-1 md:col-span-2 lg:col-span-2";
              }

              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className={`${alignmentClasses} group relative overflow-hidden rounded bg-stark-white border border-outline-variant/10 aspect-[3/4] cursor-pointer block w-full shadow-sm hover:shadow-md transition-all duration-500`}
                >
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={product.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent transition-opacity duration-300 group-hover:opacity-95"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className="block text-champagne-gold font-label-caps text-[10px] font-bold tracking-widest uppercase mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-stark-white leading-tight">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function CategoryPageContent({ 
  categoryTitle, 
  tabs, 
  products,
  theme
}) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "All";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams, tabs]);

  const filteredProducts = activeTab === "All"
    ? products
    : products.filter((p) => p.tag === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="light" />

      <main className="flex-grow bg-warm-cream">
        {/* Header Banner Wrapper */}
        <div className="relative w-full">
          {/* Background Banner with overflow-hidden */}
          <div className={`${theme.banner} h-[260px] relative w-full shadow-inner overflow-hidden flex justify-center items-end pb-12`}>
            <div className="absolute inset-0 bg-black/10 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/15 to-transparent opacity-40 z-0"></div>
          </div>
          
          {/* Centered White Card Block (placed outside overflow-hidden) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-stark-white px-12 py-8 shadow-xl border border-outline-variant/10 min-w-[320px] max-w-xl text-center z-20 rounded-[4px]">
            <span className={`font-label-caps text-[10px] font-bold tracking-widest uppercase mb-1 block ${theme.accentText}`}>
              Europa Foods Category
            </span>
            <h1 className="font-display-lg-mobile text-headline-xl md:text-display-lg-mobile text-deep-navy font-bold leading-tight">
              {activeTab === "All" ? categoryTitle : activeTab}
            </h1>
          </div>
        </div>

        {/* Height spacer for centered title card */}
        <div className="h-24 bg-warm-cream"></div>

        {/* Tab Selection Menu */}
        <section className="bg-warm-cream py-6 border-b border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto whitespace-nowrap flex gap-8 justify-center py-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-body-md text-body-md font-semibold tracking-wide cursor-pointer pb-2 border-b-2 transition-all duration-300 uppercase text-xs ${
                  activeTab === tab
                    ? `${theme.accentText} ${theme.accentBorder} scale-105 font-bold`
                    : "text-on-surface-variant border-transparent hover:text-deep-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="bg-warm-cream py-16">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.name + "-" + idx}
                  className="group bg-stark-white border border-outline-variant/10 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-surface-container border-b border-outline-variant/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-[9px] font-bold uppercase rounded-full border shadow-sm ${theme.badge}`}>
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-md text-base text-deep-navy font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-on-surface-variant font-body-md text-xs mb-6 leading-relaxed">
                        {product.description || "Premium export grade ingredient meeting stringent international food safety standards."}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/917041226666?text=Hello,%20I%20am%20interested%20in%20sourcing%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center border border-deep-navy/20 ${theme.buttonHoverBg} ${theme.buttonHoverBorder} hover:text-stark-white text-deep-navy py-3 px-4 font-label-caps text-xs tracking-wider transition-all duration-300 font-semibold`}
                    >
                      Inquire Specs
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <p className="text-center text-on-surface-variant font-body-md py-12">
                No products found in this sub-category.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function CategoryPageTemplate(props) {
  const defaultTheme = {
    banner: "bg-gradient-to-r from-[#1B4D3E] to-[#2E7D32]",
    accentText: "text-[#2E7D32]",
    accentBorder: "border-[#2E7D32]",
    buttonHoverBg: "hover:bg-[#2E7D32]",
    buttonHoverBorder: "hover:border-[#2E7D32]",
    badge: "bg-green-50 text-green-700 border-green-200"
  };

  const theme = props.theme || defaultTheme;

  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-warm-cream justify-center items-center">
        <div className="font-body-md text-deep-navy font-semibold">Loading Catalog...</div>
      </div>
    }>
      <CategoryPageContent {...props} theme={theme} />
    </Suspense>
  );
}

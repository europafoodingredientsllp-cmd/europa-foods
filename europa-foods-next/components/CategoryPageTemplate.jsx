"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function CategoryPageContent({ 
  categoryTitle, 
  tabs, 
  products,
  theme
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const tabParam = searchParams.get("tab") || "All";
  const productParam = searchParams.get("product");

  const [activeTab, setActiveTab] = useState(tabParam);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState("packing-size");

  // Synchronize tab from URL query param
  useEffect(() => {
    if (tabs.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam, tabs]);

  // Synchronize selected product from URL query param
  useEffect(() => {
    if (productParam) {
      const match = products.find(p => p.name.toLowerCase().replace(/\s+/g, "-") === productParam);
      if (match) {
        setSelectedProduct(match);
      } else {
        setSelectedProduct(null);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [productParam, products]);

  // Filter products by tab
  const filteredProducts = activeTab === "All"
    ? products
    : products.filter((p) => p.tag === activeTab);

  const handleTabChange = (tabName) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tabName);
    params.delete("product"); // Reset product when switching tabs
    router.push(`/products/${getCategorySlug()}?${params.toString()}`);
  };

  const handleProductSelect = (product) => {
    const params = new URLSearchParams(searchParams);
    params.set("product", product.name.toLowerCase().replace(/\s+/g, "-"));
    router.push(`/products/${getCategorySlug()}?${params.toString()}`);
  };

  const handleBackToGrid = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("product");
    router.push(`/products/${getCategorySlug()}?${params.toString()}`);
  };

  const getCategorySlug = () => {
    return categoryTitle.toLowerCase().replace(/\s+/g, "-");
  };

  // Structured specification details helper
  const getSpecs = (prod) => {
    if (!prod) return {};

    // Tailor specs based on category
    let defaultMoisture = "10.0% Max";
    let defaultLoading = "15 - 20 MT (depending on density) in 20ft container.";
    let defaultQuality = "Premium A, B and Commercial export-grade qualities. 100% natural, sorted and Sortex-cleaned, free from foreign matter.";

    if (categoryTitle.toLowerCase().includes("powder")) {
      defaultMoisture = "6.0% Maximum";
      defaultLoading = "15 - 18 MT in 20ft container.";
    } else if (categoryTitle.toLowerCase().includes("herb")) {
      defaultMoisture = "8.0% Maximum";
      defaultLoading = "8 - 10 MT in 20ft container.";
    } else if (categoryTitle.toLowerCase().includes("spice")) {
      defaultMoisture = "10.0% Maximum";
      defaultLoading = "18 - 20 MT in 20ft container.";
    }

    return {
      "packing-size": {
        title: "Packing size",
        icon: "inventory_2",
        content: (
          <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Primary Barrier:</strong> Double food-grade high-density poly-bags to seal in aroma and prevent atmospheric moisture ingress.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Outer Protection:</strong> Packed securely in heavy-duty 20 kg or 25 kg net corrugated boxes, or multi-layer tough paper bags.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Custom Requests:</strong> Vacuum packing, aluminum foil barrier bags, or specialized private label box packing can be tailored.</span>
            </li>
          </ul>
        )
      },
      "loading-capacity": {
        title: "Loading capacity",
        icon: "local_shipping",
        content: (
          <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Net Loading Weight:</strong> {prod.loadingCapacity || defaultLoading}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Secured Transit:</strong> Fully palletized or carton-stacked with heavy desiccants to prevent sea moisture sweat during long oceanic crossings.</span>
            </li>
          </ul>
        )
      },
      "quality": {
        title: "Quality",
        icon: "verified",
        content: (
          <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Grades Offered:</strong> Premium Export Grade A, B, and Commercial grades available.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Purity Standard:</strong> 100% natural crop. Absolutely zero fillers, artificial anti-caking agents, skin residues, or dark burnt particles.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Technology:</strong> Optical Sortex cleaned and metal-detected to guarantee maximum hygiene.</span>
            </li>
          </ul>
        )
      },
      "microbiologically": {
        title: "Microbiologically",
        icon: "biotech",
        content: (
          <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Standard Compliance:</strong> Total Plate Count (TPC) &lt; 100,000 cfu/g. Yeast &amp; Mold &lt; 100 cfu/g.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Pathogen Free:</strong> Certified E. coli and Salmonella Negative per individual batch.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Sterilization:</strong> Optional Steam-Sterilization (highly recommended for EU food safety standards) or Irradiation treatments.</span>
            </li>
          </ul>
        )
      },
      "moisture-content": {
        title: "Moisture Content",
        icon: "opacity",
        content: (
          <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Standard Limit:</strong> {defaultMoisture}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`material-symbols-outlined text-sm mt-0.5 ${theme.accentText}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Shelf Life:</strong> 12 - 24 months from manufacture date if stored in standard cool, dry warehouse conditions.</span>
            </li>
          </ul>
        )
      }
    };
  };

  const specs = getSpecs(selectedProduct);
  const viewTitle = selectedProduct ? selectedProduct.name : categoryTitle;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="light" />

      <main className="flex-grow bg-warm-cream">
        {/* Header Banner Wrapper */}
        <div className="relative w-full">
          {/* Background Banner with theme color */}
          <div className={`${theme.banner} h-[130px] relative w-full shadow-md flex justify-center items-end`}>
            <div className="absolute inset-0 bg-black/10 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/15 to-transparent opacity-30 z-0"></div>
          </div>
          
          {/* Centered White Card Block with Theme Border */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-stark-white px-12 py-5.5 shadow-[0_10px_30px_-5px_rgba(13,27,42,0.15)] border rounded-[8px] min-w-[290px] md:min-w-[440px] text-center z-20 ${theme.accentBorder}`}>
            <span className={`font-label-caps text-[9px] font-bold tracking-widest uppercase mb-1 block ${theme.accentText}`}>
              Europa Foods Catalog
            </span>
            <h1 className="font-display-lg text-deep-navy font-bold text-lg md:text-xl uppercase tracking-wider">
              {viewTitle}
            </h1>
          </div>
        </div>

        {/* Height spacer for centered title card */}
        <div className="h-16 bg-warm-cream"></div>

        {/* Dynamic Inner Catalog Area */}
        <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          
          {/* Breadcrumb Menu */}
          <nav className="mb-8 font-body-md text-[11px] text-on-surface-variant flex items-center gap-2 flex-wrap bg-stark-white px-4 py-2.5 rounded-lg border border-outline-variant/10 shadow-sm w-fit">
            <Link href="/products" className="hover:text-deep-navy transition-all hover:underline">Products</Link>
            <span className="text-slate-400">/</span>
            {selectedProduct ? (
              <>
                <button onClick={handleBackToGrid} className="hover:text-deep-navy transition-all hover:underline cursor-pointer">{categoryTitle}</button>
                <span className="text-slate-400">/</span>
                <span className={`font-bold ${theme.accentText}`}>{selectedProduct.name}</span>
              </>
            ) : (
              <span className={`font-bold ${theme.accentText}`}>{categoryTitle}</span>
            )}
          </nav>

          {/* 1. GRID LISTING VIEW (When no product is selected) */}
          {!selectedProduct && (
            <div className="animate-fade-in">
              {/* Tab Selection Menu (Only visible in Grid mode) */}
              <div className="bg-stark-white py-4 px-6 border border-outline-variant/10 rounded-2xl flex gap-8 justify-center overflow-x-auto whitespace-nowrap scrollbar-none mb-12 shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`font-body-md text-xs font-bold tracking-wider cursor-pointer pb-2 border-b-2 transition-all duration-300 uppercase ${
                      activeTab === tab
                        ? `${theme.accentText} ${theme.accentBorder} scale-105`
                        : "text-on-surface-variant border-transparent hover:text-deep-navy"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {filteredProducts.map((product, idx) => (
                  <div
                    key={product.name + "-" + idx}
                    onClick={() => handleProductSelect(product)}
                    className="group bg-stark-white border border-outline-variant/10 rounded-2xl p-5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_-8px_rgba(0,0,0,0.06)] hover:border-[#2e7d32]/0 transition-all duration-500 cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1"
                    style={{ borderColor: activeTab === product.tag ? "var(--color-outline-variant)" : "" }}
                  >
                    <div className="aspect-square w-full overflow-hidden bg-warm-cream rounded-xl mb-4 relative flex items-center justify-center border border-outline-variant/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-headline-md text-sm text-deep-navy font-bold group-hover:text-deep-navy transition-colors uppercase tracking-wider mb-2">
                      {product.name}
                    </h3>
                    <span className={`text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 ${theme.accentText}`}>
                      Specs Sheet <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </span>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <p className="text-center text-on-surface-variant font-body-md py-12">
                  No products found in this category.
                </p>
              )}
            </div>
          )}

          {/* 2. DETAIL PRODUCT VIEW (When a product is selected) */}
          {selectedProduct && (
            <div className="animate-fade-in">
              {/* Back Button */}
              <button
                onClick={handleBackToGrid}
                className={`inline-flex items-center font-semibold transition-colors text-xs font-label-caps tracking-wider mb-8 cursor-pointer group ${theme.accentText}`}
              >
                <span className="material-symbols-outlined mr-2 text-sm transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to {categoryTitle}
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left Column: Product Image & Description */}
                <div className="space-y-6 lg:sticky lg:top-32">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-stark-white border border-outline-variant/15 rounded-2xl shadow-md relative group">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 text-stark-white font-label-caps text-[9px] tracking-wider font-bold py-1.5 px-3.5 rounded-full shadow-md backdrop-blur-sm border border-white/10 ${theme.banner}`}>
                      Premium Export Grade
                    </div>
                  </div>
                  
                  {/* Description Card */}
                  <div className="bg-stark-white border border-outline-variant/10 p-6 rounded-2xl shadow-sm relative">
                    <div className={`absolute top-0 left-6 w-8 h-1 rounded-b ${theme.banner}`}></div>
                    <p className="text-slate-600 font-body-md text-sm leading-relaxed text-justify">
                      {selectedProduct.description || "Our premium grade export food ingredients are manufactured under strict hygienic and quality standards, conforming to food safety regulations worldwide."}
                    </p>
                  </div>
                </div>

                {/* Right Column: Title & Accordion Specs */}
                <div className="space-y-8">
                  <div>
                    <span className={`block font-label-caps text-xs tracking-wider uppercase mb-1.5 font-bold ${theme.accentText}`}>
                      {categoryTitle}
                    </span>
                    <h2 className="font-display-lg text-3xl md:text-4xl font-bold text-deep-navy pb-3">
                      {selectedProduct.name}
                    </h2>
                    <div className={`w-16 h-1 rounded-full ${theme.banner}`}></div>
                  </div>

                  {/* Refined Accordion List */}
                  <div className="border border-outline-variant/10 rounded-2xl overflow-hidden bg-stark-white shadow-sm divide-y divide-outline-variant/10">
                    {Object.entries(specs).map(([key, item]) => {
                      const isOpen = activeAccordion === key;
                      return (
                        <div key={key} className={`transition-colors duration-300 ${isOpen ? 'bg-slate-50/50' : ''}`}>
                          <button
                            onClick={() => setActiveAccordion(isOpen ? "" : key)}
                            className="w-full py-4.5 px-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`material-symbols-outlined text-xl ${theme.accentText}`}>{item.icon}</span>
                              <span className="font-body-md font-bold text-sm text-deep-navy">{item.title}:</span>
                            </div>
                            <span 
                              className={`material-symbols-outlined transition-transform duration-300 ${theme.accentText}`}
                              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                              keyboard_arrow_down
                            </span>
                          </button>
                          {isOpen && (
                            <div className="pb-5 px-6 animate-fade-in">
                              {item.content}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Premium WhatsApp Inquiry Button */}
                  <a
                    href={`https://wa.me/917041226666?text=Hello,%20I%20am%20interested%20in%20sourcing%20${encodeURIComponent(selectedProduct.name)}%20(${encodeURIComponent(categoryTitle)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center text-stark-white py-4 px-6 font-label-caps text-xs tracking-wider transition-all duration-300 font-bold block rounded-xl shadow-md hover:shadow-lg uppercase flex items-center justify-center gap-2 transform hover:-translate-y-0.5 ${theme.banner} hover:opacity-95`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.93 9.93 0 004.933 1.328h.005c5.505 0 9.987-4.478 9.988-9.985A9.99 9.99 0 0012.012 2zm5.79 14.1c-.244.686-1.218 1.25-1.677 1.295-.455.045-.9-.12-2.887-.9-2.544-1.002-4.183-3.565-4.31-3.733-.127-.167-1.026-1.353-1.026-2.58 0-1.227.647-1.83.878-2.077.23-.247.502-.31.67-.31.168 0 .335.006.48.013.15.007.35-.03.55.45.2.492.686 1.657.747 1.782.062.124.103.268.02.434-.082.165-.124.268-.247.412-.124.145-.26.323-.372.433-.124.124-.253.258-.108.506.144.247.643 1.05 1.38 1.702.95.842 1.748 1.103 1.996 1.227.247.124.392.103.536-.062.144-.165.62-.722.784-.968.165-.247.33-.206.556-.124.227.082 1.442.68 1.69.799.248.12.412.18.474.288.062.11.062.632-.182 1.318z"/>
                    </svg>
                    Inquire Specs via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function CategoryPageTemplate(props) {
  const defaultTheme = {
    banner: "bg-gradient-to-r from-emerald-900 to-green-800",
    accentText: "text-[#2E7D32]",
    accentBorder: "border-[#2E7D32]",
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

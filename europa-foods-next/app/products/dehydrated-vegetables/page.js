"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const categoriesData = {
  "white-onion": {
    id: "white-onion",
    name: "Dehydrated White Onion",
    categoryLabel: "DEHYDRATED WHITE ONION",
    image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20WHITE%20ONION/Dehydrated%20White%20onion%20-%20CATEGORY%20IMAGE.jpeg",
    subproducts: [
      {
        id: "white-onion-powder",
        name: "White Onion Powder",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20WHITE%20ONION/White%20Onion%20Powder.jpeg",
        description: "Generally, these Dehydrated White Onions Powder available in standard size of 80-100 mash and 100-120 mash with A, B and Commercial Grades. Our products are assured to be unwanted burnt particles, also free from impurities and foreign materials.",
        customSpecs: {
          packingSize: "Two poly bag of 20/25 kgs net covered with Russian paper bag, Box Or aluminium foil packing on request",
          loadingCapacity: "For Onion powder 14 MT in 20ft FCL & for 40ft FCL 27.5 MT (+/- 10%)",
          quality: {
            color: "Light Creamish White",
            odor: "Fresh without Mild or Light Odors",
            flavor: "Pure & Pronounced. Not Hot, Typical of Onion with sweet test"
          },
          microbiologically: [
            "Standard quality",
            "Low Bacterial quality",
            "Extra Low bacterial quality"
          ],
          moistureContent: [
            "<5.0% Maximum",
            "<3.3% Maximum (for Toasted)"
          ]
        }
      },
      {
        id: "white-onion-granules",
        name: "White Onion Granules",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20WHITE%20ONION/White%20Onion%20Granules.jpeg",
        description: "Generally, these Dehydrated White Onion Granules are processed under hygienic conditions. Available in A, B and Commercial Grades, ideal for seasonings, salad dressings, and processed food mixes.",
        customSpecs: {
          packingSize: "Two poly bag of 20/25 kgs net covered with Russian paper bag, Box Or aluminium foil packing on request",
          loadingCapacity: "For Onion granules 14 MT in 20ft FCL & for 40ft FCL 27.5 MT (+/- 10%)",
          quality: {
            color: "Light Creamish White",
            odor: "Fresh without Mild or Light Odors",
            flavor: "Pure & Pronounced. Not Hot, Typical of Onion with sweet test"
          },
          microbiologically: [
            "Standard quality",
            "Extra Low Bacterial quality"
          ],
          moistureContent: [
            "<5.0% Maximum"
          ]
        }
      },
      {
        id: "white-onion-minced",
        name: "White Onion Minced",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20WHITE%20ONION/White%20Onion%20Minced.jpeg",
        description: "Generally, these Dehydrated White Onion Minced are prepared from fresh onion bulbs. Available in A, B and Commercial Grades. Excellent for adding texture and flavor to soups and sauces.",
        customSpecs: {
          packingSize: "Two poly bag of 20/25 kgs net covered with Russian paper bag, Box Or aluminium foil packing on request",
          loadingCapacity: "For Onion minced 12 MT in 20ft FCL & for 40ft FCL 24 MT (+/- 10%)",
          quality: {
            color: "Light Creamish White",
            odor: "Fresh without Mild or Light Odors",
            flavor: "Pure & Pronounced. Not Hot, Typical of Onion with sweet test"
          },
          microbiologically: [
            "Standard quality",
            "Extra Low Bacterial quality"
          ],
          moistureContent: [
            "<5.0% Maximum"
          ]
        }
      },
      {
        id: "white-onion-chopped",
        name: "White Onion Chopped",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20WHITE%20ONION/White%20Onion%20Chopped.jpeg",
        description: "Generally, these Dehydrated White Onion Chopped are free-flowing and sorted. Available in A, B and Commercial Grades. Used extensively in ready-to-eat foods, canned items, and dry soup mixes.",
        customSpecs: {
          packingSize: "Two poly bag of 20/25 kgs net covered with Russian paper bag OR Box",
          loadingCapacity: "For Onion chopped 10 MT in 20ft FCL & for 40ft FCL 20MT (+/- 10%)",
          quality: {
            color: "Light Creamish White",
            odor: "Fresh without Mild or Light Odors",
            flavor: "Pure & Pronounced. Not Hot, Typical of Onion with sweet test"
          },
          microbiologically: [
            "Standard quality",
            "Low Bacterial Quality",
            "Extra Low Bacterial quality"
          ],
          moistureContent: [
            "<6.0% Maximum",
            "<3.3% Maximum (for Toasted)"
          ]
        }
      },
      {
        id: "white-onion-flakes-kibbled",
        name: "White Onion Flakes / Kibbled",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20WHITE%20ONION/White%20Onion%20Kibbled.jpeg",
        description: "Generally, these Dehydrated White Onion Flakes / Kibbled are made from sound, mature white onions. Available in A, B and Commercial Grades, ideal for industrial food preparation and reconstitution.",
        customSpecs: {
          packingSize: "Poly bag of 14/12 kgs net covered with Russian paper bag",
          loadingCapacity: "For Onion kibbled/flakes 7.5 MT in 20ft FCL & for 40ft FCL 17 MT (+/- 10%)",
          quality: {
            color: "White",
            odor: "Fresh without Mild or Light Odors",
            flavor: "Pure & Pronounced. Not Hot, Typical of Onion with sweet test"
          },
          microbiologically: [
            "Standard quality",
            "Low Bacterial Quality",
            "Extra Low Bacterial quality"
          ],
          moistureContent: [
            "<6.0% Maximum",
            "<3.3% Maximum (for Toasted)"
          ]
        }
      }
    ]
  },
  "red-onion": {
    id: "red-onion",
    name: "Dehydrated Red Onion",
    categoryLabel: "DEHYDRATED RED ONION",
    image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20RED%20ONION/Dehydrated%20Red%20onion%20-%20CATEGORY%20IMAGE.jpeg",
    subproducts: [
      {
        id: "red-onion-powder",
        name: "Red Onion Powder",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20RED%20ONION/Red%20Onion%20Powder.jpeg",
        description: "Generally, these Dehydrated Red Onions Powder are processed to retain the pungent flavor and rich color of red onions. Available in A, B and Commercial Grades. Perfect for dry rubs, sauces, and seasoning mixes.",
        loadingCapacity: "15 - 17 MT in 20ft container, and up to 25 MT in 40ft container."
      },
      {
        id: "red-onion-granules",
        name: "Red Onion Granules",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20RED%20ONION/Red%20Onion%20Granules.jpeg",
        description: "Generally, these Dehydrated Red Onion Granules are manufactured under strict hygiene standards. Available in A, B and Commercial Grades, offering uniform size and color for gourmet spice blends.",
        loadingCapacity: "15 - 17 MT in 20ft container, and up to 25 MT in 40ft container."
      },
      {
        id: "red-onion-minced",
        name: "Red Onion Minced",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20RED%20ONION/Red%20Onion%20Minced.jpeg",
        description: "Generally, these Dehydrated Red Onion Minced are dried to keep their essential oils intact. Available in A, B and Commercial Grades, providing a sweet-sharp flavor to culinary products.",
        loadingCapacity: "13 - 14 MT in 20ft container."
      },
      {
        id: "red-onion-chopped",
        name: "Red Onion Chopped",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20RED%20ONION/Red%20Onion%20Chopped.jpeg",
        description: "Generally, these Dehydrated Red Onion Chopped are perfect for bulk food manufacturers. Available in A, B and Commercial Grades. Excellent reconstitution properties for instant food items.",
        loadingCapacity: "13 - 14 MT in 20ft container."
      },
      {
        id: "red-onion-kibbled-flakes",
        name: "Red Onion Flakes / Kibbled",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20RED%20ONION/Red%20Onion%20%20Kibbled.jpeg",
        description: "Generally, these Dehydrated Red Onion Flakes / Kibbled are dried onion segments. Available in A, B and Commercial Grades. Sourced from choice crops for superior sweetness and spice.",
        loadingCapacity: "13 - 14 MT in 20ft container."
      }
    ]
  },
  "pink-onion": {
    id: "pink-onion",
    name: "Dehydrated Pink Onion",
    categoryLabel: "DEHYDRATED PINK ONION",
    image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20PINK%20ONION/Dehydrate%20pink%20onion%20-%20CATEGORY%20IMAGE.jpeg",
    subproducts: [
      {
        id: "pink-onion-powder",
        name: "Pink Onion Powder",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20PINK%20ONION/Pink%20Onion%20Powder.jpeg",
        description: "Generally, these Dehydrated Pink Onions Powder are processed from hand-selected pink onions. Available in A, B and Commercial Grades. Blends smoothly into batters, dry soups, and gravies.",
        loadingCapacity: "15 - 17 MT in 20ft container, and up to 25 MT in 40ft container."
      },
      {
        id: "pink-onion-granule",
        name: "Pink Onion Granules",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20PINK%20ONION/Pink%20Onion%20Granule.jpeg",
        description: "Generally, these Dehydrated Pink Onion Granules are clean and sortex quality. Available in A, B and Commercial Grades, popular in processed meats and canned food industries.",
        loadingCapacity: "15 - 17 MT in 20ft container, and up to 25 MT in 40ft container."
      },
      {
        id: "pink-onion-minced",
        name: "Pink Onion Minced",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20PINK%20ONION/Pink%20Onion%20Minced.jpeg",
        description: "Generally, these Dehydrated Pink Onion Minced are made under state-of-the-art dehydration standards. Available in A, B and Commercial Grades, adding mild sweet-onion taste to seasoning lines.",
        loadingCapacity: "13 - 14 MT in 20ft container."
      },
      {
        id: "pink-onion-chopped",
        name: "Pink Onion Chopped",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20PINK%20ONION/Pink%20Onion%20Chopped.jpeg",
        description: "Generally, these Dehydrated Pink Onion Chopped are ideal for salad dressings and pickle industries. Available in A, B and Commercial Grades. Assured zero foreign matter.",
        loadingCapacity: "13 - 14 MT in 20ft container."
      },
      {
        id: "pink-onion-kibble-flakes",
        name: "Pink Onion Flakes / Kibble",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20PINK%20ONION/Pink%20Onion%20Kibble.jpeg",
        description: "Generally, these Dehydrated Pink Onion Flakes / Kibble are dried pink onion slices. Available in A, B and Commercial Grades, preserving natural dietary fibers and flavor compounds.",
        loadingCapacity: "13 - 14 MT in 20ft container."
      }
    ]
  },
  "garlic": {
    id: "garlic",
    name: "Dehydrated Garlic",
    categoryLabel: "DEHYDRATED GARLIC",
    image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20GARLIC/Dehydrated%20garlic-%20CATEGORY%20IMAGE.jpeg",
    subproducts: [
      {
        id: "garlic-powder",
        name: "Garlic Powder",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20GARLIC/Garlic%20Powder.jpeg",
        description: "Generally, these Dehydrated Garlic Powder are made from sound cloves of garlic. Available in A, B and Commercial Grades, processed to retain the pungent flavor and sharp aroma essential in savory formulations.",
        loadingCapacity: "17 - 18 MT in 20ft container."
      },
      {
        id: "garlic-granules",
        name: "Garlic Granules",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20GARLIC/Garlic%20Granules.jpeg",
        description: "Generally, these Dehydrated Garlic Granules are processed under advanced systems. Available in A, B and Commercial Grades. Perfect for rubs, marinades, and garlic bread toppings.",
        loadingCapacity: "17 - 18 MT in 20ft container."
      },
      {
        id: "garlic-chopped",
        name: "Garlic Chopped",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20GARLIC/Garlic%20Chopped.jpeg",
        description: "Generally, these Dehydrated Garlic Chopped offer convenient kitchen prep for bulk food service. Available in A, B and Commercial Grades, adding fresh garlic texture and taste upon hydration.",
        loadingCapacity: "14 MT in 20ft container."
      },
      {
        id: "garlic-flakes",
        name: "Garlic Flakes",
        image: "/images/Product%20Images/Dehydrated%20Products/DEHYDRATED%20GARLIC/Garlic%20Flakes.jpeg",
        description: "Generally, these Dehydrated Garlic Flakes are peeled garlic cloves cut into uniform slices and dried. Available in A, B and Commercial Grades, ideal for pickling, stir-fry mixes, and spice blends.",
        loadingCapacity: "14 MT in 20ft container."
      }
    ]
  }
};

function DehydratedVegetablesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");
  const productParam = searchParams.get("product");

  const [activeAccordion, setActiveAccordion] = useState("packing-size");

  const updateUrl = (catId, prodId) => {
    const params = new URLSearchParams();
    if (catId) params.set("category", catId);
    if (prodId) params.set("product", prodId);
    router.push(`/products/dehydrated-vegetables?${params.toString()}`);
  };

  const handleCategoryClick = (catId) => {
    updateUrl(catId, null);
  };

  const handleProductClick = (prodId) => {
    updateUrl(categoryParam, prodId);
  };

  const handleBackToCategories = () => {
    updateUrl(null, null);
  };

  const handleBackToProducts = () => {
    updateUrl(categoryParam, null);
  };

  // Determine current view state based on query params
  let currentView = "categories";
  let selectedCategory = null;
  let selectedProduct = null;

  if (categoryParam && categoriesData[categoryParam]) {
    selectedCategory = categoriesData[categoryParam];
    currentView = "subproducts";

    if (productParam) {
      const match = selectedCategory.subproducts.find((p) => p.id === productParam);
      if (match) {
        selectedProduct = match;
        currentView = "detail";
      }
    }
  }

  // Determine the Title for the Header Card
  let viewTitle = "Dehydrated Products";
  if (currentView !== "categories" && selectedCategory) {
    viewTitle = selectedCategory.name;
  }

  // Define Structured Specifications for Detail Accordion
  const getAccordionDetails = (prod) => {
    if (!prod) return {};

    if (prod.customSpecs) {
      const cs = prod.customSpecs;
      return {
        "packing-size": {
          title: "Packing size",
          icon: "inventory_2",
          content: (
            <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>{cs.packingSize}</span>
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
                <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>{cs.loadingCapacity}</span>
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
                <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span><strong>Color:</strong> {cs.quality.color}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span><strong>Odor:</strong> {cs.quality.odor}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span><strong>Flavor:</strong> {cs.quality.flavor}</span>
              </li>
            </ul>
          )
        },
        "microbiologically": {
          title: "Microbiologically",
          icon: "biotech",
          content: (
            <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
              {cs.microbiologically.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        },
        "moisture-content": {
          title: "Moisture Content",
          icon: "opacity",
          content: (
            <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
              {cs.moistureContent.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }
      };
    }

    return {
      "packing-size": {
        title: "Packing size",
        icon: "inventory_2",
        content: (
          <ul className="space-y-3 text-slate-600 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Primary Barrier:</strong> Double food-grade high-density poly-bags to seal in aroma and prevent atmospheric moisture ingress.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Outer Protection:</strong> Packed securely in heavy-duty 20 kg or 25 kg net corrugated boxes, or multi-layer tough paper bags.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
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
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Net Loading Weight:</strong> {prod.loadingCapacity}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
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
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Grades Offered:</strong> Premium Export Grade A, B, and Commercial grades available.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Purity Standard:</strong> 100% natural crop. Absolutely zero fillers, artificial anti-caking agents, skin residues, or dark burnt particles.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
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
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Standard Compliance:</strong> Total Plate Count (TPC) &lt; 100,000 cfu/g. Yeast &amp; Mold &lt; 100 cfu/g.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Pathogen Free:</strong> Certified E. coli and Salmonella Negative per individual batch.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Treatment:</strong> Optional Steam-Sterilization (highly recommended for EU food safety standards) or Irradiation treatments.</span>
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
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Standard Limit:</strong> 6.0% Maximum (strictly controlled at 5.0% - 5.5% for international orders).</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#2E7D32] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span><strong>Shelf Life:</strong> 12 - 24 months from manufacture date if stored in standard cool, dry warehouse conditions.</span>
            </li>
          </ul>
        )
      }
    };
  };

  const specs = getAccordionDetails(selectedProduct);

  return (
    <div className="flex flex-col min-h-screen bg-warm-cream">
      <Navbar variant="light" />

      {/* Header Banner */}
      <div className="relative w-full">
        {/* Rich dark green gradient block */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-900 h-[140px] w-full relative shadow-md">
          {/* Subtle geometric light pattern overlay */}
          <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-white/10 to-transparent opacity-20 z-0"></div>
        </div>
        
        {/* Glassmorphic Centered Title Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-stark-white/95 backdrop-blur-md px-12 py-5.5 shadow-[0_10px_30px_-5px_rgba(13,27,42,0.15)] border border-[#2E7D32] min-w-[290px] md:min-w-[440px] text-center z-20 rounded-[8px]">
          <span className="block text-champagne-gold font-label-caps text-[9px] font-bold tracking-widest uppercase mb-1">
            Premium Ingredients
          </span>
          <h1 className="font-display-lg text-deep-navy font-bold text-lg md:text-xl uppercase tracking-wider">
            {viewTitle}
          </h1>
        </div>
      </div>

      {/* Spacer to compensate for absolute overlay */}
      <div className="h-16 bg-warm-cream"></div>

      <main className="flex-grow py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 font-body-md text-[11px] text-on-surface-variant flex items-center gap-2 flex-wrap bg-stark-white px-4 py-2.5 rounded-lg border border-outline-variant/10 shadow-sm w-fit">
          <Link href="/products" className="hover:text-[#2E7D32] hover:underline transition-all">Products</Link>
          <span className="text-slate-400">/</span>
          {currentView === "categories" ? (
            <span className="text-[#2E7D32] font-bold">Dehydrated Vegetables</span>
          ) : (
            <>
              <button onClick={handleBackToCategories} className="hover:text-[#2E7D32] hover:underline transition-all cursor-pointer">Dehydrated Vegetables</button>
              <span className="text-slate-400">/</span>
              {currentView === "subproducts" ? (
                <span className="text-[#2E7D32] font-bold">{selectedCategory.name}</span>
              ) : (
                <>
                  <button onClick={handleBackToProducts} className="hover:text-[#2E7D32] hover:underline transition-all cursor-pointer">{selectedCategory.name}</button>
                  <span className="text-slate-400">/</span>
                  <span className="text-[#2E7D32] font-bold">{selectedProduct.name}</span>
                </>
              )}
            </>
          )}
        </nav>

        {/* 1. CATEGORIES VIEW (Image 1 style) */}
        {currentView === "categories" && (
          <div className="animate-fade-in pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.values(categoriesData).map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="group bg-stark-white border border-outline-variant/10 rounded-2xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-12px_rgba(46,125,50,0.18)] transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Thick premium green block at the bottom */}
                  <div className="bg-[#2E7D32] py-5 text-center transition-colors duration-500 group-hover:bg-[#1C5F24]">
                    <h2 className="font-label-caps text-xs font-bold text-stark-white tracking-widest uppercase">
                      {cat.categoryLabel}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. SUB-PRODUCTS VIEW (Image 2 style) */}
        {currentView === "subproducts" && (
          <div className="animate-fade-in pb-16">
            {/* Back Button */}
            <button
              onClick={handleBackToCategories}
              className="inline-flex items-center text-[#2E7D32] font-semibold hover:text-deep-navy transition-colors text-xs font-label-caps tracking-wider mb-8 cursor-pointer group"
            >
              <span className="material-symbols-outlined mr-2 text-sm transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Categories
            </button>

            {/* Grid of sub-products */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {selectedCategory.subproducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleProductClick(prod.id)}
                  className="group bg-stark-white border border-outline-variant/10 rounded-2xl p-5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_-8px_rgba(0,0,0,0.06)] hover:border-[#2E7D32]/30 transition-all duration-500 cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1"
                >
                  <div className="aspect-square w-full overflow-hidden bg-warm-cream rounded-xl mb-4 relative flex items-center justify-center border border-outline-variant/5">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-headline-md text-sm text-deep-navy font-bold group-hover:text-[#2E7D32] transition-colors uppercase tracking-wider mb-2">
                    {prod.name}
                  </h3>
                  <span className="text-[10px] text-[#2E7D32] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Specs Sheet <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. DETAIL VIEW (Image 3 style) */}
        {currentView === "detail" && (
          <div className="animate-fade-in pb-16">
            {/* Back Button */}
            <button
              onClick={handleBackToProducts}
              className="inline-flex items-center text-[#2E7D32] font-semibold hover:text-deep-navy transition-colors text-xs font-label-caps tracking-wider mb-8 cursor-pointer group"
            >
              <span className="material-symbols-outlined mr-2 text-sm transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to {selectedCategory.name}
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
                  <div className="absolute top-4 left-4 bg-[#2E7D32]/90 text-stark-white font-label-caps text-[9px] tracking-wider font-bold py-1.5 px-3.5 rounded-full shadow-md backdrop-blur-sm border border-emerald-500/20">
                    Premium Export Grade
                  </div>
                </div>
                
                {/* Description Card */}
                <div className="bg-stark-white border border-outline-variant/10 p-6 rounded-2xl shadow-sm relative">
                  <div className="absolute top-0 left-6 w-8 h-1 bg-[#2E7D32] rounded-b"></div>
                  <p className="text-slate-600 font-body-md text-sm leading-relaxed text-justify">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Title & Accordion Specs */}
              <div className="space-y-8">
                <div>
                  <span className="block text-champagne-gold font-label-caps text-xs tracking-wider uppercase mb-1.5 font-bold">
                    {selectedCategory.name}
                  </span>
                  <h2 className="font-display-lg text-3xl md:text-4xl font-bold text-deep-navy pb-3">
                    {selectedProduct.name}
                  </h2>
                  <div className="w-16 h-1 bg-[#2E7D32] rounded-full"></div>
                </div>

                {/* Refined Accordion List */}
                <div className="border border-outline-variant/10 rounded-2xl overflow-hidden bg-stark-white shadow-sm divide-y divide-outline-variant/10">
                  {Object.entries(specs).map(([key, item]) => {
                    const isOpen = activeAccordion === key;
                    return (
                      <div key={key} className={`transition-colors duration-300 ${isOpen ? 'bg-[#2E7D32]/5' : ''}`}>
                        <button
                          onClick={() => setActiveAccordion(isOpen ? "" : key)}
                          className="w-full py-4.5 px-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#2E7D32] text-xl">{item.icon}</span>
                            <span className="font-body-md font-bold text-sm text-deep-navy">{item.title}:</span>
                          </div>
                          <span 
                            className="material-symbols-outlined text-[#2E7D32] transition-transform duration-300"
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
                  href={`https://wa.me/917041226666?text=Hello,%20I%20am%20interested%20in%20sourcing%20${encodeURIComponent(selectedProduct.name)}%20(${encodeURIComponent(selectedCategory.name)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#14532D] text-stark-white py-4 px-6 font-label-caps text-xs tracking-wider transition-all duration-300 font-bold block rounded-xl shadow-md hover:shadow-lg uppercase flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function DehydratedVegetablesPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-warm-cream justify-center items-center">
        <div className="font-body-md text-deep-navy font-semibold">Loading Catalog...</div>
      </div>
    }>
      <DehydratedVegetablesContent />
    </Suspense>
  );
}

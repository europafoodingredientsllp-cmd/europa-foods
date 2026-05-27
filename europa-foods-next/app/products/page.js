import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Products - Europa Foods",
  description: "Explore our premium catalog of dehydrated vegetables and Indian spices. Exceptional quality for the global market.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px]">
        <img
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Vq2Cg3PjCgY3G_d6Zp2W3B6Z_3N3U7M6p_1Q8uU4S3I0V0I0N2H4H5D1N5R8H5O1H9Q1U8Q9F4G2T9O0N5K4T7I0R5K6A8I6N0V4D7I7J6K4P6X8T0M0P6T8H6U2R7O8X2L5U3F7I1X9C4H9L5W0U8T8T0F5B4R5A9I7U4I9G0M0P5Y1I3P6P7O1W8N1I6C7"
          alt="Premium Spices Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        
        <header className="absolute inset-0 flex flex-col justify-end max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap-mobile md:pb-section-gap">
          <div className="max-w-3xl">
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-stark-white mb-6">
              Our Premium <br />
              <span className="text-champagne-gold">Product Catalog</span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
              Explore our comprehensive selection of high-end export agricultural goods. From vibrant dehydrated vegetables to aromatic Indian spices and pristine organic herbs, every product meets rigorous European standards for unmatched quality.
            </p>
          </div>
        </header>
      </div>

      <main className="bg-warm-cream">
        {/* Dehydrated Vegetables Section */}
        <section className="py-section-gap-mobile md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-4">Dehydrated Vegetables</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Preserved at the peak of freshness to retain robust flavor profiles, vibrant colors, and essential nutritional integrity for culinary and industrial applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Product Card 1 */}
            <article className="group bg-stark-white border border-deep-navy/10 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img alt="Dehydrated Red Onions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxtPSmBf04nHuslPDoGosYPSd_zYahJEEZIT51waz8_vbuYxxaY3kxBZd7AI2CQj3x4SOXeoLiOEAaLpEUMdBT12LJKjbKzV1m-rFATAuryayIK5FyrGnTddNEIqFt5W7hlXFQMIfeobHDlYIy4T86-ZgO7a8phPfAwtl5ImtuxYH8NpBdqBfqIReivsivennQrAdACd2wroF0AdzGmBmlfiydwozD3TucSwJAdzFJ8q-nhK2uVBXy4aT5rgUncDHaDLta0DAypMxn"/>
                <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-stark-white/90 backdrop-blur px-3 py-1 font-label-caps text-label-caps text-deep-navy uppercase">Premium Grade</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Red Onion Flakes</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Rich, pungent aroma and deep color profile. Sourced from optimal winter crops for maximum flavor retention.</p>
                <div className="border-t border-deep-navy/10 pt-4 mb-6">
                  <ul className="space-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    <li className="flex justify-between"><span>Origin:</span> <span className="text-deep-navy font-semibold">India</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="text-deep-navy font-semibold">14kg / 20kg Cartons</span></li>
                    <li className="flex justify-between"><span>Moisture:</span> <span className="text-deep-navy font-semibold">&lt; 6% Max</span></li>
                  </ul>
                </div>
                <button className="w-full border border-deep-navy text-deep-navy font-label-caps text-label-caps px-4 py-3 uppercase tracking-wider hover:bg-deep-navy hover:text-stark-white transition-colors">
                  Request Specs
                </button>
              </div>
            </article>

            {/* Product Card 2 */}
            <article className="group bg-stark-white border border-deep-navy/10 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img alt="Dehydrated Garlic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQgzVxSij57cU0Q_xo5G_9FjL-A6FwMp3doFgTJocdnRKvacya93jfPGSm3KP7gP6KlMmKe5xK0ft7sTLAvKvzgGXg8E1FiS3b1uSYq5iCdnV-Ir59EqYzD7svpikQFTZS2OoJxx0COkgezoI7aJPQwfAyCnXqYep45zGi2vmVj8-9-PE2lRRJtVBXppI0MoLOWmrzsc4DElyyit0sjC8XMAn06PKtao_HazVJyf9xOb4_sXcxdKCbSc3uf0wJQasKVSvXCv5L2-da"/>
                <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Garlic Cloves &amp; Minced</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">A-Grade white garlic, carefully dehydrated to maintain its robust essential oils and sharp, authentic taste.</p>
                <div className="border-t border-deep-navy/10 pt-4 mb-6">
                  <ul className="space-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    <li className="flex justify-between"><span>Origin:</span> <span className="text-deep-navy font-semibold">India</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="text-deep-navy font-semibold">25kg Paper Bags</span></li>
                    <li className="flex justify-between"><span>Moisture:</span> <span className="text-deep-navy font-semibold">&lt; 6% Max</span></li>
                  </ul>
                </div>
                <button className="w-full border border-deep-navy text-deep-navy font-label-caps text-label-caps px-4 py-3 uppercase tracking-wider hover:bg-deep-navy hover:text-stark-white transition-colors">
                  Request Specs
                </button>
              </div>
            </article>

            {/* Product Card 3 */}
            <article className="group bg-stark-white border border-deep-navy/10 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img alt="Dehydrated Bell Peppers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe7lldeZj8kPY83LjrK-kTc3VQqkwVRFmc6vyFzbqQtyihDufPgORgjvfnmseJoysNBnTTyeK2XO6G9Vb06zi6X2Cd-zcUF3lUDMR6oRySUZhaljWlG3twCgvh6ksIQh4wA7XAGNXug-50LAmzM-gJD_ZchIi5uHmD_zUhFZqSByr-i6EX9arA0xv-K3ox0pcLkcT57j53iHSL7kiAUrOjvfICCyMpO_FpepDPYyAnMWrIy--2eU50CvJz3q1wDvfyp0y1sONsU0aB"/>
                <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Green Bell Pepper Dices</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Vibrantly colored bell pepper pieces with a sweet, concentrated flavor ideal for soups, sauces, and ready-meals.</p>
                <div className="border-t border-deep-navy/10 pt-4 mb-6">
                  <ul className="space-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    <li className="flex justify-between"><span>Origin:</span> <span className="text-deep-navy font-semibold">India</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="text-deep-navy font-semibold">10kg / 15kg Cartons</span></li>
                    <li className="flex justify-between"><span>Size:</span> <span className="text-deep-navy font-semibold">9x9 mm</span></li>
                  </ul>
                </div>
                <button className="w-full border border-deep-navy text-deep-navy font-label-caps text-label-caps px-4 py-3 uppercase tracking-wider hover:bg-deep-navy hover:text-stark-white transition-colors">
                  Request Specs
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Indian Spices Section */}
        <section className="py-section-gap-mobile md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-4">Indian Spices</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Sourced directly from generational farmers. Our whole and ground spices deliver intense aromatic compounds and unmatched purity for the discerning global market.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Product Card 1 */}
            <article className="group bg-stark-white border border-deep-navy/10 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img alt="Black Pepper" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7aqi6E7IALop0FlLNJCPXgecqydmFLGumG8dOYU_6deQcoBw2xHQb-P4d5g_qCmoimpFloIjBJcBvO6d_fCXSg4UfqQVnVmFz6DQqccBhJ96MzHVtcg2jHgO2XIjqqGGiYInBgc_Y_dU-T_-n50h2aW0FvrbDMpgKig3Wc-NcaJWdwnV22YLJIdcc7u_4zFWnFlEeyOD7kn4xD0m9tKePfUIv-0YSqRMQlcwx4xU77H5hJA4ij0fvGxbAC80hoDRYBFNvZeXysFSh"/>
                <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 bg-champagne-gold/90 backdrop-blur px-3 py-1 font-label-caps text-label-caps text-deep-navy uppercase">Best Seller</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Tellicherry Black Pepper</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">The world&apos;s finest black pepper, known for its large size, rich essential oils, and complex, warm heat profile.</p>
                <div className="border-t border-deep-navy/10 pt-4 mb-6">
                  <ul className="space-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    <li className="flex justify-between"><span>Grade:</span> <span className="text-deep-navy font-semibold">TGEB / TGSEB</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="text-deep-navy font-semibold">25kg PP Bags</span></li>
                    <li className="flex justify-between"><span>Density:</span> <span className="text-deep-navy font-semibold">550+ GL</span></li>
                  </ul>
                </div>
                <button className="w-full border border-deep-navy text-deep-navy font-label-caps text-label-caps px-4 py-3 uppercase tracking-wider hover:bg-deep-navy hover:text-stark-white transition-colors">
                  Request Specs
                </button>
              </div>
            </article>

            {/* Product Card 2 */}
            <article className="group bg-stark-white border border-deep-navy/10 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img alt="Turmeric Powder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhk9_26u4a4YOMhZpILWA2Bv-EIUPmJ7CmpBySU9TSfWlF0pmctAD5oSytlzG6o9FLVY0p64CmOQJMs8dtwJSuD-KJU2GXyA4N-wznJblOFKQ78Xn_9uYr6TG2jv8jApItugoPiGItBq6Aqt637ewZCr_3LL_guaVUQu2C8uBs_zDUPmBnGlTQiMCnP4HDmwbE7A-kE__DFfmeXdc7qwTEMOotEaKqQGmy8zAxeRbdLfjpmMJcful1an2M3cH3Nn2rP_Wl2hlUoroT"/>
                <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Alleppey Turmeric Fingers &amp; Powder</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Renowned for its exceptionally high curcumin content, offering a bright golden hue and a deep, earthy flavor.</p>
                <div className="border-t border-deep-navy/10 pt-4 mb-6">
                  <ul className="space-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    <li className="flex justify-between"><span>Curcumin:</span> <span className="text-deep-navy font-semibold">3% - 5%</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="text-deep-navy font-semibold">25kg Paper/PP Bags</span></li>
                    <li className="flex justify-between"><span>Form:</span> <span className="text-deep-navy font-semibold">Fingers / 60 Mesh Powder</span></li>
                  </ul>
                </div>
                <button className="w-full border border-deep-navy text-deep-navy font-label-caps text-label-caps px-4 py-3 uppercase tracking-wider hover:bg-deep-navy hover:text-stark-white transition-colors">
                  Request Specs
                </button>
              </div>
            </article>

            {/* Product Card 3 */}
            <article className="group bg-stark-white border border-deep-navy/10 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img alt="Cumin Seeds" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Vq2Cg3PjCgY3G_d6Zp2W3B6Z_3N3U7M6p_1Q8uU4S3I0V0I0N2H4H5D1N5R8H5O1H9Q1U8Q9F4G2T9O0N5K4T7I0R5K6A8I6N0V4D7I7J6K4P6X8T0M0P6T8H6U2R7O8X2L5U3F7I1X9C4H9L5W0U8T8T0F5B4R5A9I7U4I9G0M0P5Y1I3P6P7O1W8N1I6C7" />
                <div className="absolute inset-0 bg-deep-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Indian Cumin Seeds</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Distinctively warm and earthy, our cumin seeds are carefully cleaned and sorted to ensure zero foreign matter.</p>
                <div className="border-t border-deep-navy/10 pt-4 mb-6">
                  <ul className="space-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    <li className="flex justify-between"><span>Purity:</span> <span className="text-deep-navy font-semibold">99.5%</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="text-deep-navy font-semibold">25kg / 50kg Bags</span></li>
                    <li className="flex justify-between"><span>Type:</span> <span className="text-deep-navy font-semibold">Machine Cleaned / Sortex</span></li>
                  </ul>
                </div>
                <button className="w-full border border-deep-navy text-deep-navy font-label-caps text-label-caps px-4 py-3 uppercase tracking-wider hover:bg-deep-navy hover:text-stark-white transition-colors">
                  Request Specs
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

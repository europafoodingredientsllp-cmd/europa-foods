"use client";

import Link from "next/link";
import RevealSection from "@/components/RevealSection";

export default function HomeClient() {
  return (
    <>
      {/* HERO */}
      <header className="relative w-full min-h-screen flex items-center pt-20 pb-32 reveal active">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-navy/60 z-10"></div>
          <img alt="Premium dehydrated foods and spices" className="w-full h-full object-cover" src="/images/home.jpg" />
        </div>
        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-stark-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 bg-champagne-gold/10 border border-champagne-gold/30 rounded font-label-caps text-label-caps text-champagne-gold tracking-widest uppercase">
              TRUSTED BY BUYERS ACROSS 15+ COUNTRIES
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-6 text-stark-white leading-tight">
              Premium Dehydrated Foods &amp; Spices — Sourced From Nature, Delivered to the World
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-10 max-w-2xl">
              30+ years of expertise. Zero chemicals. International certifications. Built for global trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="bg-champagne-gold text-deep-navy font-body-md px-8 py-4 rounded font-semibold hover:bg-secondary-fixed transition-colors text-center"
                href="/products"
              >
                Explore Products
              </Link>
              <Link
                className="bg-transparent border border-stark-white text-stark-white font-body-md px-8 py-4 rounded hover:bg-stark-white/10 transition-colors text-center"
                href="/contact"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        {/* Floating Stats Card */}
        <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2 hidden md:block">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="bg-deep-navy/90 backdrop-blur-md border border-outline-variant/20 rounded p-8 flex justify-between items-center shadow-2xl">
              <div className="text-center px-8 border-r border-outline-variant/20 last:border-0 flex-1">
                <div className="font-stat-value text-stat-value text-champagne-gold mb-2">30+</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="text-center px-8 border-r border-outline-variant/20 last:border-0 flex-1">
                <div className="font-stat-value text-stat-value text-champagne-gold mb-2">15+</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest">Countries</div>
              </div>
              <div className="text-center px-8 border-r border-outline-variant/20 last:border-0 flex-1">
                <div className="font-stat-value text-stat-value text-champagne-gold mb-2">100%</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest">Chemical Free</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <RevealSection>
        <section className="py-section-gap-mobile md:py-section-gap bg-warm-cream relative z-10 md:mt-16">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <img alt="Editorial shot of premium spices" className="w-full h-auto object-cover rounded shadow-lg transition-transform duration-700 group-hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida/ADBb0uhAraeKxGAMpL8WBNzWBewniHayMdnFsRz_g9sBFGOSZZr0dcyRTv10auPNhiJ-QXai31Nlzk49BRx0K-bSf-5Nka6Y-PAzf9yv9nwTEMiJlQbXmrBraQs5BnGZ98SuTOxuoF5H2PhDkkmiB2G-l5bRgmg-ZcX9gAXoH0Q7y6uymhITZ5Ym2IbEQzkwlr8p6Qnm1gn806bNh-I-RtY6g455b2xoprhdveMIqHIq5y7bq7sb5-LKbD0VOKzj" />
                <div className="absolute inset-0 border border-deep-navy/10 rounded mix-blend-multiply pointer-events-none"></div>
              </div>
              <div>
                <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-8">Three Decades of Excellence</h2>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-champagne-gold mr-4 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-deep-navy">100% Pesticide Free</h3>
                      <p className="text-on-surface-variant mt-1">Sourced directly from certified organic farms.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-champagne-gold mr-4 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-deep-navy">Zero Sulphites/Chlorates</h3>
                      <p className="text-on-surface-variant mt-1">Pure, unadulterated natural ingredients.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-champagne-gold mr-4 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-deep-navy">FIFO Storage</h3>
                      <p className="text-on-surface-variant mt-1">First-In, First-Out inventory management for optimal freshness.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-champagne-gold mr-4 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <h3 className="font-body-lg text-body-lg font-semibold text-deep-navy">International Standards</h3>
                      <p className="text-on-surface-variant mt-1">Meeting rigorous global quality requirements.</p>
                    </div>
                  </li>
                </ul>
                <Link className="inline-flex items-center text-deep-navy font-semibold hover:text-champagne-gold transition-colors font-body-lg text-body-lg group" href="/about">
                  Discover Our Story
                  <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* STATS BANNER (Mobile only) */}
      <RevealSection>
        <section className="bg-deep-navy py-16 md:hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="font-stat-value text-stat-value text-champagne-gold mb-1">30+</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase">Years</div>
              </div>
              <div>
                <div className="font-stat-value text-stat-value text-champagne-gold mb-1">15+</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase">Countries</div>
              </div>
              <div>
                <div className="font-stat-value text-stat-value text-champagne-gold mb-1">5</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase">Categories</div>
              </div>
              <div>
                <div className="font-stat-value text-stat-value text-champagne-gold mb-1">100%</div>
                <div className="font-label-caps text-label-caps text-surface-variant uppercase">Pure</div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* PRODUCTS */}
      <RevealSection>
        <section className="py-section-gap-mobile md:py-section-gap bg-stark-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-16 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <Link href="/products" className="group relative overflow-hidden rounded bg-warm-cream border border-outline-variant/20 aspect-[3/4] cursor-pointer block">
                <img alt="Dehydrated Vegetables" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uil-besbhI09R0u54Rrjs4Jl2F9PC6mz3mRI_Se8yj4fCrp6_xCZ8BWXDqiULbMaeopo0DIfQw69N9R7e91kVajgyOq9FKxM6fmnwJyX3nO_RYjfwj3DzCdgrTDU9iRBthHfYLYMFlY0wMsQIaMEOfJJ3jYMwQfiPfZrlpVpaHh1_kAv6ZAUazZSHoobMnhSAVesj-0GiYGsvdeMUZQWKhZhoHxsDa7tkT3YQ1EebPBRT3WXyPkzWq_XPzp" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-headline-md text-headline-md text-stark-white mb-2">Dehydrated Vegetables</h3>
                  <p className="text-surface-variant opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-body-md text-body-md">Premium quality dehydrated produce preserving essential nutrients and flavor.</p>
                </div>
              </Link>
              {/* Product 2 */}
              <Link href="/products" className="group relative overflow-hidden rounded bg-warm-cream border border-outline-variant/20 aspect-[3/4] cursor-pointer block">
                <div className="absolute inset-0 bg-black/10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uguNOfuDNq32MKnKBkK7RU5F34oz8zywm1sIf3dKGvU563icjg0RsSz5BqUFDf1wITfPMrosvY1GTblHbmLOWtgo99aZC2HIdEnRMYHqh7nBo2FBZjzVhhJr8sZLkILcZ3j1ToZ5XwGp8gTY67a4KjLqFECHPuG1fOO3ROPFiEOynF69QWjI9oaNtllytupLFf7uVEvgpnpMF6GWHVVckmdLHUSFmoZDNiNShg0t6E5HzVhWsXEVbg6Dok4')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-headline-md text-headline-md text-stark-white mb-2">Indian Spices</h3>
                  <p className="text-surface-variant opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-body-md text-body-md">Authentic, aromatic spices sourced from the finest Indian regions.</p>
                </div>
              </Link>
              {/* Product 3 */}
              <Link href="/products" className="group relative overflow-hidden rounded bg-warm-cream border border-outline-variant/20 aspect-[3/4] cursor-pointer block">
                <div className="absolute inset-0 bg-black/10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uiArWmXunhhWSivbaoZEPzpXxyu9nlte5plX6OPqMEgfSQgabbfEd30Uo7iMQ2anz-YsCcb-QQ5Ngoqbwb2CyN289W0d_seVjm0Gs8W1o5yemqJmBWww9V7pNoyfrM8gJGK7dGj6wDUc9sxSuX2HwLfQ5iSqobrH2rdTiflOVC5e7T04QTJPHS3dQyz8WRWLF_DnUl_3A7R913FVthB_faSD2FTStSuQby1Oe1c_bxsjxkGbGYoVDzc-fA')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-headline-md text-headline-md text-stark-white mb-2">Organic Spices</h3>
                  <p className="text-surface-variant opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-body-md text-body-md">Certified organic spices for purity and exceptional taste.</p>
                </div>
              </Link>
              {/* Product 4 */}
              <Link href="/products" className="group relative overflow-hidden rounded bg-warm-cream border border-outline-variant/20 aspect-[3/4] cursor-pointer lg:col-span-1 lg:col-start-2 block">
                <img alt="Organic Herbs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0ugPMKmH4fZucdu2olkuoAJXo_U18zftHu0_cGHRtp1qFT4VuJbENEjfqcPEfZ5HzKwH7sA2QtJgt0naF2tpp_LKqv_J3GS8fsgLQA09TUP-0NOPZ0vA95hPaLZEZ4uy77vNpeMpw1Gcw-ion-N6acRixIPvvkOWyPuJSSoOx3qeyuArazHGqr-OGdNTG4w92gA-UbxKZZFuZEle6u-Oz0MIjzst0pqP7KRL9t-A_06hPdtRcYAPbJfpveI" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-headline-md text-headline-md text-stark-white mb-2">Organic Herbs</h3>
                  <p className="text-surface-variant opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-body-md text-body-md">Carefully harvested organic herbs offering natural freshness.</p>
                </div>
              </Link>
              {/* Product 5 */}
              <Link href="/products" className="group relative overflow-hidden rounded bg-warm-cream border border-outline-variant/20 aspect-[3/4] cursor-pointer lg:col-span-1 block">
                <img alt="Spray Dried Powders" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uho1ekKhk5bhleRjiyq8-hwMDm5Io4I6x1DMYwi88EUiSSJpRomHpEEJF-gDiv7zacZNMfXRpbfmaOkVi9IHB55sQ-MCsD1l8EW7_tIf1CwwSyUHbbrccEMoRkIKolMwmJuMLe9StD3u1Z-kpBPVw5jlh7ksKvqbbo7ufcSoTwW30WEzqgHn3ejxCPiUXn74swCqVZmE0wnNwqznuu1OxAx6-6ib3HBkVk_T7hydXuzD-38NgLYlPKLpnY" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-headline-md text-headline-md text-stark-white mb-2">Spray Dried Powders</h3>
                  <p className="text-surface-variant opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-body-md text-body-md">High-quality soluble powders for versatile food applications.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* QUALITY */}
      <RevealSection>
        <section className="py-section-gap-mobile md:py-section-gap bg-deep-navy text-stark-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 mb-6 border border-champagne-gold/30 rounded font-label-caps text-label-caps text-champagne-gold tracking-widest uppercase">
                  Our Promise
                </div>
                <h2 className="font-headline-xl text-headline-xl mb-8">Quality Is Not a Feature — It&apos;s Our Foundation</h2>
                <p className="font-body-lg text-body-lg text-surface-variant mb-10">We adhere to the strictest global standards to ensure every batch meets your exact specifications.</p>
              </div>
              <div className="space-y-8">
                <div className="bg-surface-tint/10 p-8 rounded border border-outline-variant/10 hover:border-champagne-gold/50 transition-colors">
                  <h3 className="font-headline-md text-headline-md text-champagne-gold mb-3 flex items-center">
                    <span className="material-symbols-outlined mr-3">manage_search</span> Traceability
                  </h3>
                  <p className="text-surface-variant font-body-md text-body-md">Complete transparency from farm to facility, ensuring every product can be traced back to its origin.</p>
                </div>
                <div className="bg-surface-tint/10 p-8 rounded border border-outline-variant/10 hover:border-champagne-gold/50 transition-colors">
                  <h3 className="font-headline-md text-headline-md text-champagne-gold mb-3 flex items-center">
                    <span className="material-symbols-outlined mr-3">science</span> Lab-Tested
                  </h3>
                  <p className="text-surface-variant font-body-md text-body-md">Rigorous analytical testing for purity, microbiological safety, and chemical residues.</p>
                </div>
                <div className="bg-surface-tint/10 p-8 rounded border border-outline-variant/10 hover:border-champagne-gold/50 transition-colors">
                  <h3 className="font-headline-md text-headline-md text-champagne-gold mb-3 flex items-center">
                    <span className="material-symbols-outlined mr-3">ac_unit</span> Cold Chain / FIFO
                  </h3>
                  <p className="text-surface-variant font-body-md text-body-md">Strict temperature control and inventory management to preserve optimal quality and freshness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CERTIFICATIONS MARQUEE */}
      <RevealSection>
        <section className="py-12 bg-warm-cream border-b border-outline-variant/10 overflow-hidden">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            <div className="flex items-center justify-around w-1/2 px-4 space-x-16">
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">FDA Approved</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">FSSAI Certified</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">APEDA</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">Spices Board</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">IOPEPC</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">FIEO</span>
            </div>
            <div className="flex items-center justify-around w-1/2 px-4 space-x-16">
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">FDA Approved</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">FSSAI Certified</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">APEDA</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">Spices Board</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">IOPEPC</span>
              <span className="font-headline-md text-deep-navy/40 font-bold tracking-widest text-2xl uppercase">FIEO</span>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* GLOBAL FOOTPRINT */}
      <RevealSection>
        <section className="py-section-gap-mobile md:py-section-gap bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
            <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-4">Trusted by Companies and Entrepreneurs Throughout the World</h2>
            <p className="font-body-lg text-body-lg text-surface-variant mb-16 max-w-3xl mx-auto">Delivering premium quality dehydrated foods and spices to global markets with unwavering reliability.</p>
            <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-deep-navy/5 rounded-xl border border-outline-variant/20 overflow-hidden shadow-inner">
              <div className="absolute inset-0 opacity-30 bg-no-repeat bg-center bg-contain mix-blend-multiply" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')" }}></div>
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-champagne-gold rounded-full location-dot"></div>
              <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-champagne-gold rounded-full location-dot" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-champagne-gold rounded-full location-dot" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-[35%] left-[75%] w-3 h-3 bg-champagne-gold rounded-full location-dot" style={{ animationDelay: "0.2s" }}></div>
              <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-champagne-gold rounded-full location-dot" style={{ animationDelay: "0.8s" }}></div>
              <div className="absolute top-[70%] left-[30%] w-3 h-3 bg-champagne-gold rounded-full location-dot" style={{ animationDelay: "1.2s" }}></div>
              <div className="absolute top-[45%] left-[60%] w-3 h-3 bg-champagne-gold rounded-full location-dot" style={{ animationDelay: "0.6s" }}></div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <RevealSection>
        <section className="py-section-gap-mobile md:py-section-gap bg-deep-navy text-stark-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="font-headline-xl text-headline-xl mb-6">Ready to Source Premium Quality?</h2>
            <p className="font-body-lg text-body-lg text-surface-variant mb-10 max-w-2xl mx-auto">Let&apos;s discuss how we can meet your exact specifications. Our team is ready to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="bg-champagne-gold text-deep-navy font-body-md px-8 py-4 rounded font-semibold hover:bg-secondary-fixed transition-colors" href="/contact">
                Get in Touch
              </Link>
              <Link className="bg-transparent border border-stark-white text-stark-white font-body-md px-8 py-4 rounded hover:bg-stark-white/10 transition-colors" href="/products">
                View Products
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>
    </>
  );
}

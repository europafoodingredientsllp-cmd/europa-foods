import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Europa Foods - About Us",
  description: "Learn about Europa Foods, our 30-year legacy of quality, mission, timeline, and leadership team.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section: Editorial Spread */}
        <section className="relative w-full h-[819px] min-h-[600px] flex items-center max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile pt-12 md:pt-24 mb-section-gap-mobile md:mb-section-gap">
          <div className="w-full h-full relative border border-outline-variant/20 overflow-hidden bg-stark-white group">
            {/* Large Background Image */}
            <img
              src="/images/about.jpg"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              alt="Assorted premium dehydrated vegetables and spices"
            />
            {/* Deep Navy Gradient Overlay for legibility and cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-transparent"></div>
            {/* Content Alignment (Left Anchor) */}
            <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16">
              <span className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest mb-6 block">Our Heritage</span>
              <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-stark-white mb-6 leading-tight">
                30 Years of Uncompromising Quality.
              </h1>
              <p className="font-body-lg text-body-lg text-surface-container-high max-w-md">
                Pioneering the art of vegetable dehydration. We blend European agricultural heritage with cutting-edge technology to deliver ingredients of exceptional purity.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section (Minimalist Center) */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap border-y border-outline-variant/10 bg-stark-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-8 block">Our Mission</span>
            <p className="font-headline-lg text-headline-lg text-deep-navy leading-relaxed">
              &quot;To elevate global food manufacturing by supplying the finest, most rigorously quality-controlled dehydrated European produce, preserving nature&apos;s essence from field to facility.&quot;
            </p>
          </div>
        </section>

        {/* Our Journey (Timeline) - Asymmetric List */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap">
          <div className="flex flex-col md:flex-row gap-gutter">
            {/* Sticky Header Col */}
            <div className="w-full md:w-1/3 md:pr-12 md:sticky md:top-32 self-start mb-12 md:mb-0">
              <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-4">Our Journey</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A continuous pursuit of excellence across three decades. From a single regional facility to a global leader in premium dehydrated ingredients.
              </p>
            </div>
            {/* Timeline Col */}
            <div className="w-full md:w-2/3 relative">
              {/* Subtle connecting line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-outline-variant/20 hidden md:block"></div>
              <div className="space-y-16 md:pl-12">
                {/* Timeline Item */}
                <div className="relative">
                  <div className="absolute -left-[53px] top-2 w-2 h-2 bg-champagne-gold rounded-none hidden md:block"></div>
                  <h3 className="font-stat-value text-stat-value text-champagne-gold mb-2">1994</h3>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">The Foundation</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Europa Foods is established in the heart of the European agricultural belt, focusing initially on premium air-dried onions and garlic for regional markets.
                  </p>
                </div>
                {/* Timeline Item */}
                <div className="relative">
                  <div className="absolute -left-[53px] top-2 w-2 h-2 bg-champagne-gold rounded-none hidden md:block"></div>
                  <h3 className="font-stat-value text-stat-value text-champagne-gold mb-2">2005</h3>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Technological Leap</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Implementation of advanced closed-loop dehydration systems, significantly increasing yield while preserving superior flavor profiles and essential nutrients.
                  </p>
                </div>
                {/* Timeline Item */}
                <div className="relative">
                  <div className="absolute -left-[53px] top-2 w-2 h-2 bg-champagne-gold rounded-none hidden md:block"></div>
                  <h3 className="font-stat-value text-stat-value text-champagne-gold mb-2">2018</h3>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Global Expansion</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    Reaching 50+ countries. Establishing stringent, multi-tiered quality control protocols that set a new benchmark in the B2B ingredient sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Leadership (Bento Grid Style) */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap bg-stark-white border border-outline-variant/10 my-12">
          <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-12 text-center">The Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="group relative overflow-hidden bg-warm-cream border border-outline-variant/20 p-4">
              <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-surface-container">
                <img
                  alt="Mr. Deepak Joshi Portrait"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src="/images/Mr. Deepak Joshi.png"
                />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-headline-md text-deep-navy">Mr. Deepak Joshi</h3>
                <p className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest mt-1">Founder & Managing Partner</p>
              </div>
            </div>
            {/* Profile Card */}
            <div className="group relative overflow-hidden bg-warm-cream border border-outline-variant/20 p-4 md:mt-12">
              <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-surface-container">
                <img
                  alt="Mr. Soham Koradiya Portrait"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src="/images/Mr. Soham Koradiya.jpeg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-headline-md text-deep-navy">Mr. Soham Koradiya</h3>
                <p className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest mt-1">Managing Partner & COO</p>
              </div>
            </div>
            {/* Profile Card */}
            <div className="group relative overflow-hidden bg-warm-cream border border-outline-variant/20 p-4">
              <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-surface-container flex items-center justify-center border border-outline-variant/10">
                <span className="material-symbols-outlined text-deep-navy/30 text-8xl font-light">person</span>
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-headline-md text-deep-navy">Partner</h3>
                <p className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest mt-1">Head of Quality Assurance</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

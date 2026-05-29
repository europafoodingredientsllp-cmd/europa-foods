import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Achievements - Europa Foods",
  description: "Our legacy of excellence delivered across borders. Over 1.2M+ tons exported annually to 85+ markets.",
};

export default function AchievementsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-section-gap-mobile md:pb-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 pr-0 lg:pr-12">
              <p className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest mb-6">Our Legacy</p>
              <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-deep-navy mb-8 leading-tight">
                Excellence Delivered <br />Across Borders.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                For over decade, Europa Foods has established an uncompromising standard in global food export. Our achievements are measured not just in tonnage, but in the enduring partnerships we build across continents, delivering the essence of Indian culinary heritage to the world&apos;s most discerning markets.
              </p>
            </div>
            <div className="lg:col-span-5 h-[500px] w-full relative bg-warm-cream border border-outline-variant/10 overflow-hidden">
              <img alt="Europa Foods active packaging and loading warehouse" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-700" src="/images/warehouse.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Stats & Global Reach Bento Grid */}
        <section className="bg-warm-cream py-section-gap-mobile md:py-section-gap border-y border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16">
              <h2 className="font-headline-xl text-headline-xl text-deep-navy">Global Footprint</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter auto-rows-[200px]">
              {/* Stat Card 1 */}
              <div className="bg-stark-white border border-outline-variant/10 p-8 flex flex-col justify-end">
                <span className="font-stat-value text-stat-value text-champagne-gold mb-2">1.2M+</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Tons Exported Annually</span>
              </div>
              {/* Map Block (Spans 2 cols, 2 rows) */}
              <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 bg-stark-white border border-outline-variant/10 relative overflow-hidden group">
                <img alt="Abstract map representation" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB56KeoTdXBacCCMx6Ydnjq6m_rK87ocpcDxz2PO4w79zMBefNh1mOQ1f6NQE0lGgQJmAmBoNOSiJi5U3MAyv-uvsOd4gnOXksctZRkgtkLdpGi0R2LWNusBPPvHwbpmQRFvLVlPjKEjn8LukZmYRXZQf14-1_Hln1NAFa3HwZk--r-ii8JkOX6QgnS1CUFhkjzn0DLjEuRu7Yz98ICg_SrYfHls5-0r2Lbbztb16V9airNpAgzVpZUtdBLnFB-f5SekdaAoEpOJ8In" />
                <div className="absolute inset-0 bg-gradient-to-b from-stark-white/20 to-deep-navy/10"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-headline-md text-headline-md text-deep-navy bg-stark-white/80 backdrop-blur inline-block px-4 py-2 border border-outline-variant/10">Active in 85+ Markets</p>
                </div>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-deep-navy border border-outline-variant/10 p-8 flex flex-col justify-end text-stark-white">
                <span className="font-stat-value text-stat-value text-stark-white mb-2">450+</span>
                <span className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest">Premium Brand Partners</span>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-stark-white border border-outline-variant/10 p-8 flex flex-col justify-end">
                <span className="font-stat-value text-stat-value text-champagne-gold mb-2">99.8%</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Fulfillment Accuracy</span>
              </div>
              {/* Small Info Card */}
              <div className="bg-stark-white border border-outline-variant/10 p-8 flex flex-col justify-between">
                <span className="material-symbols-outlined text-champagne-gold text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Certified Excellence</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Holding top-tier international quality certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Gallery */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-4">Milestones of Quality</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A curated look at our defining moments in sourcing and logistics, reflecting our commitment to the art of food export.</p>
            </div>
            <Link className="inline-flex items-center space-x-2 text-deep-navy font-label-caps text-label-caps uppercase tracking-wider hover:text-champagne-gold transition-colors" href="#">
              <span>View Full History</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Gallery Item 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-[600px] w-full bg-warm-cream overflow-hidden border border-outline-variant/10 mb-6">
                <img alt="Artisanal food sorting" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWzkLeWvqjAoP7a_7yz-D4hz8egP8koKKVCYq42pO2FJpp3X8K8pqTdBfWiB7HU_Unw7ki7ub04MQmBH1VXo-gMSNnkaWi2P9uxEOcJsUSw-9mip9Bh_RJl5nakZKCELl2AlkeBRY4Q-x06acXPJ8hbIRKYktAR1r5TNY5JvdF9HJYrMq5-Ynl_eK91k5oLPBNA0DmPQYGxNYp3317leRt2qncQVD8AcXDQ7VNjWs-60vlCq14CNQJZ3TLES6hQEqUbxbcHrW3Ou0c" />
              </div>
              <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4">
                <h3 className="font-headline-md text-headline-md text-deep-navy">Establishment of Premium Sorting Facility</h3>
                <span className="font-label-caps text-label-caps text-champagne-gold">2010</span>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="group cursor-pointer md:mt-24">
              <div className="relative h-[600px] w-full bg-warm-cream overflow-hidden border border-outline-variant/10 mb-6">
                <img alt="Luxury food packaging" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCquxrSK1Fo7i6ehL1cxWPQeVT0Wn5diGpHfS8fKfyAa1aFeytx_4b1RHEe5ltkTBwW6P2Q8JAgbOfLjEBjHTKv55yB1otCAWG5vksgm1QNPhOyC1QmIPJhT3RTROmCOLfWUBxaGAmnyEENd1yRG5T8UYYeJC4Sa7RTcEnPckFgbogloeQdehTT3Mm1qBuKKoC5TQmtk7A6kOPa66xlTm4U6tzJDntJYMHYNKjvtSi7yN3mWyyDw0c6jkTUl2Fd2AQPAoMcsYDvSX2k" />
              </div>
              <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4">
                <h3 className="font-headline-md text-headline-md text-deep-navy">Launch of Signature Heritage Line</h3>
                <span className="font-label-caps text-label-caps text-champagne-gold">2018</span>
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Shipments & Logistics - Europa Foods",
  description: "Global supply chain precision. Learn about our packaging standards and track your shipment status.",
};

export default function ShipmentsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 z-10 pr-0 md:pr-12">
            <span className="font-label-caps text-label-caps text-champagne-gold block mb-6 uppercase tracking-widest">Global Supply Chain</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mb-8 leading-tight">Precision in Every Mile.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Our logistics network is built on the principles of uncompromising quality and absolute reliability. From European ports to global destinations, we ensure your high-end food products are handled with editorial-grade precision.
            </p>
            <button className="bg-deep-navy text-stark-white px-8 py-4 rounded-[6px] font-label-caps text-label-caps hover:bg-champagne-gold hover:text-deep-navy transition-colors duration-300">
              Explore Routing
            </button>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0 relative h-[500px] md:h-[700px] img-container">
            <div className="absolute inset-0 bg-deep-navy/10 z-10 pointer-events-none"></div>
            <img alt="Logistics Port" className="w-full h-full object-cover hover-zoom-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqT06hBvUoN60T38Qh03248gQ1m92G00Tq80608QO8Qp208qQo0hT90N83N5F1D3S9gT3D3B3P1X2E73B5X2J6K232G0G0V1F5S1R6V0D7E73B5A3O1J6L1R4R900F3H5064P9D58E628O1"/>
          </div>
        </div>
      </header>

      {/* Packaging Standards (Bento Layout) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-champagne-gold block mb-4 uppercase tracking-widest">Integrity Preserved</span>
          <h2 className="font-headline-xl text-headline-xl text-deep-navy">Packaging Standards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Vacuum Sealing Card */}
          <div className="md:col-span-7 bg-stark-white border border-deep-navy/10 flex flex-col group cursor-pointer">
            <div className="h-[400px] w-full img-container relative border-b border-deep-navy/10">
              <img alt="Vacuum Sealing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBntU7g24Rnxo0cd5W0d0GHM4wekIlaVIRrJH8qnowcA1zeC9zwy8rlvHSCzMh9OqYj8DB2TdftSIXoOEilje3Hu5FnFViVDM67Ya1bsgQKffXomHUewrHgeu5L-GX_ySTY7bGo3QuUe9DD7Rp-sCz-iLgyVpoAykG6691E1XeFxRo2I-mcLvQsDvssysOdH_fKiaKcjh7o6uucAt-OgjpqJgzSuyczOcDTjt4UuF_6J5AZgU0-6H48lJLANxQGzpBoYbaoQYUw0Ahb"/>
            </div>
            <div className="p-10 flex flex-col justify-center flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-champagne-gold" style={{ fontWeight: 300 }}>verified_user</span>
                <h3 className="font-headline-md text-headline-md text-deep-navy">Vacuum Sealing</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our advanced vacuum sealing technology removes oxygen to halt degradation, ensuring delicate flavor profiles and nutritional integrity are locked in from our facilities to your kitchen.
              </p>
            </div>
          </div>
          {/* Bulk Bags Card */}
          <div className="md:col-span-5 bg-stark-white border border-deep-navy/10 flex flex-col group cursor-pointer">
            <div className="h-[300px] w-full img-container relative border-b border-deep-navy/10">
              <img alt="Bulk Bags" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO_ZMz5io2HK79jCSBLiQFtN8gD1LZ8aDd3EC-6G2Ij0JjAGPyzxctMVDAe-K-52qFSsLKjFpcPpWjirD9myovVpC0kje2twx0okkYQsim-MdUPhExAKJVPG-oFRBFlEwAl0cd-qNfRAyly1-3iihhcHKX8RMcd1jpNbI5mElKBAHsKyV6FbXgA2m4iGnja8cG45_AA43mHSwQG8JTozEg2dzH9MdIWMh85R6x8VHqO7E9mBGMAlH79xCqtNkOcanC8F_saCewo4om"/>
            </div>
            <div className="p-10 flex flex-col justify-center flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-champagne-gold" style={{ fontWeight: 300 }}>inventory_2</span>
                <h3 className="font-headline-md text-headline-md text-deep-navy">Export-Grade Bulk Bags</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Designed for resilience and efficient port-to-port handling, our heavy-duty bulk bags maintain product structure while optimizing freight volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Port-to-Port Handling (Editorial Table/List) */}
      <section className="bg-stark-white py-section-gap-mobile md:py-section-gap border-y border-deep-navy/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy sticky top-32">Port-to-Port<br/>Handling Protocol</h2>
            </div>
            <div className="md:col-span-3">
              {/* Step 1 */}
              <div className="pb-10 mb-10 border-b border-deep-navy/10 flex flex-col md:flex-row gap-8 items-start">
                <div className="text-champagne-gold font-display-lg text-display-lg opacity-40 leading-none">01</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Origin Verification</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Rigorous quality control checks prior to container loading. Ambient temperatures and humidity levels are calibrated and locked.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="pb-10 mb-10 border-b border-deep-navy/10 flex flex-col md:flex-row gap-8 items-start">
                <div className="text-champagne-gold font-display-lg text-display-lg opacity-40 leading-none">02</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Maritime Transit</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Exclusive partnerships with premium freight lines ensure priority stowage. Continuous environmental monitoring via IoT sensors.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="pb-10 border-b-0 flex flex-col md:flex-row gap-8 items-start">
                <div className="text-champagne-gold font-display-lg text-display-lg opacity-40 leading-none">03</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Destination Clearance</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Expedited customs processing handled by our global logistics team, minimizing terminal dwell time and ensuring rapid final-mile dispatch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Inquiry & Map Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          {/* Map Side */}
          <div className="h-[600px] bg-surface-variant border border-deep-navy/10 relative overflow-hidden order-2 md:order-1">
            <div className="absolute inset-0 bg-deep-navy/5 mix-blend-multiply z-10 pointer-events-none"></div>
            <img alt="Shipping Routes Map" className="w-full h-full object-cover object-center grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD6ZHSPt8ShHkT8LAHdGuosX7uAPjLL3ZEgXbk7xRRKdZIOLYS1OZlPuEDXr2ZV13bYs8d5CjI1QLy5dCtL3usM0Jazp7l4RwUWyoNZabOvJr3NHhGGfstiGbst7SFzK_ftK-be0SAt7qgMATr53v_SKEQ1b8D6oqUsZlTR9zeZu43oiuxhJp4BwYZFcUDfg_9M1k-_WJQu1jlwGBGvZDC5kaSatzYz5A4-BJAeOIcRqB0sgHKvGDPNx171CuEuJRqBbvKbnKRW2xp"/>
            {/* Overlay Elements on Map */}
            <div className="absolute bottom-6 left-6 z-20 bg-stark-white/90 backdrop-blur-sm p-4 border border-deep-navy/10">
              <span className="font-label-caps text-label-caps text-deep-navy flex items-center gap-2">
                <span className="material-symbols-outlined text-champagne-gold" style={{ fontSize: "16px" }}>public</span>
                Live Network Status: Optimal
              </span>
            </div>
          </div>
          {/* Inquiry Form Side */}
          <div className="bg-stark-white p-12 md:p-16 border border-deep-navy/10 order-1 md:order-2 h-full flex flex-col justify-center">
            <span className="font-label-caps text-label-caps text-champagne-gold block mb-4 uppercase tracking-widest">Shipment Status</span>
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-8">Track Inquiry</h2>
            <form className="space-y-6">
              <div>
                <label className="block font-label-caps text-label-caps text-deep-navy mb-2" htmlFor="bol-number">Bill of Lading (B/L) Number</label>
                <input className="w-full bg-transparent border border-outline-variant text-body-md text-deep-navy py-4 px-4 focus:ring-0 focus:border-champagne-gold focus:border-2 transition-all outline-none rounded-none placeholder:text-outline-variant" id="bol-number" placeholder="e.g. EUF-2024-9876" type="text"/>
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-deep-navy mb-2" htmlFor="company-id">Company Reference ID</label>
                <input className="w-full bg-transparent border border-outline-variant text-body-md text-deep-navy py-4 px-4 focus:ring-0 focus:border-champagne-gold focus:border-2 transition-all outline-none rounded-none placeholder:text-outline-variant" id="company-id" placeholder="Optional" type="text"/>
              </div>
              <div className="pt-4">
                <button className="w-full bg-champagne-gold text-deep-navy px-6 py-4 rounded-[6px] font-label-caps text-label-caps hover:opacity-80 transition-opacity flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>search</span>
                  Locate Shipment
                </button>
              </div>
            </form>
            <p className="font-body-md text-body-md text-on-surface-variant mt-8 text-sm">
              For detailed customs documentation or temperature logs, please contact your dedicated account manager directly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

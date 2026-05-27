import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Quality & Certifications - Europa Foods",
  description: "Our commitment to excellence is verified at every stage. Uncompromising standards, global credentials, and farm-to-export traceability.",
};

export default function QualityPage() {
  return (
    <>
      <Navbar />

      {/* Main Content Canvas */}
      <main className="w-full bg-warm-cream">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-24 pb-section-gap-mobile md:pb-section-gap flex flex-col md:flex-row gap-gutter items-center">
          <div className="w-full md:w-1/2 md:pr-12">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-champagne-gold mb-4 block">Uncompromising Standards</span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-deep-navy mb-6">Quality &amp; Certifications.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Our commitment to excellence is verified at every stage. From the soil to the shipment container, we employ rigorous testing, traceablity, and strict adherence to global food safety standards, ensuring only the finest produce reaches your market.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 bg-deep-navy/10 border border-outline-variant/20 rounded-sm overflow-hidden">
              <img alt="Quality Inspection laboratory testing" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="/images/Quality01.jpeg" />
            </div>
          </div>
        </section>

        {/* Certifications Showcase */}
        <section className="bg-stark-white py-section-gap-mobile md:py-section-gap border-y border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 md:mb-24 md:pl-20 border-l-2 border-champagne-gold">
              <h2 className="font-headline-xl text-headline-xl text-deep-navy mb-4">Global Credentials.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Recognized by the world&apos;s most stringent regulatory bodies, our certifications are a testament to our unwavering dedication to food safety and premium quality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Certificate 1 */}
              <div className="bg-warm-cream p-8 border border-outline-variant/20 flex flex-col items-center text-center group hover:border-champagne-gold/50 transition-colors">
                <div className="w-32 h-40 bg-stark-white mb-6 border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <img alt="FDA Certificate" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsh0zp2xFuc7On6--Uy0QnLn5wR6J02chlnW2xqtMN37d4u-CaUGk8RJCvUJ88EZBo_Zt3MJbZL7ldvh9vDR1L1eqzzW06Qr3q7K-5x9Ef95AB2JWpCoNTfnU-Offs57g6SrA6fN28A9y232_KBwT84gmY2zSr-vHcNZ8sKQDFcbM3ar73G5X4V6ctEajtmCJb245DjJTrPgDBVMuxJoMvVlr9sTkxXb2KyFqovIcyCtF6a-iT3stbG5pDUBeZSLQy_S461hAO478w"/>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">FDA Registered</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Compliant with United States Food and Drug Administration standards for safe import.</p>
              </div>
              {/* Certificate 2 */}
              <div className="bg-warm-cream p-8 border border-outline-variant/20 flex flex-col items-center text-center group hover:border-champagne-gold/50 transition-colors">
                <div className="w-32 h-40 bg-stark-white mb-6 border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <img alt="FSSAI Certificate" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-SjpA-y0clLrB60C5UCq7wKfnCHDbDa10FT8gUe0EJTw1lf6hsq-tRZB2kiloGpEnNXHuo5LAa-j-DhJzDFLv-Y00CB_XK4dv6BgSyncMTw4XCseTFh94QnVWDRIBsQRNdklTQwrIF3Dmxoct_3Iaz-Iiw8xcG7xD-f9v4_ojUSBPdHSDyO9qBg5L7-CJ2x1Re5aMyHj9KScNS4t3AQyYjiPRnrfN4CgXJrIUmiQGXBUQa2c-8Sm3JcNQrpe42cSE8qgLnQdar_CW"/>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">FSSAI Certified</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Meeting the highest food safety and standards authority regulations in India.</p>
              </div>
              {/* Certificate 3 */}
              <div className="bg-warm-cream p-8 border border-outline-variant/20 flex flex-col items-center text-center group hover:border-champagne-gold/50 transition-colors">
                <div className="w-32 h-40 bg-stark-white mb-6 border border-outline-variant/10 shadow-sm relative overflow-hidden">
                  <img alt="APEDA Certificate" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRMejLJq0ZJKi95QQGHlCk7BpUpndpXgY-Gt92Hxzm4KSbkHOSMYcCWrPe1FQLxS8GQAuByv7OuI1FxM7K-hxk1sNosbdsCqi_MKJq83WkT9yIjCkJVuJNk94CiIDVFjZy92I2d5navDa7Lbe3Luw0TlIDNwjTNQuPl5mYCj3bmtlPskLPlKAoyVG39--GMhcF3nu_cZ_CUk3cKUNPIVqfxd9QI4FXuukDDnRwPr49CvzBH7cuAl_cTfRtqeWq8LDXR79ECK7db1vx"/>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">APEDA Approved</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Authorized by the Agricultural and Processed Food Products Export Development Authority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Traceability & Process */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left Sticky Context */}
            <div className="w-full md:w-1/3 md:sticky md:top-32">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Farm-to-Export Traceability.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Our integrated supply chain management ensures total visibility. Every batch can be traced back to its specific farm of origin, detailing harvesting conditions, lab results, and transit logs.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-champagne-gold hover:text-deep-navy transition-colors uppercase tracking-widest" href="#">
                Download Quality Manual <span className="material-symbols-outlined text-[16px]">download</span>
              </a>
            </div>
            {/* Right Process Steps */}
            <div className="w-full md:w-2/3 space-y-12">
              {/* Step 1 */}
              <div className="bg-stark-white border border-outline-variant/20 p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-square bg-warm-cream flex items-center justify-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-6xl text-champagne-gold font-light">science</span>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Phase 01</span>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">Rigorous Lab Testing</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Before any produce leaves the collection center, it undergoes comprehensive laboratory analysis for pesticide residues, heavy metals, and microbiological contaminants, ensuring compliance with MRLs of destination countries.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-stark-white border border-outline-variant/20 p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-square bg-warm-cream flex items-center justify-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-6xl text-champagne-gold font-light">ac_unit</span>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Phase 02</span>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">Cold Chain Management</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Temperature integrity is maintained without interruption. From pre-cooling at farm gates to refrigerated packhouses and temperature-logged reefer containers, we preserve the freshness and shelf-life of every shipment.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-stark-white border border-outline-variant/20 p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-square bg-warm-cream flex items-center justify-center border border-outline-variant/10">
                  <span className="material-symbols-outlined text-6xl text-champagne-gold font-light">qr_code_scanner</span>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Phase 03</span>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">Digital Tracking</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Each pallet is assigned a unique digital identifier. Buyers can scan QR codes to access real-time data regarding the origin, processing dates, quality inspection certificates, and environmental logs during transit.</p>
                </div>
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

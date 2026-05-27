"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Thank you! Your inquiry has been sent successfully." });
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          inquiryType: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[700px] border border-outline-variant/10">
            {/* Contact Details (Dark Navy Card) */}
            <div className="bg-deep-navy text-stark-white p-8 md:p-16 flex flex-col justify-between">
              <div>
                <h1 className="font-headline-xl text-headline-xl mb-6 text-champagne-gold">Get in Touch</h1>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-12 max-w-md">
                  Connect with our team to discuss premium European food exports. We offer bespoke solutions for global partners.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-champagne-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-champagne-gold mb-2">HEADQUARTERS</h3>
                      <p className="font-body-md text-body-md text-stark-white">
                        Europa Foods Global Exports<br/>
                        Mahuva, Gujarat, India<br/>
                        Global Operations Center
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-champagne-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-champagne-gold mb-2">CORPORATE EMAIL</h3>
                      <a className="font-body-md text-body-md text-stark-white hover:text-champagne-gold transition-colors block" href="mailto:inquiries@europafoods.com">inquiries@europafoods.com</a>
                      <a className="font-body-md text-body-md text-stark-white hover:text-champagne-gold transition-colors block" href="mailto:sales@europafoods.com">sales@europafoods.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-champagne-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>phone_iphone</span>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-champagne-gold mb-2">DIRECT LINE</h3>
                      <p className="font-body-md text-body-md text-stark-white">
                        +91 98765 43210 (Global Sales)
                      </p>
                      <a className="inline-flex items-center gap-2 mt-2 text-champagne-gold hover:text-secondary-fixed-dim transition-colors" href="#">
                        <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form (Warm Cream Background) */}
            <div className="bg-warm-cream p-8 md:p-16 flex flex-col justify-center border-l border-outline-variant/10">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-8">Send an Inquiry</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-deep-navy" htmlFor="firstName">FIRST NAME</label>
                    <input className="bg-stark-white border border-deep-navy/10 rounded-none px-4 py-3 font-body-md focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold transition-all" id="firstName" name="firstName" placeholder="Enter first name" type="text" value={formData.firstName} onChange={handleChange} required/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-deep-navy" htmlFor="lastName">LAST NAME</label>
                    <input className="bg-stark-white border border-deep-navy/10 rounded-none px-4 py-3 font-body-md focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold transition-all" id="lastName" name="lastName" placeholder="Enter last name" type="text" value={formData.lastName} onChange={handleChange} required/>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-deep-navy" htmlFor="companyName">COMPANY NAME</label>
                  <input className="bg-stark-white border border-deep-navy/10 rounded-none px-4 py-3 font-body-md focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold transition-all" id="companyName" name="companyName" placeholder="Your organization's name" type="text" value={formData.companyName} onChange={handleChange} required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-deep-navy" htmlFor="email">CORPORATE EMAIL</label>
                  <input className="bg-stark-white border border-deep-navy/10 rounded-none px-4 py-3 font-body-md focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold transition-all" id="email" name="email" placeholder="name@company.com" type="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-deep-navy" htmlFor="inquiryType">INQUIRY TYPE</label>
                  <select className="bg-stark-white border border-deep-navy/10 rounded-none px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold transition-all appearance-none" id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
                    <option disabled value="">Select an option</option>
                    <option value="bulk">Bulk Export Order</option>
                    <option value="custom">Custom Packaging</option>
                    <option value="partnership">Global Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-deep-navy" htmlFor="message">MESSAGE</label>
                  <textarea className="bg-stark-white border border-deep-navy/10 rounded-none px-4 py-3 font-body-md focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold transition-all resize-none" id="message" name="message" placeholder="How can we assist you?" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                {status.message && (
                  <div className={`p-4 font-body-md text-sm border ${status.type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                    {status.message}
                  </div>
                )}

                <button className="w-full bg-champagne-gold text-deep-navy py-4 font-label-caps text-label-caps rounded-DEFAULT hover:bg-secondary-fixed-dim transition-colors mt-4 flex justify-center items-center gap-2" type="submit" disabled={loading}>
                  {loading ? "SENDING..." : "SUBMIT AN INQUIRY"}
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap-mobile md:pb-section-gap">
          <div className="w-full h-[400px] border border-outline-variant/10 relative overflow-hidden bg-surface-container">
            <img alt="Map" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRMejLJq0ZJKi95QQGHlCk7BpUpndpXgY-Gt92Hxzm4KSbkHOSMYcCWrPe1FQLxS8GQAuByv7OuI1FxM7K-hxk1sNosbdsCqi_MKJq83WkT9yIjCkJVuJNk94CiIDVFjZy92I2d5navDa7Lbe3Luw0TlIDNwjTNQuPl5mYCj3bmtlPskLPlKAoyVG39--GMhcF3nu_cZ_CUk3cKUNPIVqfxd9QI4FXuukDDnRwPr49CvzBH7cuAl_cTfRtqeWq8LDXR79ECK7db1vx"/>
            {/* Map overlay card */}
            <div className="absolute bottom-8 left-8 bg-stark-white p-6 border border-outline-variant/10 shadow-sm max-w-sm">
              <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Global Operations</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Strategically located in Mahuva, Gujarat, ensuring prime access to agricultural hubs and major export ports.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

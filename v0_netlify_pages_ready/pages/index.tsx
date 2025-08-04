"use client"

import {
  Star,
  Instagram,
  Facebook,
  Sunrise,
  Moon,
  Wine,
  Scale,
  Truck,
  DollarSign,
  MapPin,
  Package,
  Flame,
  Shield,
} from "lucide-react"
import Script from "next/script"
import { useEffect } from "react"

export default function LandingPage() {
  useEffect(() => {
    // Handle potential script errors
    const handleScriptError = (event: ErrorEvent) => {
      if (event.message.includes("Amplitude") || event.message.includes("Cannot read properties of undefined")) {
        console.warn("Script loading error handled:", event.message)
        event.preventDefault()
      }
    }

    window.addEventListener("error", handleScriptError)

    return () => {
      window.removeEventListener("error", handleScriptError)
    }
  }, [])

  const policies = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Refund Policy", href: "/refund-policy" },
    { title: "Shipping Policy", href: "/shipping-policy" },
  ]

  const usefulLinks = [
    { title: "Contact Us", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "Track Your Order", href: "/track-order" },
    { title: "Wholesale", href: "/wholesale" },
  ]

  return (
    <div className="min-h-screen bg-[#FFF7E6]">
      {/* Header */}

      {/* Main Content */}
      <main className="pb-0">
        <div className="max-w-md mx-auto">
          {/* Hero Section */}
          <section className="relative h-screen flex items-start justify-center">
            {/* Background Image */}
            <img
              src="/hero-background-new.png"
              alt="BakeSale THC beverage with floating brownies"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay for fade effect */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, transparent 80%, #FFF7E6 100%)",
              }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-6 max-w-md mx-auto pt-6">
              <h1 className="text-white px-14 leading-7 text-3xl font-black mb-3" style={{ lineHeight: "1.25" }}>
                The Tastiest Way to Unwind
              </h1>

              <p className="text-lg text-white leading-relaxed font-medium px-8 mb-3 mt-0">
                Friendly-dose THC beverage that tastes just like fresh baked brownies!
              </p>

              <button
                className="font-bold rounded-lg font-sans hover:bg-white/30 transition-colors w-8/12 h-auto mb-0 py-0"
                style={{
                  backgroundColor: "#EDA21C",
                  color: "#531700",
                  height: "40px",
                  fontSize: "16px",
                }}
              >
                SHOP NOW
              </button>
            </div>
          </section>

          {/* Our Favorite Facts Section */}
          <section className="px-6 mb-6 pb-2">
            <h2 className="font-bold text-center mb-2 pt-3.5 text-lg leading-5 pb-2.5" style={{ color: "#531700" }}>
              Portable pouches with precisely 3mg of THC for a gentle, relaxing lift that leaves you happy, social, and
              present
            </h2>
            <div className="space-y-3">
              <div
                className="p-4 rounded-2xl border-2 text-center py-2.5"
                style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
              >
                <p className="font-medium text-base" style={{ color: "#531700" }}>
                  Creates a HAPPY, RELAXING, and SOCIAL buzz
                </p>
              </div>
              <div
                className="p-4 rounded-2xl border-2 text-center py-2.5"
                style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
              >
                <p className="font-medium text-base" style={{ color: "#531700" }}>
                  Feel it in 10 min, Lasts 90 min
                </p>
              </div>
              <div
                className="p-4 rounded-2xl border-2 text-center py-2"
                style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
              >
                <p className="font-medium text-base" style={{ color: "#531700" }}>
                  No Alcohol, no hangover, ONLY 16 CALORIES
                </p>
              </div>
              <div className="p-4 rounded-2xl text-center py-2.5" style={{ backgroundColor: "#531700" }}>
                <p className="font-medium text-base" style={{ color: "#EDA21C" }}>
                  100% Federally Legal + 100% Made in the USA
                </p>
              </div>
            </div>
          </section>

          {/* Lifestyle Image Section */}
          <section className="mb-9">
            <div className="relative w-full">
              <img
                src="/lifestyle-image.jpeg"
                alt="Woman relaxing with BakeSale Vibes product"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, #FFF7E6 0%, transparent 20%, transparent 80%, #FFF7E6 100%)",
                }}
              />
            </div>
          </section>

          {/* Experience Section */}
          <section className="px-6 mb-9">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#531700" }}>
              3mg of THC per pouch:
              <br />A Friendlier Dose
            </h2>

            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#EDA21C" }}
                >
                  <Sunrise className="w-8 h-8" style={{ color: "#EDA21C" }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#531700" }}>
                  A LOVELY LIFT
                </h3>
                <p className="text-base" style={{ color: "#531700" }}>
                  A happy, relaxing, and social buzz that is great for newbies and cannasseurs alike
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#EDA21C" }}
                >
                  <Moon className="w-8 h-8" style={{ color: "#EDA21C" }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#531700" }}>
                  NOT A TRIP TO THE MOON
                </h3>
                <p className="text-base" style={{ color: "#531700" }}>
                  Vibes isn't about getting super stoned or wasted, it's about unwinding and enjoying
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#EDA21C" }}
                >
                  <Wine className="w-8 h-8" style={{ color: "#EDA21C" }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#531700" }}>
                  A FRIENDLY DOSE
                </h3>
                <p className="text-base" style={{ color: "#531700" }}>
                  As strong as a glass of wine or beer, the 3mg dose helps you unwind and enjoy, while staying present
                  and active
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#EDA21C" }}
                >
                  <Scale className="w-8 h-8" style={{ color: "#EDA21C" }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#531700" }}>
                  PERFECTLY PORTIONED
                </h3>
                <p className="text-base" style={{ color: "#531700" }}>
                  Each pouch has exactly 3mg of THC, so you can precisely control your buzz and unwind with confidence
                </p>
              </div>
            </div>
          </section>

          {/* Relaxing Lifestyle Image Section */}
          <section className="mb-9">
            <div className="relative w-full">
              <img
                src="/lawn-relaxing-box.jpeg"
                alt="Woman relaxing with BakeSale product in backyard"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, #FFF7E6 0%, transparent 15%, transparent 85%, #FFF7E6 100%)",
                }}
              />
            </div>
          </section>

          {/* Relax Without Alcohol Section */}
          <section className="px-6 mb-9">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8" style={{ color: "#531700" }}>
                RELAX without ALCOHOL
                <br />
                INDULGE without GUILT
              </h2>

              <div className="grid grid-cols-2 gap-3 px-8">
                {/* No hangovers, no fog */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center relative"
                    style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                  >
                    <Wine className="w-8 h-8" style={{ color: "#EDA21C" }} />
                  </div>
                  <p className="text-base font-medium leading-tight" style={{ color: "#531700" }}>
                    No hangovers,
                    <br />
                    no fog
                  </p>
                </div>

                {/* Low calories */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                  >
                    <Package className="w-8 h-8" style={{ color: "#EDA21C" }} />
                  </div>
                  <p className="text-base font-medium leading-tight" style={{ color: "#531700" }}>
                    Low sugar
                    <br />
                    (4g/pouch)
                  </p>
                </div>

                {/* Low calories (duplicate) */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center relative"
                    style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                  >
                    <Flame className="w-8 h-8" style={{ color: "#EDA21C" }} />
                  </div>
                  <p className="text-base font-medium leading-tight" style={{ color: "#531700" }}>
                    Low calories
                    <br />
                    (16/pouch)
                  </p>
                </div>

                {/* Federally Legal */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                  >
                    <Shield className="w-8 h-8" style={{ color: "#EDA21C" }} />
                  </div>
                  <p className="text-base font-medium leading-tight" style={{ color: "#531700" }}>
                    Federally Legal +
                    <br />
                    Made in the USA
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bathtime Lifestyle Image Section */}
          <section className="mb-9">
            <div className="relative w-full">
              <img
                src="/bathtime-lifestyle.jpeg"
                alt="Relaxing bath scene with BakeSale Vibes products, candles, and tablet"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, #FFF7E6 0%, transparent 15%, transparent 85%, #FFF7E6 100%)",
                }}
              />
            </div>
          </section>

          {/* Sweet Sips Section */}
          <section className="px-6 mb-6">
            <div className="text-center">
              <h2 className="font-bold text-3xl mt-0 mb-4" style={{ color: "#531700" }}>
                Unlike other THC drinks, Vibes has:
              </h2>

              <div className="space-y-3">
                <div
                  className="p-4 rounded-2xl border-2 text-center py-2.5"
                  style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                >
                  <p className="text-base font-medium" style={{ color: "#531700" }}>
                    No grassy flavor
                  </p>
                </div>

                <div
                  className="p-4 rounded-2xl border-2 text-center py-2.5"
                  style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                >
                  <p className="text-base font-medium" style={{ color: "#531700" }}>
                    No funky finish
                  </p>
                </div>

                <div
                  className="p-4 rounded-2xl border-2 text-center py-2.5"
                  style={{ borderColor: "#EDA21C", backgroundColor: "#FFF7E6" }}
                >
                  <p className="text-base font-medium" style={{ color: "#531700" }}>
                    No bitter buds
                  </p>
                </div>

                <div className="p-4 rounded-2xl text-center py-2.5" style={{ backgroundColor: "#531700" }}>
                  <p className="text-base font-medium" style={{ color: "#EDA21C" }}>
                    Just rich, fudgy, fabulous chocolate in every sip.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}

          {/* Product Showcase */}
          <section className="px-6 mb-9"></section>

          {/* Cooking Lifestyle Image Section */}
          <section className="mb-9">
            <div className="relative w-full">
              <img
                src="/cooking-lifestyle.jpeg"
                alt="Woman cooking with BakeSale product in modern kitchen"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, #FFF7E6 0%, transparent 15%, transparent 85%, #FFF7E6 100%)",
                }}
              />
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="px-6 mb-9">
            <h2 className="text-2xl font-bold text-[#531700] text-center mb-6">What People are Saying: </h2>

            <div className="space-y-4">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg border-2 border-[#EDA21C] p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#FFF7E6] rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-[#531700]">Sarah M.</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#EDA21C] text-[#EDA21C]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#5317 সহযোগী leading-relaxed">
                  "I am feeling the buzz and I'm excited to get some food and it's not too strong which I really like.
                  It actually has more of a calming effect for me right now!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg border-2 border-[#EDA21C] p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#FFF7E6] rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-[#531700]">Mike R.</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#EDA21C] text-[#EDA21C]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#531700] leading-relaxed">
                  "It taste so good. It literally tastes like a brownie, and it taste like the batter when you're making
                  a brownie that's my favorite part."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg border-2 border-[#EDA21C] p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#FFF7E6] rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-[#531700]">Jessica L.</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#EDA21C] text-[#EDA21C]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#531700] leading-relaxed">
                  "just wait 10 minutes and you are relaxed and ready to go. what better way to end the work week?"
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white rounded-lg border-2 border-[#EDA21C] p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#FFF7E6] rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-[#531700]">Dana K.</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#EDA21C] text-[#EDA21C]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#531700] leading-relaxed">
                  "I love the fact that this will replace a glass of wine or a glass of beer at the end of the day to
                  kind of just calm your mind and calm your body."
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-6 mb-9">
            <div className="bg-white rounded-2xl border-2 border-[#EDA21C] p-6 text-center">
              <h2 className="text-2xl font-bold text-[#531700] mb-4 px-3.5">Ready to try this Chocolatey Chill? </h2>
              <p className="text-base text-[#531700] mb-4 px-2 leading-relaxed">
                Brownie flavor. Fast onset. Friendly dose. Get the buzzy treat that's changing how people chill.
              </p>
              <button className="bg-[#EDA21C] text-[#531700] font-bold py-3 rounded-lg hover:bg-white/30 transition-colors mb-4 w-10/12">
                Shop Now
              </button>
              <div
                className="flex text-center justify-evenly mb-0 items-center flex-row text-sm pt-2"
                style={{ color: "#531700" }}
              >
                <div className="flex flex-col items-center leading-tight font-sans">
                  <div
                    className="w-16 h-16 rounded-full mb-2 flex items-center justify-center"
                    style={{ backgroundColor: "#F5E6D3" }}
                  >
                    <Truck className="w-8 h-8" style={{ color: "#531700" }} />
                  </div>
                  <div className="font-medium">Free shipping</div>
                  <div className="font-medium">on all orders</div>
                </div>
                <div className="flex flex-col items-center leading-tight font-sans">
                  <div
                    className="w-16 h-16 rounded-full mb-2 flex items-center justify-center"
                    style={{ backgroundColor: "#F5E6D3" }}
                  >
                    <DollarSign className="w-8 h-8" style={{ color: "#531700" }} />
                  </div>
                  <div className="font-medium">Money-back</div>
                  <div className="font-medium">guarantee</div>
                </div>
                <div className="flex flex-col items-center leading-tight font-sans">
                  <div
                    className="w-16 h-16 rounded-full mb-2 flex items-center justify-center"
                    style={{ backgroundColor: "#F5E6D3" }}
                  >
                    <MapPin className="w-8 h-8" style={{ color: "#531700" }} />
                  </div>
                  <div className="font-medium">Ships to</div>
                  <div className="font-medium">42 states</div>
                </div>
              </div>
            </div>
          </section>

          {/* Sticky Floating Footer Bar */}
          <div className="fixed bottom-0 left-0 w-full flex z-50 shadow-[0_-4px_8px_rgba(0,0,0,0.3)]">
            {/* Shop Now Button - 2/3 width */}
            <button
              className="w-2/3 text-center py-4 font-bold text-lg uppercase hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#EDA21C",
                color: "#7B0202",
                fontSize: "19.2px",
              }}
              onClick={() => window.open("https://bakesalevibes.com/products/bakesale-vibes-brownie", "_blank")}
            >
              SHOP NOW
            </button>

            {/* Live Chat Button - 1/3 width */}
            <button
              className="w-1/3 text-center py-4 font-bold text-lg uppercase hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#AA98D0",
                color: "#FFFFFF",
                fontSize: "19.2px",
              }}
              onClick={() => {
                // Try to open Gorgias chat if available
                try {
                  if (typeof window !== "undefined" && (window as any).GorgiasChat) {
                    if ((window as any).GorgiasChat.isOpen()) {
                      ;(window as any).GorgiasChat.close()
                    } else {
                      ;(window as any).GorgiasChat.open()
                    }
                  }
                } catch (error) {
                  console.warn("Chat widget not available:", error)
                }
              }}
            >
              LIVE CHAT
            </button>
          </div>
        </div>
      </main>

      {/* Scripts - Load conditionally to prevent errors */}
      <Script
        id="gorgias-chat-widget-install-v3"
        src="https://config.gorgias.chat/bundle-loader/01JQSNZSF0ETDCVXMG4DKN0EKX"
        strategy="lazyOnload"
        onError={(e) => {
          console.warn("Gorgias chat script failed to load:", e)
        }}
      />

      <Script
        src="https://bundle.5gtb.com/loader.js?g_cvt_id=77c02f1d-ae53-49f2-8bbf-f5da05d5e79f"
        strategy="lazyOnload"
        async
        onError={(e) => {
          console.warn("Bundle script failed to load:", e)
        }}
      />

      {/* Footer */}
      <footer
        className="mt-12 pt-12 pb-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(170, 152, 208, 0.8) 0%, rgba(170, 152, 208, 0.9) 50%, rgba(170, 152, 208, 1) 100%)",
        }}
      >
        <div className="max-w-md mx-auto px-6">
          {/* Brand Section */}
          <div className="text-center mb-8">
            {/* BakeSale Script Logo */}
            <div className="mb-4">
              <h2 className="text-white text-4xl font-script mb-2" style={{ fontFamily: "cursive" }}>
                BakeSale
              </h2>
            </div>
            {/* Company Info */}
            <div className="text-white space-y-1 mb-4">
              <p className="font-medium">Bakesale Beverage Co.</p>
              <p className="text-sm">2810 N Church St.</p>
              <p className="text-sm">Wilmington, DE, 19802</p>
              <a href="tel:8335714160" className="text-sm underline block mt-2">
                (833) 571-4160
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://facebook.com/bakesalevibes"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/bakesalevibes"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://tiktok.com/@bakesalevibes"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="TikTok"
              >
                <span className="text-white text-lg font-bold">♪</span>
              </a>
            </div>
          </div>
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 text-white">
            {/* Our Policies */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Our Policies</h3>
              <ul className="space-y-3">
                {policies.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-white/90 hover:text-white transition-colors text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Useful Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Useful Links</h3>
              <ul className="space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-white/90 hover:text-white transition-colors text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

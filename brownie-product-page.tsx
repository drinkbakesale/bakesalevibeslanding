"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Star, Truck, DollarSign, MapPin } from 'lucide-react'
import Header from "./components/header"
import Footer from "./components/footer"

export default function Component() {
  const thumbnailImages = [
    { src: "/images/3-boxes-main.png", alt: "3 Boxes Main" },
    { src: "/images/box-thumb-1.png", alt: "Box View 1" },
    { src: "/images/box-thumb-2.png", alt: "Box View 2" },
    { src: "/images/box-thumb-3.png", alt: "Box View 3" },
  ]

  const quantityOptions = [
    {
      id: 1,
      label: "1 Box (12 pouches)",
      price: "$40.50",
      originalPrice: "$45.00",
      subText: "10% Off for commenting Vibes",
      url: "https://bakesalevibes.com/1box10discount",
    },
    {
      id: 2,
      label: "2 Box - Most Popular",
      price: "$61.20",
      originalPrice: "$90.00",
      savings: "You save 24%",
      url: "https://bakesalevibes.com/2box10discount",
    },
    {
      id: 3,
      label: "3 Box - Most Savings",
      price: "$85.50",
      originalPrice: "$135.00",
      savings: "You save 30%",
      url: "https://bakesalevibes.com/3box10discount",
    },
  ]

  const [mainImage, setMainImage] = useState(thumbnailImages[0].src)
  const [selectedQuantity, setSelectedQuantity] = useState(2)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showVideo, setShowVideo] = useState(false)

  const selectedOption = quantityOptions.find((option) => option.id === selectedQuantity)

  const faqData = [
    {
      question: "How many should I have?",
      answer:
        "Everyone's tolerance is different, so we recommend starting with one pouch and seeing how you feel after 15 minutes, then deciding if you want another.\n\nJust like alcohol, Bakesale Vibes' effects stack, so if you want to increase the intensity of the effects, you can have another pouch. Just remember to enjoy responsibly!",
    },
    {
      question: "Is 3mg good for beginners?",
      answer:
        "Each pouch's friendly dose of 3mg THC is meant to be an easy starting place for new consumers, so it is a relatively low dose.\n\nThat being said, if you are concerned about overdoing it, you can try a little bit at a time, wait 15 minutes or so, and once you have figured out how much it effects you, you can adjust how much you drink accordingly.",
    },
    {
      question: "How is it legal?",
      answer:
        "Thanks to the 2018 Farm Bill, products containing less than 0.3% hemp derived THC by weight (like Bakesale Vibes) are Federally Legal. This makes Bakesale Vibes 100% legal to buy and sell online to individuals over the age of 21.",
    },
    {
      question: "What does it feel like?",
      answer:
        "Bakesale's friendly dose of 3mg of THC is relaxing, playful, and delightfully uplifting.\n\nFor most people, drinking one pouch worth is roughly the same strength of experience as a glass of wine or a beer.",
    },
    {
      question: "Nutritional Info?",
      answer: "image",
    },
    {
      question: "Ingredients List",
      answer:
        "Bakesale Vibes contains Purified Water, Cane Sugar, Vegetable Glycerin, Salt, Gum Acacia, Potassium Sorbate, Sodium Benzoate, Hemp-Derived Delta-9 THC Extract, Hemp-Derived CBD Extract, Natural and Artifical Flavors, Caramel Coloring.",
    },
  ]

  useEffect(() => {
    const hideGorgiasCSS = `
iframe[id="chat-button"],
.gorgias-chat-button,
[data-gorgias-chat-widget] iframe[src*="chat-button"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}
`
    const styleElement = document.createElement("style")
    styleElement.textContent = hideGorgiasCSS
    document.head.insertBefore(styleElement, document.head.firstChild)

    const loadScript = (src: string, id?: string, async = false) => {
      return new Promise((resolve) => {
        try {
          if (id && document.getElementById(id)) {
            resolve(true)
            return
          }
          const script = document.createElement("script")
          if (id) script.id = id
          script.src = src
          script.async = async
          script.onload = () => resolve(true)
          script.onerror = () => resolve(false)
          document.head.appendChild(script)
        } catch {
          resolve(false)
        }
      })
    }

    const loadScripts = async () => {
      await loadScript(
        "https://config.gorgias.chat/bundle-loader/01JQSNZSF0ETDCVXMG4DKN0EKX",
        "gorgias-chat-widget-install-v3",
      )
      await loadScript("https://bundle.5gtb.com/loader.js?g_cvt_id=77c02f1d-ae53-49f2-8bbf-f5da05d5e79f", "bundle-script", true)
    }

    const loadFbclidTracking = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const fbclid = urlParams.get("fbclid")
        if (fbclid) sessionStorage.setItem("fbclid", fbclid)
      } catch {}
    }

    const loadGoogleTagManager = () => {
      try {
        const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M9LHLSBR');`
        const script = document.createElement("script")
        script.innerHTML = gtmScript
        document.head.appendChild(script)
      } catch {}
    }

    loadScripts()
    loadFbclidTracking()
    loadGoogleTagManager()

    return () => {
      if (styleElement.parentNode) styleElement.parentNode.removeChild(styleElement)
      const g = document.getElementById("gorgias-chat-widget-install-v3")
      if (g?.parentNode) g.parentNode.removeChild(g)
      const b = document.getElementById("bundle-script")
      if (b?.parentNode) b.parentNode.removeChild(b)
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF7E6", fontFamily: "sans-serif" }}>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M9LHLSBR"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Header />

      <div className="max-w-md mx-auto pb-0">
        <div className="px-6 text-center pb-0 pl-[50px] pr-[50px] pt-2.5">
          <h1 className="font-bold mb-3 text-3xl leading-7 font-sans" style={{ color: "#531700" }}>
            Brownie-flavored Bliss
          </h1>
          <p className="leading-relaxed font-sans leading-[1.15rem] text-base font-medium" style={{ color: "#531700" }}>
            A delicious brownie-flavored drink infused with a beginner-friendly 3mg dose of THC
          </p>
        </div>

        <div className="px-6 mb-1.5">
          <div className="mb-0 leading-7">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt="BakeSale Vibes Brownie Product"
              width={400}
              height={320}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex gap-3 justify-evenly">
            {thumbnailImages.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setMainImage(thumb.src)}
                className={`rounded-lg overflow-hidden ${mainImage === thumb.src ? "border-2" : "border-0"}`}
                style={{ borderColor: mainImage === thumb.src ? "#531700" : "transparent" }}
              >
                <Image src={thumb.src || "/placeholder.svg"} alt={thumb.alt} width={70} height={70} className="w-[70px] h-[70px] object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 mb-4" id="pricing-section">
          <div
            className="text-center font-sans p-4 rounded-lg px-6 mx-8 py-1.5 leading-7 my-3.5"
            style={{ backgroundColor: "#AA98D0" }}
          >
            <div className="text-xl font-medium mb-0 leading-6" style={{ color: "#FFFFFF" }}>
              12 Pouches per Box
            </div>
            <div className="font-medium text-base leading-6" style={{ color: "#FFFFFF" }}>
              That's 12 moments of mellow magic
            </div>
          </div>

          <div className="text-center font-sans text-lg font-medium mb-0.5 mt-5" style={{ color: "#531700" }}>
            Select your Vibes quantity:
          </div>

          <div className="space-y-3 mb-4">
            {quantityOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedQuantity(option.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg py-2 ${
                  selectedQuantity === option.id ? "bg-white border-2" : "border bg-white"
                }`}
                style={{
                  borderColor: selectedQuantity === option.id ? "#531700" : "#E4A830",
                  backgroundColor: selectedQuantity === option.id ? "#E4A830" : "#FFF7E6",
                  borderWidth: selectedQuantity === option.id ? "2px" : "1px",
                  borderStyle: "solid",
                }}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedQuantity === option.id ? "border-[#531700]" : "border-gray-400"
                    }`}
                  >
                    {selectedQuantity === option.id && (
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#531700" }} />
                    )}
                  </div>
                  <div>
                    <div className="font-medium font-sans text-base text-left" style={{ color: "#531700" }}>
                      {option.label}
                    </div>
                    {(option.savings || option.subText) && (
                      <div className="text-[rgba(80,22,5,1)] text-left font-sans bg-transparent text-sm">
                        {option.savings ? `${option.savings} + 10% Off for comment` : option.subText}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold" style={{ color: "#531700" }}>
                    {option.price}
                  </div>
                  {option.originalPrice && (
                    <div className="text-gray-500 line-through text-sm">{option.originalPrice}</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <Button
            className="w-full font-bold rounded-lg mb-4 font-sans"
            style={{ backgroundColor: "#E4A830", color: "#531700", height: "40px", fontSize: "16px" }}
            onClick={() => {
              if (selectedOption?.url) {
                const fbclid = sessionStorage.getItem("fbclid")
                try {
                  const url = new URL(selectedOption.url)
                  if (fbclid) url.searchParams.set("fbclid", fbclid)
                  window.location.href = url.toString()
                } catch {
                  window.location.href = selectedOption.url
                }
              }
            }}
          >
            ADD TO CART
          </Button>

          <div className="flex text-center justify-evenly mb-0 items-center flex-row text-sm font-semibold" style={{ color: "#531700" }}>
            <div className="flex flex-col items-center leading-3 font-sans">
              <Image src="/images/free-shipping-icon.png" alt="Free shipping" width={80} height={80} className="mb-1" />
              <div>Free shipping</div>
              <div>on all orders</div>
            </div>
            <div className="flex flex-col items-center leading-3 font-sans">
              <Image src="/images/money-back-icon.png" alt="Money back guarantee" width={80} height={80} className="mb-1" />
              <div>Money-back</div>
              <div>Guarantee</div>
            </div>
            <div className="flex flex-col items-center leading-3 font-sans">
              <Image src="/images/ships-42-states-icon.png" alt="Ships to 42 states" width={80} height={80} className="mb-1" />
              <div>Ships to</div>
              <div>42 states</div>
            </div>
          </div>
        </div>

        <div className="mb-6 mt-9">
          <Image src="/images/pouches-on-ice.png" alt="Brownie pouches on ice with charcuterie" width={400} height={200} className="w-full" />
        </div>

        <div className="px-6 mb-6">
          <h2 className="font-bold text-center mb-4 text-3xl" style={{ color: "#531700" }}>
            Relax without Alcohol, Indulge without Guilt
          </h2>
          <div className="space-y-2">
            <div className="flex items-center px-6 py-1.5 rounded-full border-2 min-h-[35px]" style={{ borderColor: "#531700", backgroundColor: "#FFF7E6" }}>
              <div className="w-1/5" />
              <div className="w-8 h-8 mr-6 flex-shrink-0" style={{ backgroundColor: "#531700" }} />
              <span className="font-medium text-lg leading-none text-left flex-1" style={{ color: "#531700" }}>
                Tastes like brownies
              </span>
            </div>

            <div className="flex items-center px-6 py-1.5 rounded-full border-2 min-h-[35px]" style={{ borderColor: "#531700", backgroundColor: "#FFF7E6" }}>
              <div className="w-1/5" />
              <div className="w-8 h-8 mr-6 flex-shrink-0 flex items-center justify-center text-2xl font-bold" style={{ color: "#E4A830" }}>
                {"⚡"}
              </div>
              <span className="font-medium text-lg leading-none text-left flex-1" style={{ color: "#531700" }}>
                Kicks in fast (~10 min)
              </span>
            </div>

            <div className="flex items-center px-6 py-1.5 rounded-full border-2 min-h-[35px]" style={{ borderColor: "#531700", backgroundColor: "#FFF7E6" }}>
              <div className="w-1/5" />
              <div className="w-8 h-8 mr-6 flex-shrink-0 flex items-center justify-center text-2xl">{"😊"}</div>
              <span className="font-medium text-lg leading-none" style={{ color: "#531700" }}>
                Light, relaxing lift
              </span>
            </div>

            <div className="flex items-center px-6 py-1.5 rounded-full border-2 min-h-[35px]" style={{ borderColor: "#531700", backgroundColor: "#FFF7E6" }}>
              <div className="w-1/5" />
              <div className="w-8 h-8 mr-6 flex-shrink-0 flex items-center justify-center text-2xl">{"📦"}</div>
              <span className="font-medium text-lg leading-none" style={{ color: "#531700" }}>
                No alcohol, no hangover
              </span>
            </div>
          </div>
        </div>

        <div className="mb-9 mt-8">
          <Image src="/images/gardening-gradient.png" alt="Woman gardening with product" width={400} height={200} className="w-full" />
        </div>

        <div className="px-6 mb-6 mt-0">
          <div className="p-4 rounded-2xl border-2 text-center mb-4" style={{ borderColor: "#E4A830", backgroundColor: "#FFF7E6" }}>
            <h3 className="font-bold mb-1 text-2xl" style={{ color: "#531700" }}>
              What does Vibes feel like?
            </h3>
            <p className="font-sans text-base" style={{ color: "#531700" }}>
              Hear about the lovely lift and beautiful buzz
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "375/667" }}>
            {!showVideo ? (
              <div className="relative w-full h-full">
                <Image src="/images/new-video-thumbnail.png" alt="What does BakeSale Vibes feel like?" width={375} height={667} className="w-full h-full object-cover" />
                <button onClick={() => setShowVideo(true)} className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E4A830" }}>
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/476692/50670d5e-7946-43a4-b136-ba533dc702f1?autoplay=true&muted=false"
                  loading="lazy"
                  className="w-full h-full border-none"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#E4A830" }}
                  aria-label="Close video"
                >
                  {"×"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 mb-6 mt-9">
          <h3 className="font-bold mb-4 text-center text-2xl" style={{ color: "#531700" }}>
            You're Probably Wondering:
          </h3>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden" style={{ borderColor: "#E4A830" }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="flex items-center justify-between p-3 w-full text-left border-0 border-none"
                  style={{ color: "#531700" }}
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-3 py-3 text-sm border-t" style={{ color: "#531700", borderColor: "#E4A830" }}>
                    {faq.answer === "image" ? (
                      <div className="flex justify-center">
                        <Image src="/images/nutritional-info.png" alt="Nutrition Facts" width={300} height={400} className="max-w-full h-auto" />
                      </div>
                    ) : (
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 mb-6 mt-9">
          <h3 className="font-bold mb-4 text-center text-2xl" style={{ color: "#531700" }}>
            Perfect for...
          </h3>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Tile src="/images/movie-nights.png" label="Movie nights" />
            <Tile src="/images/chill-outs.png" label="Chill weeknights" />
            <Tile src="/images/winding-down.png" label="Winding down" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Tile src="/images/book-club.png" label="Book club" />
            <Tile src="/images/bath-square.png" label="Treating yourself" />
            <Tile src="/images/resetting.png" label="Resetting" />
          </div>
        </div>

        <div className="relative mt-24 mb-6 pt-9">
          <Image src="/images/ways-to-wind-down.png" alt="Woman relaxing with art and product" width={400} height={500} className="w-full" />
          <div className="absolute top-0 left-0 right-0 p-6 pb-6 pt-0">
            <div className="text-center">
              <h3 className="font-bold mb-2 leading-tight text-center font-sans text-3xl leading-7" style={{ color: "#531700" }}>
                Your New Favorite
                <br />
                Way to Wind Down
              </h3>
              <p className="text-base leading-relaxed max-w-[280px] mx-auto text-center font-sans leading-5" style={{ color: "#531700" }}>
                A soft, chocolatey lift that starts in 10 minutes, lasts 90 minutes, and fades with zero fog or hangover.
              </p>
            </div>
          </div>
        </div>

        <section className="px-6 mb-9">
          <h2 className="text-2xl font-bold text-[#531700] text-center mb-6">What People are Saying:</h2>
          {[["Emma T.", "I love the fact that this will replace a glass of wine or a glass of beer at the end of the day to calm your mind and body."],
            ["Alex J.", "This is so so good to just decompress. It really just goes with your mood."],
            ["Maya S.", "Wait 10 minutes and you are relaxed and ready to go. What better way to end the work week?"],
            ["Ryan P.", "Honey this is just perfect for unwinding after a day like today. I needed this"]].map(
            ([name, text], i) => (
              <div key={i} className="bg-white rounded-lg border-2 border-[#EDA21C] p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#FFF7E6] rounded-full mr-3" />
                  <div>
                    <p className="font-medium text-[#531700]">{name}</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-[#EDA21C] text-[#EDA21C]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#531700] leading-relaxed">{"\"" + text + "\""}</p>
              </div>
            ),
          )}
        </section>

        <section className="px-6 mb-9">
          <div className="bg-white rounded-2xl border-2 border-[#EDA21C] p-6 text-center">
            <h2 className="text-2xl font-bold text-[#531700] mb-4 px-5">Ready to try this Chocolatey Chill?</h2>
            <p className="text-base text-[#531700] mb-4 leading-relaxed px-4">
              Brownie flavor. Fast onset. Friendly dose. Get the buzzy treat that's changing how people chill.
            </p>
            <button
              className="bg-[#EDA21C] text-[#531700] font-bold py-3 rounded-lg hover:bg-white/30 transition-colors mb-4 w-10/12"
              onClick={() => {
                const pricingSection = document.getElementById("pricing-section")
                if (!pricingSection) return
                const rect = pricingSection.getBoundingClientRect()
                const elementTop = rect.top + window.pageYOffset
                const offsetPosition = elementTop - window.innerHeight / 2 + rect.height / 2
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }}
            >
              Shop Now
            </button>
            <div className="flex text-center justify-evenly mb-0 items-center flex-row text-sm pt-2" style={{ color: "#531700", fontWeight: 600 }}>
              <InfoIcon label="Free shipping" sub="on all orders">
                <Truck className="w-8 h-8" style={{ color: "#531700" }} />
              </InfoIcon>
              <InfoIcon label="Money-back" sub="guarantee">
                <DollarSign className="w-8 h-8" style={{ color: "#531700" }} />
              </InfoIcon>
              <InfoIcon label="Ships to" sub="42 states">
                <MapPin className="w-8 h-8" style={{ color: "#531700" }} />
              </InfoIcon>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <div className="fixed bottom-0 left-0 w-full flex z-50 shadow-[0_-4px_8px_rgba(0,0,0,0.3)]">
        <button
          className="w-2/3 text-center py-4 font-bold text-lg uppercase hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#EDA21C", color: "#7B0202", fontSize: "19.2px" }}
          onClick={() => {
            const pricingSection = document.getElementById("pricing-section")
            if (!pricingSection) return
            const rect = pricingSection.getBoundingClientRect()
            const elementTop = rect.top + window.pageYOffset
            const offsetPosition = elementTop - window.innerHeight / 2 + rect.height / 2
            window.scrollTo({ top: offsetPosition, behavior: "smooth" })
          }}
        >
          SHOP NOW
        </button>
        <button
          className="w-1/3 text-center py-4 font-bold text-lg uppercase hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#AA98D0", color: "#FFFFFF", fontSize: "19.2px" }}
          onClick={() => {
            try {
              if ((window as any).GorgiasChat) {
                const GC = (window as any).GorgiasChat
                GC.isOpen && GC.isOpen() ? GC.close() : GC.open()
              }
            } catch {}
          }}
        >
          LIVE CHAT
        </button>
      </div>
    </div>
  )
}

function Tile({ src, label }: { src: string; label: string }) {
  return (
    <div className="text-center">
      <Image src={src || "/placeholder.svg"} alt={label} width={80} height={80} className="w-full aspect-square object-cover rounded-lg mb-2" />
      <div className="text-sm font-sans font-medium" style={{ color: "#531700" }}>
        {label}
      </div>
    </div>
  )
}

function InfoIcon({ children, label, sub }: { children: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex flex-col items-center leading-tight font-sans">
      <div className="w-16 h-16 rounded-full mb-2 flex items-center justify-center" style={{ backgroundColor: "#F5E6D3" }}>
        {children}
      </div>
      <div className="font-semibold">{label}</div>
      <div className="font-semibold">{sub}</div>
    </div>
  )
}

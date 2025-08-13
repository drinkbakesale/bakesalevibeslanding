import type { Metadata } from "next"
import BrownieProductPage from "../brownie-product-page"

export const metadata: Metadata = {
  title: "Bakesale Vibes — Brownie-flavored Bliss",
  description:
    "A delicious brownie-flavored drink with a beginner-friendly dose. Fast onset, light relaxing lift, zero hangover.",
  openGraph: {
    title: "Bakesale Vibes — Brownie-flavored Bliss",
    description:
      "A delicious brownie-flavored drink with a beginner-friendly dose. Fast onset, light relaxing lift, zero hangover.",
    images: ["/images/3-boxes-main.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function Page() {
  return <BrownieProductPage />
}

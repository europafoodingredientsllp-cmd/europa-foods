import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Red Onion Flakes", "Garlic Cloves & Minced", "Green Bell Pepper Dices"];

const products = [
  {
    name: "Red Onion Flakes",
    tag: "Red Onion Flakes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxtPSmBf04nHuslPDoGosYPSd_zYahJEEZIT51waz8_vbuYxxaY3kxBZd7AI2CQj3x4SOXeoLiOEAaLpEUMdBT12LJKjbKzV1m-rFATAuryayIK5FyrGnTddNEIqFt5W7hlXFQMIfeobHDlYIy4T86-ZgO7a8phPfAwtl5ImtuxYH8NpBdqBfqIReivsivennQrAdACd2wroF0AdzGmBmlfiydwozD3TucSwJAdzFJ8q-nhK2uVBXy4aT5rgUncDHaDLta0DAypMxn",
    description: "Rich, pungent aroma and deep color profile. Sourced from optimal winter crops for maximum flavor retention.",
  },
  {
    name: "Garlic Cloves & Minced",
    tag: "Garlic Cloves & Minced",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQgzVxSij57cU0Q_xo5G_9FjL-A6FwMp3doFgTJocdnRKvacya93jfPGSm3KP7gP6KlMmKe5xK0ft7sTLAvKvzgGXg8E1FiS3b1uSYq5iCdnV-Ir59EqYzD7svpikQFTZS2OoJxx0COkgezoI7aJPQwfAyCnXqYep45zGi2vmVj8-9-PE2lRRJtVBXppI0MoLOWmrzsc4DElyyit0sjC8XMAn06PKtao_HazVJyf9xOb4_sXcxdKCbSc3uf0wJQasKVSvXCv5L2-da",
    description: "A-Grade white garlic, carefully dehydrated to maintain its robust essential oils and sharp, authentic taste.",
  },
  {
    name: "Green Bell Pepper Dices",
    tag: "Green Bell Pepper Dices",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7lldeZj8kPY83LjrK-kTc3VQqkwVRFmc6vyFzbqQtyihDufPgORgjvfnmseJoysNBnTTyeK2XO6G9Vb06zi6X2Cd-zcUF3lUDMR6oRySUZhaljWlG3twCgvh6ksIQh4wA7XAGNXug-50LAmzM-gJD_ZchIi5uHmD_zUhFZqSByr-i6EX9arA0xv-K3ox0pcLkcT57j53iHSL7kiAUrOjvfICCyMpO_FpepDPYyAnMWrIy--2eU50CvJz3q1wDvfyp0y1sONsU0aB",
    description: "Vibrantly colored bell pepper pieces with a sweet, concentrated flavor ideal for soups, sauces, and ready-meals.",
  },
];

const theme = {
  banner: "bg-gradient-to-r from-[#1B4D3E] to-[#2E7D32]",
  accentText: "text-[#2E7D32]",
  accentBorder: "border-[#2E7D32]",
  buttonHoverBg: "hover:bg-[#2E7D32] hover:text-stark-white",
  buttonHoverBorder: "hover:border-[#2E7D32]",
  badge: "bg-green-50 text-green-700 border-green-200",
};

export default function DehydratedVegetablesPage() {
  return (
    <CategoryPageTemplate
      categoryTitle="Dehydrated Vegetables"
      tabs={tabs}
      products={products}
      theme={theme}
    />
  );
}

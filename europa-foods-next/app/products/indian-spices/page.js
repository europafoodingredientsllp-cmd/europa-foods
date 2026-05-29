import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Whole Chillies", "Powder", "Flakes"];

const products = [
  {
    name: "S17 Chilli - Teja Chilli",
    tag: "Whole Chillies",
    image: "/images/Product%20Images/Indian%20Spices/S17%20Chilli%20-%20Teja%20Chilli.jpg",
    description: "Highly hot dry red chilli with sharp, fiery heat. Known for its intense color and rich capsicum oil content, popular for spice blends and extraction.",
    loadingCapacity: "14 - 15 MT in 40ft container (loose bags)."
  },
  {
    name: "334 - S10 - S4 - Sannam Chilli",
    tag: "Whole Chillies",
    image: "/images/Product%20Images/Indian%20Spices/334%20-%20S10%20-%20S4%20-%20Sannam%20Chilli.jpg",
    description: "Medium hot red chilli with thick skin and rich aroma. The most exported whole chilli, perfect for general culinary heat and seasoning lines.",
    loadingCapacity: "14 - 15 MT in 40ft container."
  },
  {
    name: "Bird Eye Chilli",
    tag: "Whole Chillies",
    image: "/images/Product%20Images/Indian%20Spices/Bird%20Eye%20Chilli.jpg",
    description: "Small, highly potent dry red chilli with high heat index. Grown organically, it brings an sharp, clean heat ideal for hot sauces and spice mixes.",
    loadingCapacity: "12 MT in 40ft container."
  },
  {
    name: "Ghost Pepper - Bhut Jolokia",
    tag: "Whole Chillies",
    image: "/images/Product%20Images/Indian%20Spices/Ghost%20Pepper%20-%20Bhut%20Jolokia%20Chilli.jpg",
    description: "One of the world's hottest chillies, offering slow-building extreme heat and distinctive sweet, fruity aroma. Clean and sortex quality.",
    loadingCapacity: "10 - 12 MT in 40ft container."
  },
  {
    name: "S9 - Mundu - Round Chilli",
    tag: "Whole Chillies",
    image: "/images/Product%20Images/Indian%20Spices/S9%20-%20Mundu%20-%20Round%20Chilli.jpg",
    description: "Distinctive spherical round dry chilli with moderate heat and unique flavor profile. Highly prized for south Indian cooking and oil extraction.",
    loadingCapacity: "14 MT in 40ft container."
  },
  {
    name: "Tomato - Chapata Chilli",
    tag: "Whole Chillies",
    image: "/images/Product%20Images/Indian%20Spices/Tomato%20-%20Chapata%20Chilli.jpg",
    description: "Deep red, round, low-heat dry chilli mimicking the color of tomatoes. Excellent for imparting vibrant natural red color and mild heat to food products.",
    loadingCapacity: "14 MT in 40ft container."
  },
  {
    name: "Chilli Powder",
    tag: "Powder",
    image: "/images/Product%20Images/Indian%20Spices/Chilli%20Powder.png",
    description: "Premium quality ground red chilli powder, milled under low-temperature conditions to preserve essential oils, color value (ASTA), and heat levels.",
    loadingCapacity: "18 - 20 MT in 20ft container."
  },
  {
    name: "Chilli Flakes",
    tag: "Flakes",
    image: "/images/Product%20Images/Indian%20Spices/Chilli%20Flakes.png",
    description: "Crushed dry red chilli flakes, uniform cut size. Free from dust and excessive loose seed count. Perfect for pizza toppings, salads, and culinary garnishing.",
    loadingCapacity: "13 - 14 MT in 20ft container."
  }
];

const theme = {
  banner: "bg-gradient-to-r from-[#7B1D0E] to-[#CD4B33]",
  accentText: "text-[#CD4B33]",
  accentBorder: "border-[#CD4B33]",
  badge: "bg-red-50 text-red-700 border-red-200"
};

export default function IndianSpicesPage() {
  return (
    <CategoryPageTemplate
      categoryTitle="Indian Spices"
      tabs={tabs}
      products={products}
      theme={theme}
    />
  );
}

import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Fruit Powders", "Vegetable Powders"];

const products = [
  // Fruit Powders
  {
    name: "Apple Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Apple%20Powder.jpg",
    description: "Spray-dried from 100% natural apple juice concentrate. Fine, free-flowing powder with a sweet apple taste, ideal for baby foods, beverages, and dessert dry mixes.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Banana Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Banana%20Powder.jpg",
    description: "Prepared from ripe Cavendish banana puree. Creamy yellow, free-flowing powder retaining natural flavor and vitamins, widely used in infant foods and bakery mixes.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Chikoo Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Chikoo%20Powder.jpg",
    description: "Spray-dried sapodilla (chikoo) fruit juice. Captures the unique, rich malty sweetness of chikoo. Great for milkshakes, ice creams, and health supplements.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },
  {
    name: "Custard Apple Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Custard%20Apple%20Powder.jpg",
    description: "Captures the sweet, creamy tropical pulp of custard apple. Dissolves instantly, making it perfect for direct blend dairy mixes and premium confectioneries.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },
  {
    name: "Mango Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Mango%20Powder.jpg",
    description: "Spray-dried Alphonso/Kesar mango puree. Vibrant yellow, free-flowing powder with intense sweet mango aroma, widely used in juices, jams, and ready dry drinks.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Orange Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Orange%20Powder.jpg",
    description: "Spray-dried from fresh orange juice. Zesty, citrus-rich profile. High solubility, suitable for powdered drinks, jellies, and health formulations.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Papaya Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Papaya%20Powder.jpg",
    description: "Dry papaya juice powder processed under strict standards. Contains natural enzymes (papain) and rich vitamin values, ideal for nutrition lines.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },
  {
    name: "Pineapple Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Pineapple%20Powder.jpg",
    description: "Spray-dried pineapple juice with a sweet-tart tropical bite. Instant dissolution. Great for cocktails, marinades, sauces, and baking applications.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Pomegranate Powder",
    tag: "Fruit Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Fruit%20Powder/Pomegranate%20Powder.jpg",
    description: "Prepared from ripe pomegranate juice, yielding a rich red-pink hue and deep sweet-sour berry note. Packed with natural antioxidants, ideal for health blends.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },

  // Vegetable Powders
  {
    name: "Beetroot Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Beetroot%20Powder.jpg",
    description: "Deep red beetroot juice powder. Acts as an excellent natural red food colorant with a sweet, earthy taste, widely used in gravies, sauces, and health powders.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Carrot Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Carrot%20Powder.jpg",
    description: "Spray-dried fresh carrot juice concentrate. Highly soluble, rich in beta-carotene and natural sweet flavor. Ideal for instant soups and seasoning mixes.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Ginger Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Ginger%20Powder.jpg",
    description: "Highly soluble dry ginger juice powder. Strong spicy ginger bite and pleasant warmth, perfect for instant tea premixes, confectionery, and savory cooking.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },
  {
    name: "Green Chilli Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Green%20Chilli%20Powder.jpg",
    description: "Spray-dried green chilli juice with sharp spicy heat. Gives a fresh green pepper kick without physical chilli flakes, popular in dry snack seasonings.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },
  {
    name: "Lemon Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Lemon%20Powder.jpg",
    description: "Spray-dried zesty lemon juice. High citric acid profile with natural clean citrus taste. Indispensable for beverage dry packs and salad dressings.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  },
  {
    name: "Spinach Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Spinach%20Powder.jpg",
    description: "Vibrant green spinach juice powder. Rich in iron and chlorophyll, serving as a natural green food coloring agent and nutrition fortifier.",
    loadingCapacity: "12 - 14 MT in 20ft container."
  },
  {
    name: "Tamarind Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Tamarind%20Powder.jpg",
    description: "Spray-dried from sour tamarind pulp. Excellent tart, sour flavor, perfect for instant soups (Rasam/Sambar), sauce mixes, and snack coatings.",
    loadingCapacity: "15 - 17 MT in 20ft container."
  },
  {
    name: "Tomato Powder",
    tag: "Vegetable Powders",
    image: "/images/Product%20Images/Spray%20Dried%20Vegetable%20Powder/Tomato%20Powder.jpg",
    description: "Spray-dried ripe red tomato paste. Superb tomato flavor profile, high solids. Ideal for instant tomato soup packs, ketchup base reconstitutions, and snack seasonings.",
    loadingCapacity: "15 - 18 MT in 20ft container."
  }
];

const theme = {
  banner: "bg-gradient-to-r from-[#5C4033] to-[#8B5A2B]",
  accentText: "text-[#8B5A2B]",
  accentBorder: "border-[#8B5A2B]",
  badge: "bg-amber-50 text-amber-700 border-amber-200"
};

export default function SprayDriedPowdersPage() {
  return (
    <CategoryPageTemplate
      categoryTitle="Spray Dried Powders"
      tabs={tabs}
      products={products}
      theme={theme}
    />
  );
}

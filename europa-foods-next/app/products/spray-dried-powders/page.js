import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Tomato", "Onion", "Garlic", "Lemon"];

const products = [
  {
    name: "Spray Dried Tomato Powder",
    tag: "Tomato",
    image: "/images/Spray Dried Vegetable and powder.jpeg",
    description: "100% natural spray-dried tomato powder, ideal for instant soups, sauces, and seasoning mixes.",
  },
  {
    name: "Spray Dried Onion Powder",
    tag: "Onion",
    image: "/images/Spray Dried Vegetable and powder.jpeg",
    description: "Premium soluble onion powder, processed to retain the pungent sweet aroma and flavor.",
  },
  {
    name: "Spray Dried Garlic Powder",
    tag: "Garlic",
    image: "/images/Spray Dried Vegetable and powder.jpeg",
    description: "Fine, free-flowing garlic powder with excellent solubility and authentic spicy garlic notes.",
  },
  {
    name: "Spray Dried Lemon Powder",
    tag: "Lemon",
    image: "/images/Spray Dried Vegetable and powder.jpeg",
    description: "Zesty and refreshing spray-dried lemon juice powder for beverages, confectionery, and dry mixes.",
  },
];

const theme = {
  banner: "bg-gradient-to-r from-[#5C4033] to-[#8B5A2B]",
  accentText: "text-[#8B5A2B]",
  accentBorder: "border-[#8B5A2B]",
  buttonHoverBg: "hover:bg-[#8B5A2B] hover:text-stark-white",
  buttonHoverBorder: "hover:border-[#8B5A2B]",
  badge: "bg-amber-50 text-amber-700 border-amber-200",
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

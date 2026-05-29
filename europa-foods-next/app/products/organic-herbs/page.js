import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Oregano", "Basil", "Thyme", "Rosemary", "Parsley"];

const products = [
  {
    name: "Organic Oregano Leaves",
    tag: "Oregano",
    image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=600&auto=format&fit=crop",
    description: "Carefully dried organic oregano leaves with robust aroma and distinct herbal flavor.",
  },
  {
    name: "Organic Sweet Basil",
    tag: "Basil",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop",
    description: "Premium culinary organic sweet basil, processed to retain essential chlorophyll and taste.",
  },
  {
    name: "Organic Dried Thyme",
    tag: "Thyme",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=600&auto=format&fit=crop",
    description: "Strongly aromatic organic thyme leaves, ideal for soups, stocks, and meat dry rubs.",
  },
  {
    name: "Organic Rosemary Needles",
    tag: "Rosemary",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=600&auto=format&fit=crop",
    description: "Whole dried organic rosemary needles, containing rich essential woodsy oils.",
  },
  {
    name: "Organic Parsley Flakes",
    tag: "Parsley",
    image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=600&auto=format&fit=crop",
    description: "Bright green organic parsley flakes, dried gently to preserve flavor and fresh color.",
  },
];

const theme = {
  banner: "bg-gradient-to-r from-[#2F5233] to-[#556B2F]",
  accentText: "text-[#556B2F]",
  accentBorder: "border-[#556B2F]",
  buttonHoverBg: "hover:bg-[#556B2F] hover:text-stark-white",
  buttonHoverBorder: "hover:border-[#556B2F]",
  badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function OrganicHerbsPage() {
  return (
    <CategoryPageTemplate
      categoryTitle="Organic Herbs"
      tabs={tabs}
      products={products}
      theme={theme}
    />
  );
}

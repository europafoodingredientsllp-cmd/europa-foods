import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Pepper", "Turmeric", "Cumin", "Cardamom", "Ginger"];

const products = [
  {
    name: "Organic Black Pepper",
    tag: "Pepper",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=600&auto=format&fit=crop",
    description: "Certified organic black peppercorns grown without chemical fertilizers or pesticides.",
  },
  {
    name: "Organic Turmeric Powder",
    tag: "Turmeric",
    image: "https://images.unsplash.com/photo-1615485500905-ac56f4d2f09a?q=80&w=600&auto=format&fit=crop",
    description: "Pristine organic turmeric powder with preserved high curcumin levels.",
  },
  {
    name: "Organic Cumin Seed",
    tag: "Cumin",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=600&auto=format&fit=crop",
    description: "Pure, certified organic cumin seeds offering rich aroma and chemical-free safety.",
  },
  {
    name: "Organic Green Cardamom",
    tag: "Cardamom",
    image: "https://images.unsplash.com/photo-1599940794939-ee3600f9a263?q=80&w=600&auto=format&fit=crop",
    description: "Premium aromatic cardamom pods grown in chemical-free organic estates.",
  },
  {
    name: "Organic Ginger Root",
    tag: "Ginger",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=600&auto=format&fit=crop",
    description: "Zesty organic ginger root, cleaned and prepared for export under clean standards.",
  },
];

const theme = {
  banner: "bg-gradient-to-r from-[#825C22] to-[#B78A39]",
  accentText: "text-[#B78A39]",
  accentBorder: "border-[#B78A39]",
  buttonHoverBg: "hover:bg-[#B78A39] hover:text-stark-white",
  buttonHoverBorder: "hover:border-[#B78A39]",
  badge: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function OrganicSpicesPage() {
  return (
    <CategoryPageTemplate
      categoryTitle="Organic Spices"
      tabs={tabs}
      products={products}
      theme={theme}
    />
  );
}

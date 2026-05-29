import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Tellicherry Black Pepper", "Alleppey Turmeric Fingers & Powder"];

const products = [
  {
    name: "Tellicherry Black Pepper",
    tag: "Tellicherry Black Pepper",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7aqi6E7IALop0FlLNJCPXgecqydmFLGumG8dOYU_6deQcoBw2xHQb-P4d5g_qCmoimpFloIjBJcBvO6d_fCXSg4UfqQVnVmFz6DQqccBhJ96MzHVtcg2jHgO2XIjqqGGiYInBgc_Y_dU-T_-n50h2aW0FvrbDMpgKig3Wc-NcaJWdwnV22YLJIdcc7u_4zFWnFlEeyOD7kn4xD0m9tKePfUIv-0YSqRMQlcwx4xU77H5hJA4ij0fvGxbAC80hoDRYBFNvZeXysFSh",
    description: "The world's finest black pepper, known for its large size, rich essential oils, and complex, warm heat profile.",
  },
  {
    name: "Alleppey Turmeric Fingers & Powder",
    tag: "Alleppey Turmeric Fingers & Powder",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhk9_26u4a4YOMhZpILWA2Bv-EIUPmJ7CmpBySU9TSfWlF0pmctAD5oSytlzG6o9FLVY0p64CmOQJMs8dtwJSuD-KJU2GXyA4N-wznJblOFKQ78Xn_9uYr6TG2jv8jApItugoPiGItBq6Aqt637ewZCr_3LL_guaVUQu2C8uBs_zDUPmBnGlTQiMCnP4HDmwbE7A-kE__DFfmeXdc7qwTEMOotEaKqQGmy8zAxeRbdLfjpmMJcful1an2M3cH3Nn2rP_Wl2hlUoroT",
    description: "Renowned for its exceptionally high curcumin content, offering a bright golden hue and a deep, earthy flavor.",
  },
];

const theme = {
  banner: "bg-gradient-to-r from-[#7B1D0E] to-[#CD4B33]",
  accentText: "text-[#CD4B33]",
  accentBorder: "border-[#CD4B33]",
  buttonHoverBg: "hover:bg-[#CD4B33] hover:text-stark-white",
  buttonHoverBorder: "hover:border-[#CD4B33]",
  badge: "bg-red-50 text-red-700 border-red-200",
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

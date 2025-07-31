import { Usetheme } from "../Hooks/Usetheme";
import ProductCard from "./ProductCard";

const products = [
  { name: "MacBook Pro 16\"", category: "Laptops", date: "Dec 10, 2024", status: "In Stock" },
  { name: "Dell XPS 13", category: "Laptops", date: "Dec 9, 2024", status: "In Stock" },
  { name: "iPhone 15 Pro", category: "Mobile", date: "Dec 8, 2024", status: "Low Stock" },
  { name: "iPad Air", category: "Tablets", date: "Dec 7, 2024", status: "In Stock" },
  { name: "Surface Pro 9", category: "Tablets", date: "Dec 6, 2024", status: "Out of Stock" },
];

const RecentProducts = () => {
  const { theme, toggletheme } = Usetheme();

  return (
    <div className={`p-6 rounded-xl shadow-md ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
      <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Added Products</h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            category={product.category}
            date={product.date}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;

import { Usetheme } from "../Hooks/Usetheme";

const ProductCard = ({ name, category, date, status }) => {
  const{theme ,toggleTheme}= Usetheme();
  const getStatusStyle = () => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-700";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-700";
      case "Out of Stock":
        return "bg-red-100 text-red-700";
      default:
        return "";
    }
  };

  return (
    <div className={`${theme==="light"?"bg-white":"bg-gray-800"}border rounded-lg p-4 shadow-sm w-full sm:w-64`}>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{category}</p>
      <p className="text-sm text-gray-400">{date}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle()}`}
      >
        {status}
      </span>
    </div>
  );
};

export default ProductCard;

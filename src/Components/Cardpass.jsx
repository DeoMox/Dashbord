import { Users, Package, CheckCircle, AlertTriangle } from "lucide-react";
import { Usetheme } from "../Hooks/Usetheme";

const cardData = [
  {
    icon: Users,
    count: 116,
    label: "Total Users",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Package,
    count: 100,
    label: "Total Products",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: CheckCircle,
    count: 10,
    label: "Assigned Products",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: AlertTriangle,
    count: 90,
    label: "Unassigned Products",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function Cardpass() {
  const { theme, toggletheme } = Usetheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cardData.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-xl shadow-sm transition
              ${theme === "light" ? "bg-white" : "bg-gray-800 text-white"}`}
          >
            <div className={`p-3 rounded-lg ${card.bgColor}`}>
              <Icon className={`${card.iconColor}`} />
            </div>
            <div>
              <h2 className={`text-xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                {card.count}
              </h2>
              <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
                {card.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

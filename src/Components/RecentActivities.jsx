import { useState } from "react";
import { Package, Users, AlignCenter } from "lucide-react";
import useActivities from "../Hooks/UseActivities";
import { Usetheme } from "../Hooks/Usetheme";

const RecentActivities = () => {
  const { theme } = Usetheme();
  const { activities } = useActivities();
  const [viewAll, setViewAll] = useState(false);

  const renderIcon = (type) => {
    switch (type) {
      case "package":
        return <Package className="text-blue-500" />;
      case "warning":
        return <div className="text-yellow-500">⚠️</div>;
      case "user":
        return <div className="text-green-500">🧑‍💼</div>;
      default:
        return <div>📦</div>;
    }
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } rounded-xl transition-colors duration-300`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Recent Activity */}
        <div
          className={`rounded-lg p-4 shadow ${
            theme === "light" ? "bg-gray-50" : "bg-gray-900"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold text-gray-800 dark:text-white">
              Recent Activity
            </h2>
            <button
              className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? "Show Less" : "View All"}
            </button>
          </div>
          <ul className="space-y-3">
            {(viewAll ? activities : activities.slice(0, 3)).map((item, index) => (
              <ActivityItem
                key={index}
                icon={renderIcon(item.iconType)}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div
          className={`rounded-lg p-4 shadow ${
            theme === "light" ? "bg-gray-50" : "bg-gray-900"
          }`}
        >
          <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-2">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <ActionCard
              icon={<Users className="text-blue-500" />}
              title="View Users"
              subtitle="View all registered users"
              bg="bg-blue-50 dark:bg-blue-900"
              btnColor="bg-blue-600"
            />
            <ActionCard
              icon={<Package className="text-blue-500" />}
              title="View Products"
              subtitle="View all registered products"
              bg="bg-blue-50 dark:bg-blue-900"
              btnColor="bg-blue-600"
            />
            <ActionCard
              icon={<AlignCenter className="text-purple-500" />}
              title="View Assignments"
              subtitle="View all product assignments"
              bg="bg-purple-50 dark:bg-purple-900"
              btnColor="bg-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ icon, title, description, date }) => (
  <li className="flex items-start space-x-2">
    <div className="mt-1">{icon}</div>
    <div className="text-sm">
      <p className="font-semibold text-gray-800 dark:text-white">{title}</p>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
    </div>
  </li>
);

const ActionCard = ({ icon, title, subtitle, bg, btnColor }) => (
  <div className={`p-3 rounded flex items-center justify-between ${bg}`}>
    <div className="flex items-center space-x-2">
      {icon}
      <div className="text-sm">
        <p className="font-semibold text-gray-800 dark:text-white">{title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
    </div>
    <button className={`text-white text-xs px-2 py-1 rounded ${btnColor}`}>
      Go
    </button>
  </div>
);

export default RecentActivities;

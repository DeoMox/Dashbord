import { Usetheme } from "../Hooks/Usetheme";
import { Usetable } from "../Hooks/Usetable";

const UserTable = () => {
  const { theme } = Usetheme();
  const { users, deleteUser } = Usetable();

  const isDark = theme === "dark";

  return (
    <div className={`p-4 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
      </div>

      <table className={`min-w-full rounded shadow ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <thead>
          <tr className={`${isDark ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-left"}`}>
            <th className="py-2 px-4">User</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Last Login</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} className={`${isDark ? "border-gray-700" : "border-t"}`}>
              <td className="py-2 px-4">
                <div className="font-semibold">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    user.role === "Admin"
                      ? "bg-purple-100 text-purple-700"
                      : user.role === "Manager"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-2 px-4">{user.lastLogin}</td>
              <td className="py-2 px-4">
                <button className="text-blue-600 mr-2">Edit</button>
                <button
                  className="text-red-600"
                  onClick={() => deleteUser(user.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

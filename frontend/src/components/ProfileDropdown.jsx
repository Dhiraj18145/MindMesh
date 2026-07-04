import { Link } from "react-router-dom";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

function ProfileDropdown({ user, onLogout }) {
  return (
    <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">

      <div className="p-6 border-b">
        <h2 className="font-bold text-lg">{user?.name}</h2>
        <p className="text-gray-500 text-sm">{user?.email}</p>
      </div>

      <Link
  to="/profile"
  className="flex items-center gap-3 px-6 py-3 mx-3 rounded-xl
            bg-indigo-600 text-white font-medium
            hover:bg-indigo-700 transition"
>
  👤 Profile
</Link>

      <Link
  to="/settings"
  className="flex items-center gap-3 px-6 py-3 mx-3 mt-2 rounded-xl
            bg-gray-100 text-gray-700 font-medium
            hover:bg-indigo-100 hover:text-indigo-700 transition"
>
  ⚙️ Settings
</Link>

     <button
  onClick={onLogout}
  className="w-[90%] mx-auto mt-3 mb-4 flex items-center justify-center gap-2
             bg-slate-700 text-white py-3 rounded-xl
             hover:bg-slate-800 transition duration-200"
>
  🚪 Logout
</button>

    </div>
  );
}

export default ProfileDropdown;
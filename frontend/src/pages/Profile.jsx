import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-[420px] text-center">

        <div className="w-24 h-24 rounded-full bg-indigo-600 text-white text-4xl font-bold flex items-center justify-center mx-auto">
          {user?.name?.charAt(0)?.toUpperCase()}
        </div>

        <h1 className="text-3xl font-bold mt-5">
          {user?.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default Profile;
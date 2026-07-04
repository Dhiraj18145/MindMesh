import { useEffect, useState } from "react";
import API from "../services/api";
import { FaUser, FaEnvelope, FaSave } from "react-icons/fa";

function Settings() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await API.get("/auth/me");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const res = await API.put("/auth/me", {
        name: user.name,
      });

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );

      alert("Profile Updated Successfully");

      setUser(res.data);

    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-3xl w-[500px] p-10">

        <h1 className="text-4xl font-bold mb-8 text-center">
          ⚙ Settings
        </h1>

        {/* Name */}

        <label className="font-semibold">
          Name
        </label>

        <div className="flex items-center gap-3 border rounded-xl p-4 mt-2 mb-6">

          <FaUser className="text-indigo-600" />

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="outline-none w-full"
          />

        </div>

        {/* Email */}

        <label className="font-semibold">
          Email
        </label>

        <div className="flex items-center gap-3 border rounded-xl p-4 mt-2 mb-8 bg-gray-100">

          <FaEnvelope className="text-indigo-600" />

          <input
            type="email"
            value={user.email}
            disabled
            className="outline-none w-full bg-gray-100"
          />

        </div>

        <button
          onClick={handleSave}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 flex justify-center items-center gap-3 text-lg font-semibold"
        >
          <FaSave />
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;

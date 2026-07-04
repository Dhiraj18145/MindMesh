import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import Loader from "../components/Loader";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post(
        "/auth/register",
        formData
      );

      alert(res.data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[400px] border border-white/20 shadow-xl"
      >

        <h1 className="text-4xl text-white font-bold text-center mb-8">
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl mb-4 bg-white/20 text-white placeholder-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl mb-4 bg-white/20 text-white placeholder-white outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl mb-6 bg-white/20 text-white placeholder-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Register
        </button>

        <p className="text-white mt-6 text-center">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-bold hover:underline"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;
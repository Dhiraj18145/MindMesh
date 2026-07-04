import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import API from "../services/api";

import CreateIdeaModal from "../components/CreateIdeaModal";
import EditIdeaModal from "../components/EditIdeaModal";
import IdeaCard from "../components/IdeaCard";
import Stats from "../components/Stats";
import ProfileDropdown from "../components/ProfileDropdown";
import Loader from "../components/Loader";


function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingIdea, setEditingIdea] = useState(null);
  const [showMyIdeas, setShowMyIdeas] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ideas, setIdeas] = useState([]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

const onLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
  try {

    setLoading(true);

    const res = await API.get("/ideas");

    setIdeas(res.data);

    setShowMyIdeas(false);

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }
};

  const fetchMyIdeas = async () => {
  try {

    setLoading(true);

    const res = await API.get("/ideas/my");

    setIdeas(res.data);

    setShowMyIdeas(true);

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }
};

  const addIdea = async (newIdea) => {
    try {
      await API.post("/ideas", {
        title: newIdea.title,
        description: newIdea.description,
        tags: [newIdea.tag1, newIdea.tag2],
      });

      if (showMyIdeas) {
        fetchMyIdeas();
      } else {
        fetchIdeas();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteIdea = async (id) => {
    try {
      await API.delete(`/ideas/${id}`);

      if (showMyIdeas) {
        fetchMyIdeas();
      } else {
        fetchIdeas();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likeIdea = async (id) => {
    try {
      await API.put(`/ideas/${id}/like`);

      if (showMyIdeas) {
        fetchMyIdeas();
      } else {
        fetchIdeas();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateIdea = async (updatedIdea) => {
  try {
    console.log(updatedIdea);

    await API.put(
      `/ideas/${updatedIdea._id}`,
      updatedIdea
    );

    if (showMyIdeas) {
      fetchMyIdeas();
    } else {
      fetchIdeas();
    }

    setEditingIdea(null);
  } catch (error) {
    console.log(error.response?.data);
  }
};

  const filteredIdeas = ideas.filter((idea) =>
  idea.title?.toLowerCase().includes(searchTerm.toLowerCase())
);

if (loading) {
  return <Loader />;
}

  return (
  <div className="min-h-screen bg-gray-100">

    {/* Navbar */}
    <div className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-4xl font-bold tracking-wide">
        🧠 MindMesh
      </h1>

      <div className="relative">

        <div
          onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-4 cursor-pointer hover:bg-slate-800 px-4 py-2 rounded-xl transition"
        >

          <div className="text-right">

            <h3 className="font-semibold">
              {user?.name}
            </h3>

            <p className="text-xs text-gray-300">
              {user?.email}
            </p>

          </div>

          <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

        </div>

        {showProfile && (
          <ProfileDropdown
            user={user}
            onLogout={onLogout}
          />
        )}

      </div>

    </div>

    <div className="flex">

      {/* Sidebar */}
      <div className="w-64 bg-white min-h-screen shadow-lg p-6">

        <h2 className="text-xl font-bold mb-8">
          Menu
        </h2>

        <ul className="space-y-4 text-lg">

          <li
            onClick={fetchIdeas}
            className="cursor-pointer p-3 rounded-xl hover:bg-indigo-100 hover:text-indigo-700 transition font-semibold"
          >
            🏠 Dashboard
          </li>

          <li
            onClick={fetchMyIdeas}
            className="cursor-pointer p-3 rounded-xl hover:bg-indigo-100 hover:text-indigo-700 transition"
          >
            💡 My Ideas
          </li>

          <Link
            to="/likedideas"
            className="block p-3 rounded-xl hover:bg-pink-100 hover:text-pink-600 transition"
          >
            ❤️ Liked Ideas
          </Link>

          <Link
            to="/settings"
            className="block p-3 rounded-xl hover:bg-gray-100 hover:text-gray-700 transition"
          >
            ⚙️ Settings
          </Link>

        </ul>

      </div>

      {/* Main */}
      <div className="flex-1 p-8">

        <div className="flex justify-between items-center mb-8">

          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex items-center gap-3 w-[420px]">

            <FaSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none w-full"
            />

          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-indigo-700 hover:scale-105 transition"
          >
            <FaPlus />
            Create Idea
          </button>

        </div>

        <Stats ideas={filteredIdeas} />

        <div className="flex justify-between items-center my-8">

  <div>

    <h2 className="text-4xl font-bold text-slate-800">
      {showMyIdeas
        ? `My Ideas (${filteredIdeas.length})`
        : "Trending Ideas"}
    </h2>

    <p className="text-gray-500 mt-2">
      Welcome back, {user?.name}! Keep building amazing ideas 🚀
    </p>

  </div>

</div>

        {filteredIdeas.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-16 text-center">

            <div className="text-7xl mb-4">
              💡
            </div>

            <h2 className="text-3xl font-bold text-gray-700">
            🚀 Start your innovation journey

You haven't shared any ideas yet.

[ Create First Idea ]
            </h2>

            <p className="text-gray-500 mt-3">
              Create your first idea or try another search.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
            >
              + Create Idea
            </button>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {filteredIdeas.map((idea) => (

              <IdeaCard
                key={idea._id}
                id={idea._id}
                title={idea.title}
                description={idea.description}
                likes={idea.likes}
                comments={idea.comments}
                tag1={idea.tags?.[0]}
                tag2={idea.tags?.[1]}
                onDelete={deleteIdea}
                onEdit={setEditingIdea}
                onLike={likeIdea}
              />

            ))}

          </div>

        )}

      </div>

    </div>

    <CreateIdeaModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      addIdea={addIdea}
    />

    <EditIdeaModal
      isOpen={editingIdea !== null}
      onClose={() => setEditingIdea(null)}
      idea={editingIdea}
      updateIdea={updateIdea}
    />

  </div>
);
}
export default Dashboard;

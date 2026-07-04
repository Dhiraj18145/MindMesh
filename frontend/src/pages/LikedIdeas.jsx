import { useEffect, useState } from "react";
import API from "../services/api";
import IdeaCard from "../components/IdeaCard";

function LikedIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchLikedIdeas();
  }, []);

  const fetchLikedIdeas = async () => {
    try {
      const res = await API.get("/ideas/liked");
      setIdeas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const likeIdea = async (id) => {
    try {
      await API.put(`/ideas/${id}/like`);
      fetchLikedIdeas();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteIdea = async (id) => {
    try {
      await API.delete(`/ideas/${id}`);
      fetchLikedIdeas();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        ❤️ Liked Ideas
      </h1>

      {ideas.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            No liked ideas yet ❤️
          </h2>

          <p className="text-gray-500 mt-2">
            Like some ideas and they'll appear here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea._id}
              id={idea._id}
              title={idea.title}
              description={idea.description}
              likes={idea.likes}
              comments={idea.comments}
              tag1={idea.tags?.[0]}
              tag2={idea.tags?.[1]}
              onLike={likeIdea}
              onDelete={deleteIdea}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedIdeas;

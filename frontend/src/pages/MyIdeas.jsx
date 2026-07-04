import { useEffect, useState } from "react";
import API from "../services/api";
import IdeaCard from "../components/IdeaCard";

function MyIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const res = await API.get("/ideas/myideas");
      setIdeas(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteIdea = async (id) => {
    await API.delete(`/ideas/${id}`);
    fetchIdeas();
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        My Ideas
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <IdeaCard
            key={idea._id}
            {...idea}
            id={idea._id}
            tag1={idea.tags?.[0]}
            tag2={idea.tags?.[1]}
            onDelete={deleteIdea}
          />
        ))}
      </div>

    </div>
  );
}

export default MyIdeas;
import { useEffect, useState } from "react";

function EditIdeaModal({
  isOpen,
  onClose,
  idea,
  updateIdea,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (idea) {
      setTitle(idea.title || "");
      setDescription(idea.description || "");
    }
  }, [idea]);

  if (!isOpen || !idea) return null;

 const handleSubmit = () => {
  updateIdea({
    ...idea,
    title,
    description,
    tags: idea.tags,
  });

  onClose();
};

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] rounded-2xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Edit Idea
        </h2>

        <input
          className="border w-full p-3 rounded-lg mb-4"
          placeholder="Idea Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="5"
          className="border w-full p-3 rounded-lg"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditIdeaModal;
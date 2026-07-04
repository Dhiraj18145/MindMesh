import { useState } from "react";

function CreateIdeaModal({
  isOpen,
  onClose,
  addIdea,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    const tagArray = tags.split(",");

    addIdea({
      id: Date.now(),
      title,
      description,
      likes: 0,
      comments: 0,
      tag1: tagArray[0]?.trim() || "General",
      tag2: tagArray[1]?.trim() || "Idea",
    });

    setTitle("");
    setDescription("");
    setTags("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-[500px] rounded-2xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold mb-6">
          Create New Idea
        </h2>

        <input
          type="text"
          placeholder="Idea Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          rows="5"
          placeholder="Idea Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Tags (AI, Startup)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <div className="flex justify-end gap-4">

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Create
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateIdeaModal;
import { FaHeart, FaCommentDots } from "react-icons/fa";

function IdeaCard({
  id,
  title,
  description,
  likes,
  comments,
  tag1,
  tag2,
  onDelete,
  onEdit,
  onLike,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <div className="flex gap-2 mt-4">

        <span className="bg-indigo-100 px-3 py-1 rounded-full">
          {tag1}
        </span>

        <span className="bg-purple-100 px-3 py-1 rounded-full">
          {tag2}
        </span>

      </div>

      <div className="flex justify-between mt-6">

  <button
  onClick={() => onLike(id)}
  className="flex items-center gap-2 text-red-500"
>
  <FaHeart />
  {likes}
</button>

  <button className="flex items-center gap-2 text-blue-500">
    <FaCommentDots />
    {comments}
  </button>

  <button
    onClick={() => onDelete(id)}
    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
  >
    Delete
  </button>

  <button
  onClick={() =>
    onEdit({
      _id: id,
      title,
      description,
      tags: [tag1, tag2],
      likes,
      comments,
    })
  }
  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
>
  Edit
</button>

</div>
    </div>
  );
}

export default IdeaCard;
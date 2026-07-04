import { FaHeart, FaArrowRight, FaFire } from "react-icons/fa";

function HomeIdeaCard({
  title,
  description,
  tag1,
  tag2,
  likes,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>

      <div className="p-8">

        <div className="flex justify-between items-center mb-6">

          <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
            <FaFire />
            Trending
          </span>

          <span className="flex items-center gap-2 text-red-500 font-semibold">
            <FaHeart />
            {likes}
          </span>

        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
          {description}
        </p>

        <div className="flex gap-3 mb-8">

          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
            {tag1}
          </span>

          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            {tag2}
          </span>

        </div>

        <button
          className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all"
        >
          Explore Idea
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default HomeIdeaCard;
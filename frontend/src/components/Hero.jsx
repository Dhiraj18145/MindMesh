import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle, FaStar } from "react-icons/fa";

function Hero({ onGetStarted, onLearnMore }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white min-h-screen flex items-center justify-center">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-[130px] opacity-30"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full blur-[130px] opacity-30"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-60 h-60 bg-purple-400 rounded-full blur-[120px] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8"
        >
          <FaStar className="text-yellow-300" />
          Trusted by 1000+ Creators
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold leading-tight"
        >
          Turn Ideas Into
          <br />
          <span className="text-yellow-300">
            Reality
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mt-8 text-gray-100 max-w-3xl mx-auto"
        >
          Create, organize, collaborate and transform your ideas into
          successful projects with MindMesh.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
        >
          <button
            onClick={onGetStarted}
            className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            Get Started
            <FaArrowRight />
          </button>

          <button
  onClick={() => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="..."
>
  Learn More
</button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-8 mt-20"
        >
          <div>
            <h2 className="text-4xl font-bold">
              1200+
            </h2>
            <p className="text-gray-200 mt-2">
              Ideas Shared
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              500+
            </h2>
            <p className="text-gray-200 mt-2">
              Active Users
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              4.9★
            </h2>
            <p className="text-gray-200 mt-2">
              User Rating
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-20"
        >
          <button
            onClick={onLearnMore}
            className="flex flex-col items-center mx-auto text-white hover:text-yellow-300 transition"
          >
            <span className="text-3xl">↓</span>
            <span className="text-sm tracking-wide">
              Discover More
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
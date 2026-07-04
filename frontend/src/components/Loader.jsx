function Loader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="mt-5 text-gray-700 font-semibold text-lg">
          Loading...
        </p>

      </div>

    </div>
  );
}

export default Loader;
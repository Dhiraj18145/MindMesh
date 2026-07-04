import {
  FaBrain,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBrain />,
      title: "Smart Idea Management",
      desc: "Create, organize and manage all your ideas in one beautiful workspace.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborate Easily",
      desc: "Share ideas with teammates, receive feedback and build together.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Hub",
      desc: "Turn creative thoughts into real products with community support.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose MindMesh?
        </h2>

        <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto">
          Everything you need to capture, organize and grow your ideas
          from inspiration to execution.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <div className="text-5xl text-indigo-600 mb-8">
                {feature.icon}
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
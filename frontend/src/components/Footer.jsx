import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            🧠 MindMesh
          </h2>

          <p className="leading-7 text-gray-400">
            Turn your ideas into reality.
            Collaborate with creators, manage projects,
            and build the future together.
          </p>

          <div className="flex gap-5 mt-6 text-2xl">

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Product */}
        <div>

          <h3 className="text-white font-semibold text-xl mb-5">
            Product
          </h3>

          <ul className="space-y-3">

            <li className="hover:text-white cursor-pointer">
              Features
            </li>

            <li className="hover:text-white cursor-pointer">
              Dashboard
            </li>

            <li className="hover:text-white cursor-pointer">
              Trending Ideas
            </li>

            <li className="hover:text-white cursor-pointer">
              Community
            </li>

          </ul>

        </div>

        {/* Company */}
        <div>

          <h3 className="text-white font-semibold text-xl mb-5">
            Company
          </h3>

          <ul className="space-y-3">

            <li className="hover:text-white cursor-pointer">
              About
            </li>

            <li className="hover:text-white cursor-pointer">
              Careers
            </li>

            <li className="hover:text-white cursor-pointer">
              Privacy
            </li>

            <li className="hover:text-white cursor-pointer">
              Terms
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-white font-semibold text-xl mb-5">
            Contact
          </h3>

          <p className="mb-4">
            We'd love to hear from you.
          </p>

          <div className="flex items-center gap-3">

            <FaEnvelope className="text-indigo-400" />

            <span>
              support@mindmesh.com
            </span>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">

            © {new Date().getFullYear()} MindMesh.
            All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-gray-500 mt-3 md:mt-0">

            Built with

            <FaHeart className="text-red-500" />

            using React & Node.js

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
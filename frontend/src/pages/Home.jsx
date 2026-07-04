import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HomeIdeaCard from "../components/HomeIdeaCard";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {

  const navigate = useNavigate();

  const handleGetStarted = () => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }

  };

  return (
    <>

      <Navbar />

      <Hero
        onGetStarted={handleGetStarted}
      />

      <section id="features">
  <Features />
</section>

      {/* Trending Ideas */}

      <section id="ideas" className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Trending Ideas

          </h2>

          <p className="text-gray-500 text-center mt-5 max-w-2xl mx-auto">

            Explore some innovative ideas shared by creators around the world.

          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <HomeIdeaCard
              title="AI Interview Coach"
              description="Practice technical interviews with AI-generated questions and receive personalized feedback to improve your confidence."
              tag1="AI"
              tag2="Career"
              likes="1.2K"
            />

            <HomeIdeaCard
              title="Smart Expense Tracker"
              description="Track your expenses intelligently with visual analytics and AI-powered budgeting recommendations."
              tag1="Finance"
              tag2="Productivity"
              likes="950"
            />

            <HomeIdeaCard
              title="AI Travel Planner"
              description="Plan your trips in seconds using AI recommendations for hotels, attractions and personalized itineraries."
              tag1="Travel"
              tag2="AI"
              likes="870"
            />

          </div>

        </div>

      </section>

      <Stats />

      <section id="testimonials">
  <Testimonials />
</section>
      <Footer />

    </>
  );

}

export default Home;
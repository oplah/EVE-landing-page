import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import ChatFeature from "./components/ChatFeature";
import GoalFeature from "./components/GoalFeature";
import LearningFeature from "./components/LearningFeature";
import SmallFeatures from "./components/SmallFeatures";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="features">
      <Navigation />
      <Hero />
      <About />
      <ChatFeature />
      <GoalFeature />
      <LearningFeature />
      <SmallFeatures />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

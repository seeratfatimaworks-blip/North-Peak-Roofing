import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustIndicators from "./components/home/TrustIndicators";
import ProblemSolution from "./components/home/ProblemSolution";
import Services from "./components/home/Services";
import StormHailSection from "./components/home/StormHailSection";

function App() {
  return (
    <div id="top">
      <AnnouncementBar />

      <Navbar />

      <main>
        <Hero />

        <TrustIndicators />

        <ProblemSolution />

        <Services />

        <StormHailSection />

      </main>
    </div>
  );
}

export default App;
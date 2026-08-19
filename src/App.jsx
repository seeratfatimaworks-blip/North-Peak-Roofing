import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustIndicators from "./components/home/TrustIndicators";
import ProblemSolution from "./components/home/ProblemSolution";
import Services from "./components/home/Services";

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

      </main>
    </div>
  );
}

export default App;
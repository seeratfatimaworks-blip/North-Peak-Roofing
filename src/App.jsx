import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustIndicators from "./components/home/TrustIndicators";
import ProblemSolution from "./components/home/ProblemSolution";

function App() {
  return (
    <div id="top">
      <AnnouncementBar />

      <Navbar />

      <main>
        <Hero />

        <TrustIndicators />

        <ProblemSolution />
      </main>
    </div>
  );
}

export default App;
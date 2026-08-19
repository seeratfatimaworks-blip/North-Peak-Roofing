import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustIndicators from "./components/home/TrustIndicators";
import ProblemSolution from "./components/home/ProblemSolution";
import Services from "./components/home/Services";
import StormHailSection from "./components/home/StormHailSection";
import WhyNorthPeak from "./components/home/WhyNorthPeak";
import HowItWorks from "./components/home/HowItWorks";
import ProjectShowcase from "./components/home/ProjectShowcase";
import Testimonials from "./components/home/Testimonials";
import ServiceAreas from "./components/home/ServiceAreas";

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



        <HowItWorks />
        <WhyNorthPeak />
        <ProjectShowcase />

        <Testimonials />

        <ServiceAreas />

      </main>
    </div>
  );
}

export default App;
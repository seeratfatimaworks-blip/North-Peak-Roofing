import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";

function App() {
  return (
    <div id="top">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
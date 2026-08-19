import siteConfig from "./config/siteConfig";

function App() {
  return (
    <main>
      <h1>{siteConfig.businessName}</h1>
      <p>{siteConfig.tagline}</p>
      <p>Frontend foundation ready.</p>
    </main>
  );
}

export default App;
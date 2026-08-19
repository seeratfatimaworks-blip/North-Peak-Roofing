import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div id="top">
      <AnnouncementBar />
      <Navbar />

      <main>
        <section
          style={{
            minHeight: "70vh",
            display: "grid",
            placeItems: "center",
            padding: "4rem 1.25rem",
            textAlign: "center",
          }}
        >
          <div>
            <span className="eyebrow">
              NorthPeak Roofing Co.
            </span>

            <h1
              className="display"
              style={{ marginTop: "1rem" }}
            >
              Built to Protect
              <br />
              What Matters.
            </h1>

            <p
              className="body-large"
              style={{
                maxWidth: "600px",
                margin: "1.5rem auto 0",
                color: "var(--color-muted)",
              }}
            >
              Premium roofing services for Denver homeowners.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
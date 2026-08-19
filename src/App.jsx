import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import SectionHeading from "./components/ui/SectionHeading";
import Badge from "./components/ui/Badge";
import siteConfig from "./config/siteConfig";

function App() {
  return (
    <main>
      <section className="section">
        <Container>
          <div style={{ display: "grid", gap: "2rem" }}>
            <div>
              <span className="eyebrow">NorthPeak Roofing</span>

              <h1 className="display">
                {siteConfig.businessName}
              </h1>

              <p className="body-large">
                {siteConfig.tagline}
              </p>
            </div>

            <SectionHeading
              eyebrow="Design System"
              title="A premium foundation for the NorthPeak website."
              description="This temporary preview confirms that our typography, spacing, colors, and reusable UI components are working correctly."
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <Button>Get Free Roof Inspection</Button>

              <Button variant="secondary">
                Call NorthPeak
              </Button>

              <Badge>Storm Damage</Badge>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default App;
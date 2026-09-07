import ProtectedRoute from "./components/admin/ProtectedRoute";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { checkBackend } from "./services/api";

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
import FAQ from "./components/home/FAQ";
import FinalCTA from "./components/home/FinalCTA";
import LeadForm from "./components/home/LeadForm";
import Footer from "./components/layout/Footer";
import StickyMobileCTA from "./components/layout/StickyMobileCTA";

import AdminLogin from "./components/admin/AdminLogin";
import LeadsDashboard from "./components/admin/LeadsDashboard";

function PublicWebsite() {
  return (
    <div id="top">
      <AnnouncementBar />

      <Navbar />

      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <ProblemSolution />
        <StormHailSection />
        <WhyNorthPeak />
        <HowItWorks />
        <ProjectShowcase />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <LeadForm />
        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div>
      <LeadsDashboard />
    </div>
  );
}

function App() {
  useEffect(() => {
    checkBackend().catch((error) => {
      console.error("BACKEND CONNECTION FAILED:", error);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* Public client website */}
        <Route
          path="/"
          element={<PublicWebsite />}
        />

        {/* Admin login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Admin dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Unknown URLs */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

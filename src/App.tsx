import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home";
import { ComingSoon } from "@/pages/ComingSoon";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let in-page anchors scroll normally
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ComingSoon title="About" />} />
        <Route path="/our-work" element={<ComingSoon title="Our Work" />} />
        <Route path="/impact" element={<ComingSoon title="Impact" />} />
        <Route path="/journey" element={<ComingSoon title="Our Journey" />} />
        <Route path="/stories" element={<ComingSoon title="Stories" />} />
        <Route path="/get-involved" element={<ComingSoon title="Get Involved" />} />
        <Route path="/donate" element={<ComingSoon title="Donate" />} />
        <Route path="/gallery" element={<ComingSoon title="Gallery" />} />
        <Route path="/news" element={<ComingSoon title="News & Media" />} />
        <Route path="/transparency" element={<ComingSoon title="Reports & Transparency" />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="*" element={<ComingSoon title="Page not found" />} />
      </Routes>
    </Layout>
  );
}

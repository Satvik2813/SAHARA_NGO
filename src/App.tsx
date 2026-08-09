import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { OurWork } from "@/pages/OurWork";
import { Impact } from "@/pages/Impact";
import { Journey } from "@/pages/Journey";
import { Stories } from "@/pages/Stories";
import { Gallery } from "@/pages/Gallery";
import { News } from "@/pages/News";
import { Transparency } from "@/pages/Transparency";
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
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/get-involved" element={<ComingSoon title="Get Involved" />} />
        <Route path="/donate" element={<ComingSoon title="Donate" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="*" element={<ComingSoon title="Page not found" />} />
      </Routes>
    </Layout>
  );
}

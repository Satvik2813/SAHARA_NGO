import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home";

// Route-level code splitting: every page except Home (the near-certain first
// paint) loads on demand, keeping the initial JS payload small.
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const OurWork = lazy(() => import("@/pages/OurWork").then((m) => ({ default: m.OurWork })));
const Impact = lazy(() => import("@/pages/Impact").then((m) => ({ default: m.Impact })));
const Journey = lazy(() => import("@/pages/Journey").then((m) => ({ default: m.Journey })));
const Stories = lazy(() => import("@/pages/Stories").then((m) => ({ default: m.Stories })));
const Gallery = lazy(() => import("@/pages/Gallery").then((m) => ({ default: m.Gallery })));
const News = lazy(() => import("@/pages/News").then((m) => ({ default: m.News })));
const Transparency = lazy(() => import("@/pages/Transparency").then((m) => ({ default: m.Transparency })));
const Donate = lazy(() => import("@/pages/Donate").then((m) => ({ default: m.Donate })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import("@/pages/Privacy").then((m) => ({ default: m.Privacy })));
const GetInvolved = lazy(() => import("@/pages/GetInvolved").then((m) => ({ default: m.GetInvolved })));
const ComingSoon = lazy(() => import("@/pages/ComingSoon").then((m) => ({ default: m.ComingSoon })));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let in-page anchors scroll normally
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

/** Minimal, motion-safe loading state for lazily-loaded routes. */
function RouteFallback() {
  return (
    <div className="container-page py-24 flex justify-center" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <div className="h-8 w-8 rounded-full border-2 border-brand-green-200 border-t-brand-forest animate-spin motion-reduce:animate-none" />
    </div>
  );
}

export function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<ComingSoon title="Page not found" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

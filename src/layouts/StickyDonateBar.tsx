import { useLocation } from "react-router-dom";
import { Button } from "@/components/Button";

/** Mobile-only sticky Donate affordance — hidden on the Donate page itself. */
export function StickyDonateBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/donate")) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-cream/95 backdrop-blur border-t border-line px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button to="/donate" variant="primary" className="w-full">
        Donate to SAHARA
      </Button>
    </div>
  );
}

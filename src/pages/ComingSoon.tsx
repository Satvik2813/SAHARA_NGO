import { Seo } from "@/components/Seo";
import { Button } from "@/components/Button";

/** Temporary placeholder for routes not yet built in this incremental build. */
export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="container-page py-24 text-center">
      <Seo title={`${title} — SAHARA`} description="This page is under construction." />
      <h1 className="text-3xl mb-4">{title}</h1>
      <p className="text-ink-muted mb-6">This page is being built.</p>
      <Button to="/">Back home</Button>
    </div>
  );
}

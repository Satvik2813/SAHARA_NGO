import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface CopyFieldProps {
  label: string;
  value: string;
}

/** A labeled value with a one-tap copy button and an aria-live confirmation. */
export function CopyField({ label, value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) -- selection still visible to copy manually.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-line last:border-b-0">
      <div className="min-w-0">
        <p className="text-xs text-ink-muted">{label}</p>
        <p className="font-mono text-sm text-ink break-all">{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className={cn(
          "shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-sm border transition duration-fast",
          copied ? "border-state-success text-state-success bg-state-success/10" : "border-brand-forest text-brand-forest hover:bg-brand-green-050"
        )}
        aria-label={`Copy ${label}: ${value}`}
      >
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </div>
  );
}

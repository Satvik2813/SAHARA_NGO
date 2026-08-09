import { useEffect, useRef } from "react";

/** Traps focus within `ref` while `active`, and restores focus to the trigger on close. */
export function useFocusTrap(active: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const container = ref.current;
    const focusable = container?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      previouslyFocused.current?.focus();
    };
  }, [active]);

  return ref;
}

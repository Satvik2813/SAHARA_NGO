/** Tiny classnames helper — avoids adding a dependency for this alone. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

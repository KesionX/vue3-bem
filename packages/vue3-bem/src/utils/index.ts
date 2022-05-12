export function getClassName(b: string, e?: string | null, m?: string): string {
  return `${b}${e ? `__${e}` : ""}${m ? `--${m}` : ""}`;
}

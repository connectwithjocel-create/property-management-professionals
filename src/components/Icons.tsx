// Minimal line icons (1.5px stroke), drawn for this site. Used sparingly.
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Arrow = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Phone = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const Mail = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Pin = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Play = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
);
export const Facebook = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" /></svg>
);
export const Menu = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
);
export const Close = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);

import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "ghost";
}

export function MagneticButton({ children, variant = "solid", className = "", ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    if (inner.current) inner.current.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
    if (inner.current) inner.current.style.transform = "";
  };

  const base =
    "group relative inline-flex items-center justify-center px-9 py-5 font-display text-lg uppercase tracking-[0.2em] transition-[box-shadow,background] duration-500 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-edge text-bone hover:shadow-[0_0_60px_-5px_var(--edge-glow)]"
      : "border border-bone/40 text-bone hover:border-edge hover:text-edge";

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`${base} ${styles} ${className}`}
      style={{ transition: "transform 400ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 500ms ease, background 500ms ease, border-color 500ms ease, color 500ms ease" }}
      {...rest}
    >
      <span ref={inner} className="inline-flex items-center gap-3" style={{ transition: "transform 400ms cubic-bezier(0.2,0.8,0.2,1)" }}>
        {children}
      </span>
    </button>
  );
}

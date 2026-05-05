import { useEffect, useRef, useState } from "react";

export function EdgeCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor='hover']");
      setHover(!!interactive);
    };
    const raf = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      requestAnimationFrame(raf);
    };
    window.addEventListener("mousemove", move);
    requestAnimationFrame(raf);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-edge"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-edge transition-[width,height,opacity,border-color] duration-300"
        style={{
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          opacity: hover ? 1 : 0.6,
          marginLeft: hover ? -10 : 0,
          marginTop: hover ? -10 : 0,
        }}
      />
    </>
  );
}

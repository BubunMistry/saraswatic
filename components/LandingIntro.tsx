"use client";
import { useEffect, useState, useRef } from "react";

interface BubbleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface LandingIntroProps {
  onFinish: () => void;
}

export default function LandingIntro({ onFinish }: LandingIntroProps) {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [buttonPos, setButtonPos] = useState({ x: 50, y: 20 });
  const [buttonVel, setButtonVel] = useState({ x: 0.12, y: 0.1 });
  const spinnerRef = useRef<HTMLImageElement>(null);

  // 🎈 Increased bubble density (250 bubbles, multiple sizes)
  useEffect(() => {
    const generated = Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2, // even more small-medium elegant
      vx: (Math.random() - 0.5) * 0.03,
      vy: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.4 + 0.15,
    }));
    setBubbles(generated);
  }, []);

  // 🧲 Magnetic bubble effect
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setBubbles((prev) =>
        prev.map((b) => {
          const dx = mousePos.x - b.x;
          const dy = mousePos.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let newX = b.x + b.vx;
          let newY = b.y + b.vy;

          if (dist < 10) {
            newX -= dx * 0.04;
            newY -= dy * 0.04;
          }

          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;

          return { ...b, x: newX, y: newY };
        })
      );

      // 🛟 Floating Unhome button
      setButtonPos((prev) => {
        let nx = prev.x + buttonVel.x;
        let ny = prev.y + buttonVel.y;
        let vx = buttonVel.x;
        let vy = buttonVel.y;

        if (nx > 90 || nx < 10) vx = -vx;
        if (ny > 85 || ny < 15) vy = -vy;

        setButtonVel({ x: vx, y: vy });
        return { x: nx, y: ny };
      });

      // 🌀 Spinner gentle float
      if (spinnerRef.current) {
        const t = Date.now() * 0.001;
        spinnerRef.current.style.transform = `translateY(${Math.sin(t) * 6}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos, buttonVel]);

  // Track mouse
  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", trackMouse);
    return () => window.removeEventListener("mousemove", trackMouse);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">

      {/* Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            background: "rgba(255, 255, 255, 0.6)",
            filter: "blur(2px)",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.2s linear",
          }}
        />
      ))}

      {/* Title & Spinner */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 select-none">
        <h1 className="text-3xl font-[cursive] tracking-widest">Collage Saraswati</h1>

        <img
          ref={spinnerRef}
          src="/images/assets/spiral.webp"
          className="w-28 mt-6 cursor-pointer animate-spin-slow"
          onClick={onFinish}
        />
      </div>

      {/* Floating Unhome Button */}
      <button
        onClick={() => new Audio("/images/assets/intro.mp3").play()}
        className="absolute z-20 px-6 py-2 text-lg rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm cursor-pointer hover:border-red-500 hover:text-red-500"
        style={{ left: `${buttonPos.x}%`, top: `${buttonPos.y}%`, transform: "translate(-50%, -50%)" }}
      >
        <span style={{ color: "red" }}>Un</span>home
      </button>

      {/* Spinner Animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

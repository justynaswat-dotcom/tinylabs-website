import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function DotSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const lightRef = useRef({ theta: Math.PI * 0.85, phi: Math.PI * 0.35 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lightRef.current.theta -= dx * 0.012;
    lightRef.current.phi += dy * 0.012;
    lightRef.current.phi = Math.max(0.12, Math.min(Math.PI - 0.12, lightRef.current.phi));
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => { isDraggingRef.current = false; };
  const handleMouseLeave = () => { isDraggingRef.current = false; };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const radius = Math.min(W, H) * 0.38;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // Slow drift when idle
      if (!isDraggingRef.current) {
        timeRef.current += 0.004;
        lightRef.current.theta = Math.PI * 0.85 + Math.sin(timeRef.current * 0.7) * 0.18;
        lightRef.current.phi = Math.PI * 0.35 + Math.sin(timeRef.current * 0.5) * 0.06;
      }

      const { theta, phi } = lightRef.current;

      // Light direction in 3D (spherical → cartesian)
      const lx = Math.sin(phi) * Math.cos(theta);
      const ly = -Math.cos(phi);

      // Project light onto 2D canvas — highlight center
      const hx = cx + lx * radius * 0.48;
      const hy = cy + ly * radius * 0.48;

      // Shadow center (opposite side)
      const sx = cx - lx * radius * 0.35;
      const sy = cy - ly * radius * 0.35;

      // ── Drop shadow underneath the sphere ──
      ctx.save();
      ctx.shadowColor = "rgba(80,65,50,0.18)";
      ctx.shadowBlur = 48;
      ctx.shadowOffsetX = 6;
      ctx.shadowOffsetY = 12;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#e8e4de";
      ctx.fill();
      ctx.restore();

      // ── Base gradient: white highlight → warm gray shadow ──
      const baseGrad = ctx.createRadialGradient(hx, hy, 0, cx, cy, radius * 1.02);
      baseGrad.addColorStop(0.00, "#ffffff");
      baseGrad.addColorStop(0.30, "#f4f2ef");
      baseGrad.addColorStop(0.62, "#dedad4");
      baseGrad.addColorStop(0.85, "#c8c3bb");
      baseGrad.addColorStop(1.00, "#b5afa6");

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = baseGrad;
      ctx.fill();
      ctx.restore();

      // ── Soft shadow on opposite side ──
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const shadowGrad = ctx.createRadialGradient(sx, sy, radius * 0.05, sx, sy, radius * 1.05);
      shadowGrad.addColorStop(0.00, "rgba(50,40,30,0.22)");
      shadowGrad.addColorStop(0.55, "rgba(50,40,30,0.08)");
      shadowGrad.addColorStop(1.00, "rgba(50,40,30,0)");
      ctx.fillStyle = shadowGrad;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // ── Specular highlight ──
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const specGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, radius * 0.40);
      specGrad.addColorStop(0.00, "rgba(255,255,255,0.96)");
      specGrad.addColorStop(0.20, "rgba(255,255,255,0.65)");
      specGrad.addColorStop(0.55, "rgba(255,255,255,0.15)");
      specGrad.addColorStop(1.00, "rgba(255,255,255,0)");
      ctx.fillStyle = specGrad;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // ── Rim darkening ──
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const rimGrad = ctx.createRadialGradient(cx, cy, radius * 0.70, cx, cy, radius * 1.02);
      rimGrad.addColorStop(0.00, "rgba(0,0,0,0)");
      rimGrad.addColorStop(1.00, "rgba(0,0,0,0.16)");
      ctx.fillStyle = rimGrad;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="cursor-grab active:cursor-grabbing w-full aspect-square"
    >
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        style={{ width: "100%", height: "100%", display: "block" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />
    </motion.div>
  );
}

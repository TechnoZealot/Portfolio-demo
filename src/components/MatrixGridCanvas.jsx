import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * Renders an interactive matrix-dot grid that creates a perspective ripple wave
 * when the cursor moves over it, with subtle ambient breathing motion.
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates and target
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      radius: 170, // Interaction sphere
      isActive: false,
    };

    // Grid configuration
    const SPACING = 34; // Distance between matrix dots
    let cols = Math.ceil(width / SPACING) + 2;
    let rows = Math.ceil(height / SPACING) + 2;

    let points = [];

    const initPoints = () => {
      points = [];
      cols = Math.ceil(width / SPACING) + 2;
      rows = Math.ceil(height / SPACING) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = c * SPACING;
          const by = r * SPACING;
          points.push({
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            vx: 0,
            vy: 0,
            originAngle: Math.atan2(by - height / 2, bx - width / 2),
          });
        }
      }
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initPoints();
    };

    handleResize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Clear with subtle transparency for high-speed motion, or crisp clear
      ctx.clearRect(0, 0, width, height);

      // Render dots
      const numPoints = points.length;
      for (let i = 0; i < numPoints; i++) {
        const pt = points[i];

        // 1. Idle perspective ripple (cyber ambient breathing)
        const idleWave =
          Math.sin(pt.baseX * 0.008 + pt.baseY * 0.008 + time) * 3 +
          Math.cos(pt.baseX * 0.012 - time * 0.8) * 2;

        // 2. Cursor repulsion / ripple wave
        const dx = mouse.x - pt.baseX;
        const dy = mouse.y - pt.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let pushX = 0;
        let pushY = 0;
        let intensity = 0;

        if (dist < mouse.radius && mouse.isActive) {
          const factor = (1 - dist / mouse.radius);
          // Nonlinear bell curve push
          const power = Math.sin(factor * Math.PI) * 22;
          const angle = Math.atan2(dy, dx);
          pushX = -Math.cos(angle) * power;
          pushY = -Math.sin(angle) * power;
          intensity = factor;
        }

        // Apply smooth target positioning
        const targetX = pt.baseX + pushX;
        const targetY = pt.baseY + pushY + idleWave;

        pt.x += (targetX - pt.x) * 0.2;
        pt.y += (targetY - pt.y) * 0.2;

        // 3. Dot Styling: Cyber Emerald + Lime highlights
        let radius = 1.15;
        let alpha = 0.22;
        let fill = 'rgba(16, 185, 129, '; // Neon Emerald base

        if (intensity > 0.05) {
          // Near cursor: brighten, expand, and shift toward bright lime (#a3e635)
          radius = 1.2 + intensity * 2.4;
          alpha = 0.35 + intensity * 0.65;
          fill = intensity > 0.5 ? 'rgba(163, 230, 53, ' : 'rgba(52, 211, 153, ';

          // Add faint glow halo for strong touch points
          if (intensity > 0.65) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, radius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${intensity * 0.2})`;
            ctx.fill();
          }
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fill + alpha + ')';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}

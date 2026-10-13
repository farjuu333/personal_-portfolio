import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor
 * Provides an ultra-smooth magnetic follower cursor with hover expansion over
 * interactive targets (links, buttons, inputs, cards). Automatically hides on touch devices.
 */
export default function CustomCursor({ enabled = true }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const ringPosRef = useRef({ x: -100, y: -100 });
  const targetPosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Detect touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable or card element
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, .spotlight-card, [data-cursor="pointer"]');
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerping for outer follower ring
    const render = () => {
      const lerp = 0.18;
      ringPosRef.current.x += (targetPosRef.current.x - ringPosRef.current.x) * lerp;
      ringPosRef.current.y += (targetPosRef.current.y - ringPosRef.current.y) * lerp;
      setRingPos({ x: ringPosRef.current.x, y: ringPosRef.current.y });
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [enabled, isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
        }}
      />
      {/* Outer magnetic follower ring */}
      <div
        className={`custom-cursor-ring ${isHovered ? 'cursor-hover' : ''}`}
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
      />
    </>
  );
}

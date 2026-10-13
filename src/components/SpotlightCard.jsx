import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * SpotlightCard
 * Implements:
 * 1. Dynamic spotlight mouse tracking (radial-gradient following mouse)
 * 2. 3D card tilt effect on mouse hover with Framer Motion spring physics
 */
export default function SpotlightCard({
  children,
  className = '',
  enableTilt = true,
  tiltStrength = 10,
  onClick,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltStrength, tiltStrength]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Mouse coordinates relative to card
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Set CSS custom properties for radial gradient spotlight
    cardRef.current.style.setProperty('--mouse-x', `${clientX}px`);
    cardRef.current.style.setProperty('--mouse-y', `${clientY}px`);

    if (enableTilt) {
      // Normalized coordinates from -0.5 to 0.5
      const normX = clientX / rect.width - 0.5;
      const normY = clientY / rect.height - 0.5;
      x.set(normX);
      y.set(normY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformPerspective: 1000,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

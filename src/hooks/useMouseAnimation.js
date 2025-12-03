"use client";
import { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export const useMouseAnimation = (sectionId) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      
      setIsMouseInSection(true);
      setMousePosition({ x, y });
      mouseX.set(x - centerX);
      mouseY.set(y - rect.height / 2);
    };

    const handleMouseLeave = () => {
      setIsMouseInSection(false);
    };

    const section = document.getElementById(sectionId);
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [mouseX, mouseY, sectionId]);

  return {
    mousePosition,
    isMouseInSection,
    springX,
    springY
  };
};
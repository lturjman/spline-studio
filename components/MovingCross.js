"use client";
import React, { useEffect, useState } from "react";

function MovingCross() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      // Générer un petit déplacement aléatoire entre -5 et +5 px
      const deltaX = (Math.random() - 0.5) * 10;
      const deltaY = (Math.random() - 0.5) * 10;
      setPosition({ x: deltaX, y: deltaY });
    }, 150); // toutes les 150ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute"
      style={{
        position: "relative",
        width: "40px",
        height: "40px",
        left: position.x,
        top: position.y,
        transition: "left 0.15s ease, top 0.15s ease",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "400px",
          height: "1px",
          backgroundColor: "black",
          transform: "translate(-50%, -50%) rotate(45deg)",
          borderRadius: "2px",
          boxShadow: "0 0 2px rgba(0,0,0,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "1px",
          backgroundColor: "black",
          transform: "translate(-50%, -50%) rotate(-45deg)",
          borderRadius: "2px",
          boxShadow: "0 0 2px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}

export default MovingCross;

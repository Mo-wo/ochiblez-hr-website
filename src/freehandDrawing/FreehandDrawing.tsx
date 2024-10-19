import React from "react";
import "./style.css";

export const FreehandDrawing: React.FC = () => {
  return(
    <svg  viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 50 Q 60 10, 120 40 T 240 30 Q 270 55, 300 20"
      stroke="white"
      stroke-width="4"
      fill="transparent"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="400"
      stroke-dashoffset="400"
      id="underline"
    />
    </svg>
  );
};

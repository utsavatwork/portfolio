import { Canvas } from "./components/Canvas";
import { HomePage } from "./components/home-page";
import { InProgressCard } from "./components/in-progress-card";
import { MiniMap } from "./components/MiniMap";
import { EducationSection } from "./components/sections/education-section";

// Scroll to central 100vw x 100vh section.
window.scrollTo({
  top: window.innerHeight,
  left: window.innerWidth,
  behavior: 'auto', // Instant positioning
});

// Main entry point function
window.addEventListener('DOMContentLoaded', () => {
  customElements.define('in-progress-card', InProgressCard);
  customElements.define('home-page', HomePage);
  customElements.define('education-section', EducationSection);
  customElements.define('app-canvas', Canvas);
  customElements.define("mini-map", MiniMap);
  
  const root = document.getElementById('root') as HTMLDivElement;
  if (!root) {
    throw new Error('Something went wrong. Could not render page.');
  } 
  
  const canvas = document.createElement('app-canvas') as Canvas;
  const miniMap = document.createElement('mini-map') as MiniMap;
  root.append(canvas, miniMap);
});
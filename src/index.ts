import { Canvas } from "./components/Canvas";
import { InProgressCard } from "./components/InProgressCard";
import { MiniMap } from "./components/MiniMap";

// Scroll to central 100vw x 100vh section.
window.scrollTo({
  top: window.innerHeight,
  left: window.innerWidth,
  behavior: 'auto', // Instant positioning
});

// main entry point
window.addEventListener('DOMContentLoaded', () => {
  customElements.define('app-canvas', Canvas);
  customElements.define("mini-map", MiniMap);
  customElements.define('in-progress-card', InProgressCard);
  // customElements.define('app-canvas', Canvas);

  const root = document.getElementById('root') as HTMLDivElement;
  if (!root) {
    throw new Error('Something went wrong. Could not render page.');
  } 
  
  const canvas = document.createElement('app-canvas') as Canvas;
  const miniMap = document.createElement('mini-map') as MiniMap;
  root.append(canvas, miniMap);
});
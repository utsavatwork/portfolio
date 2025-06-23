import { Canvas } from "./components/Canvas";
import { HomePage } from "./components/home-page";
import { InProgressCard } from "./components/in-progress-card";
import { MiniMap } from "./components/MiniMap";
import { EducationSection } from "./components/sections/education-section";

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

  // Scroll to central 100vw x 100vh section.
  // Also, the placement of this code is important to ensure that the DOM is 
  // fully loaded and hence container div styling is set to 300vw x 300vh before
  // attempting to scroll.
  window.scrollTo({
    top: window.innerHeight,
    left: window.innerWidth,
    behavior: 'auto', // Instant positioning
  });
});
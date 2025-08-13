import { Canvas } from "./components/canvas";
import { InProgressCard } from "./components/in-progress-card";
import { MiniMap } from "./components/mini-map";
import './styles/index.css';
import './styles/tailwind-theme.css';

// Main entry point function
window.addEventListener('DOMContentLoaded', () => {
  customElements.define('in-progress-card', InProgressCard);
  // customElements.define('education-section', EducationSection);
  // customElements.define('app-canvas', Canvas);
  
  const root = document.getElementById('root') as HTMLDivElement;
  if (!root) {
    throw new Error('Something went wrong. Could not render page.');
  } 
  
  // const canvas = document.createElement('app-canvas') as Canvas;
  // const miniMap = document.createElement('mini-map') as MiniMap;
  root.append(Canvas.render(), new MiniMap().render());

  // Scroll to central 100vw x 100vh section.
  // Also, the placement of this code is important to ensure that the DOM is 
  // fully loaded and hence container div styling is set to 300vw x 300vh before
  // attempting to scroll.
  window.scrollTo({
    top: 1 * window.innerHeight,
    left: 1 * window.innerWidth,
    behavior: 'auto', // Instant positioning
  });
});
import { Canvas } from "./components/canvas";
import { MiniMap } from "./components/mini-map";
import './styles/index.css';
import './styles/tailwind-theme.css';

// Main entry point function
window.addEventListener('DOMContentLoaded', () => {  
  const root = document.getElementById('root') as HTMLDivElement;
  if (!root) {
    throw new Error('Something went wrong. Could not render page.');
  }
  
  const canvas = Canvas.build();
  const miniMap = new MiniMap().build();
  root.append(canvas, miniMap);

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
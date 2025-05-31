export class MiniMap extends HTMLElement {
  private isOpen = false;
  private activeSection = { row: 1, col: 1 };

  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Isolate styles
  }

  connectedCallback() {
    this.render(); // Initial render

    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    this.activeSection = {
      row: Math.round(scrollY / viewportHeight),
      col: Math.round(scrollX / viewportWidth),
    };

    this.render(); // Update the UI when scrolling
  }

  handleClick(row: number, col: number) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: row * viewportHeight,
      left: col * viewportWidth,
      behavior: "smooth",
    });
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.render();
  }

  attachEventListeners() {
    this.shadowRoot?.querySelectorAll(".grid-cell").forEach(cell => {
      const row = Number(cell.getAttribute("data-row"));
      const col = Number(cell.getAttribute("data-col"));
      console.log(row + "  " + col);

      cell.addEventListener("click", () => this.handleClick(row, col));
    });
  }

  render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 50;
        }
        .button {
          width: 7rem;
          height: 7rem;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          border: none;
          cursor: pointer;
        }
        #minimap-container {
          width: 25vw;
          height: 25vh;
          position: fixed;
          bottom: 3vh;
          right: 2vw;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 50;
        }
        .close-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 2rem;
          height: 2rem;
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          width: 100%;
          height: 100%;
        }
        .grid-cell {
          border: 1px solid #ccc;
          cursor: pointer;
        }
        .active {
          border: 2px solid blue;
          opacity: 0.8;
        }
        #mini-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(0.0833);
          transform-origin: top left;
          pointer-events: none;
        }
      </style>

      ${this.isOpen ? `
        <div id="minimap-container">
          <button class="close-btn" onclick="this.getRootNode().host.toggleOpen()">✖</button>
          <div class="grid">
            ${[0,1,2].map(row => 
              [0,1,2].map(col => `<div data-row="${row}" data-col="${col}" class="grid-cell ${this.activeSection.row === row && this.activeSection.col === col ? 'active' : ''}"></div>`).join("")
            ).join("")}
          </div>

          <app-canvas id='mini-canvas'></app-canvas>
        </div>
      ` : `
        <button id="minimapBtn" class="button" onclick="this.getRootNode().host.toggleOpen()">
          <img src="public/my-navigation.png" alt="Open MiniMap" style="width: 5rem; height: 5rem;">
        </button>
      `}
    `;

    this.attachEventListeners(); 
  }
}

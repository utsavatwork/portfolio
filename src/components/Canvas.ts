export class Canvas extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Add styling
    const style = document.createElement('style') as HTMLStyleElement;
    style.textContent = `
      #container {
        position: relative;
        width: 300vw;
        height: 300vh;
        overflow: 'hidden';
      }
      .grid-item {
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .watermarked-container {
        width: 300px;
        height: 300px;
        background-image: url("/images/watermark.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain; /* Adjust size */
        opacity: 0.3; /* Fades the watermark */
      }
    `;
    this.shadowRoot?.appendChild(style);

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    document.getElementById('container')?.scrollTo({
      top: viewportHeight,
      left: viewportWidth,
      behavior: "smooth",
    });
    
  }

  init(): HTMLDivElement {
    const container = document.createElement('div') as HTMLDivElement;
    container.id = 'container';
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const div = document.createElement("div");
      div.className = "grid-item";
      div.style.top = `${row * 100}vh`;
      div.style.left = `${col * 100}vw`;
      if (row === 1 && col === 1) {
        div.innerHTML = `<home-page></home-page>`;
      } else if (row === 0 && col === 0) {
        const edu = document.createElement('education-section');
        div.appendChild(edu);
      } else {
        div.innerHTML = `<in-progress-card></in-progress-card>`;
      }
      container.appendChild(div);
    }

    return container;
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(this.init());


  }
}


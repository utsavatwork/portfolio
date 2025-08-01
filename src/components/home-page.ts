export class HomePage extends HTMLElement {
  private shadowDom!: ShadowRoot;

  private static readonly styling = `
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 4vw;
    }
    img {
      border-radius: 50%;
      width: 20vw;
      height: auto;
    }
  `

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    if (!this.shadowRoot) {
      throw new Error(
          'Something went wrong. Could not render HomePage component.');
    }
    this.shadowDom = this.shadowRoot;
  }

  connectedCallback() {
    this.rerender();
  }

  rerender() {
    this.shadowDom.innerHTML = `
      <style>${HomePage.styling}</style>
      <div class="container">
        <img src="/public/me.jpg" />
        <div>
          <h1>Utsav Tayde</h1>
          <p>
            <strong>Software Engineer</strong><br>
            <i class='ri-map-pin-fill'></i>Pune, India
          </p>
        </div>
      </div>
    `;
  }
}
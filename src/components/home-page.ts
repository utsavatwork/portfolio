export class HomePage extends HTMLElement {
  private shadowDom!: ShadowRoot;

  private static readonly styling = `
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: #f0f0f0;
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
    this.shadowDom.innerHTML = `<div class="container">
      <h1>Utsav Tayde</h1>
      <p>
        <strong>Software Engineer</strong><br>
        <i class='ri-map-pin-fill'></i>Pune, India
      </p>
    </div>`;
  }
}
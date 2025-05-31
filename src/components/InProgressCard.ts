export class InProgressCard extends HTMLElement {
  private shadowDom!: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    if (!this.shadowRoot) {
      throw new Error(
          'Something went wrong. Could not render InProgressCard component.');
    }
    this.shadowDom = this.shadowRoot;
  }

  connectedCallback() {
    this.rerender();
  }

  rerender() {
    this.shadowDom.innerHTML = `<div>
      <h1>This section is under progress.</h1>
    </div>`;
  }
}

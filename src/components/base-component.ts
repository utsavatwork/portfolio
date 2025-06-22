export abstract class BaseComponent extends HTMLElement {
  protected shadowDom!: ShadowRoot;
  private readonly stylingElement = 
      document.createElement('style') as HTMLStyleElement;

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
    this.shadowDom.appendChild(this.stylingElement);
    this.rerender();
  }

  abstract rerender(): void;
  
  addStyling(cssRules: string): void {
    this.stylingElement.textContent += cssRules;
  }
}
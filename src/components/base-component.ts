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
    this.shadowDom.innerHTML = '';
    this.addStyling('');
    this.rerender();
  }

  disconnectedCallback() {
    // TODO: Research about what is suppose to be in here.
  }

  abstract rerender(): void;
  
  addStyling(cssRules: string): void {
    // Add materialize icons library
    const materializeIconLib = document.createElement('link')
    materializeIconLib.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    materializeIconLib.rel = 'stylesheet';
    this.shadowDom.appendChild(materializeIconLib);

    this.stylingElement.textContent += cssRules;
    this.shadowDom.appendChild(this.stylingElement);
  }
}
export class EducationSection extends HTMLElement {
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
  `;

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
      <style>${EducationSection.styling}</style>
      <div class="container" style="width: 70vw; height: 100vh;">
        <h1>Education</h1>
        <div>
          <table>
            <tr>
              <th>Degree</th>
              <th>Institution</th>
              <th>Year</th>
            </tr>
            <tr>
              <td>Bachelor of Engineering in Computer Engineering</td>
              <td>MIT College of Engineering, Pune</td>
              <td>2016 - 2020</td>
            </tr>
            <tr>
              <td>Higher Secondary Certificate (HSC)</td>
              <td>New English School, Pune</td>
              <td>2014 - 2016</td>
            </tr>
            <tr>
              <td>Secondary School Certificate (SSC)</td>
              <td>New English School, Pune</td>
              <td>2013 - 2014</td>
            </tr>
          </table>
        </div>
      </div>
    `;
  }
}
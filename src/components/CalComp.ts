import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators';

@customElement('cal-comp')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}

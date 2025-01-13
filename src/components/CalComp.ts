import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators';
import themes from '../styles/themes';
import base from '../styles/base';

@customElement('cal-comp')
export class SimpleGreeting extends LitElement {
  static styles = [themes, base];

  @property()
  name = 'Somebody';

  render() {
    return html`
      <div class="cal-comp cal-comp-theme default">
        <cal-comp-basic></cal-comp-basic>
        <div class="bg light">al</div>
      </div>
    `;
  }
}

import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators';
import base from '../styles/base';
import { PaddingValue } from '../styles/types';

@customElement('cal-comp')
export class SimpleGreeting extends LitElement {
  static styles = base;

  @property()
  name = 'Somebody';

  @property({type: Number})
  p:PaddingValue = 0

  render() {
    console.log(this.p)
    return html`
      <div class="cal-comp-theme-default">
        <cal-comp-basic type="primary" fg="darkest" bg="lightest" p=${this.p}>
          ${this.name}
        </cal-comp-basic>
        <button @click="${()=> {this.p += 1; this.p %= 7;}}">p value ${this.p}</button>
      </div>
    `;
  }
}

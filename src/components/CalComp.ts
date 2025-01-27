import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators';
import base from 'lofi-themes/dist/lit/lofi-themes';

@customElement('cal-comp')
export class SimpleGreeting extends LitElement {
  static styles = [base, css`
    :host {
      display: block;
      height: 100%;
    }

    .cal-comp {
      height: 100%;
    }
  `];

  render() {
    return html`
      <div class="cal-comp cal-comp-theme-default fonted">
        <div class="h-full shaded p-6">
          <cal-day dayNumber="42" dayName="Friday">
            <div class="primary shaded p-1 rounded-1">event a</div>
            <div class="primary shaded p-1 rounded-1">event a</div>
            <div class="primary shaded p-1 rounded-1">event a</div>
          </cal-day>
          <cal-day dayNumber="42" dayName="Friday"></cal-day>
          <cal-day dayNumber="42" dayName="Friday"></cal-day>
        </div>
      </div>
    `;
  }
}

import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators";
import { DayOfWeek } from "../styles/types";
import baseStyles from 'lofi-themes/dist/lit/lofi-themes';

@customElement("cal-day")
export class DayComp extends LitElement {

  @property({type:Number})
  dayNumber:number = NaN
  @property({type:String})
  dayName?:DayOfWeek

  static styles: CSSResultGroup = [baseStyles, css`
    :host {
      display: block;
      height: 100%;
      min-width: 12rem;
    }

    .title {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      border-bottom: var(--theme-border-size) solid var(--theme-color-fg);
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      box-sizing: border-box;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1rem;
    }
  `]

  render():TemplateResult {
    return html`
      <div class="basic fg fonted bordered rounded-1 h-full borderx-boxed">
        <div class="title p-1 primary fg">
          <h3 class="primary fg darker-fg">${this.dayNumber}</h3>
          <div class="sub-title">
            ${this.dayName? html`<h4 class="day-name">${this.dayName}</h4>` : undefined}
            <slot name="label"></slot>
          </div>
        </div>

        <div class="content m-1">
          <slot></slot>
        </div>
      </div>
    `
  }
}

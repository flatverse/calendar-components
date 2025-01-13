import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import baseStyles from "../styles/base"

@customElement("cal-comp-basic")
export class Basic extends LitElement {
  static styles = baseStyles

  render() {
    return html`
      <div class="bg darkest">
        OK
      </div>
    `
  }
}

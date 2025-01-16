import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import { ClassInfo, classMap } from "lit/directives/class-map"
import baseStyles from "../styles/base"
import { ColorShade, ColorType, PaddingValue } from "../styles/types";

@customElement("cal-comp-basic")
export class Basic extends LitElement {
  static styles = baseStyles

  @property()
  type: ColorType = "basic"

  @property()
  shade: ColorShade|undefined
  @property()
  bg: ColorShade|undefined
  @property()
  fg: ColorShade|undefined

  @property()
  p: PaddingValue = 0;

  createClassMap():ClassInfo {
    return {
      "basic": this.type === "basic",
      "primary": this.type === "primary",
      "success": this.type === "success",
      "warning": this.type === "warning",
      "error": this.type === "error",
      "shaded": this.shade !== undefined || this.bg !== undefined || this.fg !== undefined,
      [this.shade]: this.shade !== undefined,
      [this.bg+"-bg"]: this.bg !== undefined,
      [this.fg+"-fg"]: this.fg !== undefined,
      ["p"+this.p]: this.p > 0
    }
  }

  render() {
    return html`
      <div class=${classMap(this.createClassMap())}>
        <slot></slot>
      </div>
    `
  }
}

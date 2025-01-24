import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import { ClassInfo, classMap } from "lit/directives/class-map"
import baseStyles from "../styles/base"
import { ColorShade, ColorType, PaddingValue } from "../styles/types";

/**
 * @class Themed
 * @deprecated this probably isn't as useful as using tailwind style classes
 */
@customElement("cal-themed")
export class Themed extends LitElement {
  static styles = [baseStyles, css`
    :host {
      display: block;
      height: 100%;
    }

    .full-height {
      height: 100%;
    }
  `]

  @property()
  type: ColorType = "basic"

  @property()
  classes: string = ""

  @property()
  shade: ColorShade|undefined
  @property()
  bg: ColorShade|undefined
  @property()
  fg: ColorShade|undefined

  @property({type:Number})
  p: PaddingValue = 0

  @property({type:Number})
  rounded:PaddingValue = 0

  @property({type:Boolean})
  bordered:boolean = false
  @property({type:Boolean})
  borderBoxed:boolean = false
  @property({type:Boolean})
  fonted:boolean = false
  @property({type:Boolean})
  fullHeight:boolean = false

  createClassMap():ClassInfo {
    const fromProp = Object.fromEntries(
      this.classes
        .split(" ")
        .filter(classStr => classStr !== "")
        .map(classStr => [classStr, true])
    )
    const builtIn = {
      "basic": this.type === "basic",
      "primary": this.type === "primary",
      "success": this.type === "success",
      "warning": this.type === "warning",
      "error": this.type === "error",
      "shaded": this.shade !== undefined || this.bg !== undefined || this.fg !== undefined,
      [this.shade]: this.shade !== undefined,
      [this.bg+"-bg"]: this.bg !== undefined,
      [this.fg+"-fg"]: this.fg !== undefined,
      ["p-"+this.p]: this.p > 0,
      "bordered": this.bordered,
      ["rounded-"+this.rounded]: true,
      "border-boxed": this.borderBoxed,
      "fonted": this.fonted,
      "full-height": this.fullHeight,
    }
    return {...builtIn, ...fromProp}
  }

  render() {
    return html`
      <div class=${classMap(this.createClassMap())}>
        <slot></slot>
      </div>
    `
  }
}

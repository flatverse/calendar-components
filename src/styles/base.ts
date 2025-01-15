import { css } from "lit";

export default css`
.cal-comp {
  box-sizing: border-box;
  font-family: var(--theme-font-family);
}
.cal-comp .bg {
  background-color: var(--theme-color-bg);
}
.cal-comp .fg {
  color: var(--theme-color-fg);
}
.cal-comp .bg.inverted {
  background-color: var(--theme-color-fg);
}
.cal-comp .fg.inverted {
  color: var(--theme-color-bg);
}
.cal-comp .colors {
  background-color: var(--theme-color-bg);
  color: var(--theme-color-fg);
}
.cal-comp .colors.inverted {
  background-color: var(--theme-color-fg);
  color: var(--theme-color-bg);
}
.cal-comp .bordered {
  border: var(--theme-border-size) solid var(--theme-color-fg);
}
.cal-comp .rounded {
  border-radius: var(--theme-border-size);
}
`;

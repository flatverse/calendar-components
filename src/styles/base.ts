import { css } from "lit";

export default css`
.cal-comp {
  box-sizing: border-box;
  font-family: var(--theme-font-family);
}
.cal-comp .light-bg {
  --theme-color-bg: var(--theme-color-bg-gradient-light);
}
.cal-comp .lighter-bg {
  --theme-color-bg: var(--theme-color-bg-gradient-lighter);
}
.cal-comp .lightest-bg {
  --theme-color-bg: var(--theme-color-bg-gradient-lightest);
}
.cal-comp .dark-bg {
  --theme-color-bg: var(--theme-color-bg-gradient-dark);
}
.cal-comp .darker-bg {
  --theme-color-bg: var(--theme-color-bg-gradient-darker);
}
.cal-comp .darkest-bg {
  --theme-color-bg: var(--theme-color-bg-gradient-darkest);
}
.cal-comp .light-fg {
  --theme-color-fg: var(--theme-color-fg-gradient-light);
}
.cal-comp .lighter-fg {
  --theme-color-fg: var(--theme-color-fg-gradient-lighter);
}
.cal-comp .lightest-fg {
  --theme-color-fg: var(--theme-color-fg-gradient-lightest);
}
.cal-comp .dark-fg {
  --theme-color-fg: var(--theme-color-fg-gradient-dark);
}
.cal-comp .darker-fg {
  --theme-color-fg: var(--theme-color-fg-gradient-darker);
}
.cal-comp .darkest-fg {
  --theme-color-fg: var(--theme-color-fg-gradient-darkest);
}
.cal-comp .light {
  --theme-color-bg: var(--theme-color-bg-gradient-light);
  --theme-color-fg: var(--theme-color-fg-gradient-light);
}
.cal-comp .lighter {
  --theme-color-bg: var(--theme-color-bg-gradient-lighter);
  --theme-color-fg: var(--theme-color-fg-gradient-lighter);
}
.cal-comp .lightest {
  --theme-color-bg: var(--theme-color-bg-gradient-lightest);
  --theme-color-fg: var(--theme-color-fg-gradient-lightest);
}
.cal-comp .dark {
  --theme-color-bg: var(--theme-color-bg-gradient-dark);
  --theme-color-fg: var(--theme-color-fg-gradient-dark);
}
.cal-comp .darker {
  --theme-color-bg: var(--theme-color-bg-gradient-darker);
  --theme-color-fg: var(--theme-color-fg-gradient-darker);
}
.cal-comp .darkest {
  --theme-color-bg: var(--theme-color-bg-gradient-darkest);
  --theme-color-fg: var(--theme-color-fg-gradient-darkest);
}
.cal-comp .bg {
  background-color: var(--theme-color-bg);
}
.cal-comp .fg {
  color: var(--theme-color-fg);
}
.cal-comp .bordered {
  border: var(--theme-border-size) solid var(--theme-color-fg);
}
.cal-comp .rounded {
  border-radius: var(--theme-border-size);
}
`;

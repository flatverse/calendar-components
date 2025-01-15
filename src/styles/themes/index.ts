import { css } from "lit";

export default css`
.cal-comp-theme.default {
  --theme-color-bg-basic-gradient-none: #222;
  --theme-color-fg-basic-gradient-none: #CCC;
  --theme-color-bg-basic-gradient-dark: #1d1d1d;
  --theme-color-bg-basic-gradient-darker: #171717;
  --theme-color-bg-basic-gradient-darkest: #121212;
  --theme-color-fg-basic-gradient-dark: #ababab;
  --theme-color-fg-basic-gradient-darker: #8b8b8b;
  --theme-color-fg-basic-gradient-darkest: #6a6a6a;
  --theme-color-bg-basic-gradient-light: #272727;
  --theme-color-bg-basic-gradient-lighter: #2d2d2d;
  --theme-color-bg-basic-gradient-lightest: #323232;
  --theme-color-fg-basic-gradient-light: #ededed;
  --theme-color-fg-basic-gradient-lighter: #ffffff;
  --theme-color-fg-basic-gradient-lightest: #ffffff;
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-none);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-none);
  --theme-color-bg-primary-gradient-none: darkblue;
  --theme-color-fg-primary-gradient-none: skyblue;
  --theme-color-bg-primary-gradient-dark: #000075;
  --theme-color-bg-primary-gradient-darker: #00005f;
  --theme-color-bg-primary-gradient-darkest: #000048;
  --theme-color-fg-primary-gradient-dark: #54b9e3;
  --theme-color-fg-primary-gradient-darker: #24a4d8;
  --theme-color-fg-primary-gradient-darkest: #1b7da5;
  --theme-color-bg-primary-gradient-light: #0000a1;
  --theme-color-bg-primary-gradient-lighter: #0000b7;
  --theme-color-bg-primary-gradient-lightest: #0000ce;
  --theme-color-fg-primary-gradient-light: #bae3f3;
  --theme-color-fg-primary-gradient-lighter: #ecf7fc;
  --theme-color-fg-primary-gradient-lightest: #ffffff;
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-none);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-none);
  --theme-color-bg-success-gradient-none: green;
  --theme-color-fg-success-gradient-none: limegreen;
  --theme-color-bg-success-gradient-dark: #006c00;
  --theme-color-bg-success-gradient-darker: #005700;
  --theme-color-bg-success-gradient-darkest: #004300;
  --theme-color-fg-success-gradient-dark: #2aac2a;
  --theme-color-fg-success-gradient-darker: #228b22;
  --theme-color-fg-success-gradient-darkest: #1a6b1a;
  --theme-color-bg-success-gradient-light: #009400;
  --theme-color-bg-success-gradient-lighter: #00a900;
  --theme-color-bg-success-gradient-lightest: #00bd00;
  --theme-color-fg-success-gradient-light: #53d553;
  --theme-color-fg-success-gradient-lighter: #74dd74;
  --theme-color-fg-success-gradient-lightest: #94e594;
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-none);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-none);
  --theme-color-bg-warning-gradient-none: gold;
  --theme-color-fg-warning-gradient-none: lightyellow;
  --theme-color-bg-warning-gradient-dark: #d6b500;
  --theme-color-bg-warning-gradient-darker: #ad9200;
  --theme-color-bg-warning-gradient-darkest: #857000;
  --theme-color-fg-warning-gradient-dark: #ffff93;
  --theme-color-fg-warning-gradient-darker: #ffff47;
  --theme-color-fg-warning-gradient-darkest: #f9f900;
  --theme-color-bg-warning-gradient-light: #ffdd29;
  --theme-color-bg-warning-gradient-lighter: #ffe452;
  --theme-color-bg-warning-gradient-lightest: #ffea7a;
  --theme-color-fg-warning-gradient-light: #ffffff;
  --theme-color-fg-warning-gradient-lighter: #ffffff;
  --theme-color-fg-warning-gradient-lightest: #ffffff;
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-none);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-none);
  --theme-color-bg-error-gradient-none: darkred;
  --theme-color-fg-error-gradient-none: pink;
  --theme-color-bg-error-gradient-dark: #750000;
  --theme-color-bg-error-gradient-darker: #5f0000;
  --theme-color-bg-error-gradient-darkest: #480000;
  --theme-color-fg-error-gradient-dark: #ff7890;
  --theme-color-fg-error-gradient-darker: #ff3155;
  --theme-color-fg-error-gradient-darkest: #e80029;
  --theme-color-bg-error-gradient-light: #a10000;
  --theme-color-bg-error-gradient-lighter: #b70000;
  --theme-color-bg-error-gradient-lightest: #ce0000;
  --theme-color-fg-error-gradient-light: #ffffff;
  --theme-color-fg-error-gradient-lighter: #ffffff;
  --theme-color-fg-error-gradient-lightest: #ffffff;
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-none);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-none);
  --theme-border-size: 2px;
  --theme-border-radius: 8px;
  --theme-font-family: Consolas, menlo, Courier;
}
.cal-comp-theme.default .dark,
.cal-comp-theme.default .dark {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-dark);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-dark);
}
.cal-comp-theme.default .dark-fg,
.cal-comp-theme.default .dark-fg {
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-dark);
}
.cal-comp-theme.default .dark-bg,
.cal-comp-theme.default .dark-bg {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-dark);
}
.cal-comp-theme.default .darker,
.cal-comp-theme.default .darker {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-darker);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-darker);
}
.cal-comp-theme.default .darker-fg,
.cal-comp-theme.default .darker-fg {
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-darker);
}
.cal-comp-theme.default .darker-bg,
.cal-comp-theme.default .darker-bg {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-darker);
}
.cal-comp-theme.default .darkest,
.cal-comp-theme.default .darkest {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-darkest);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-darkest);
}
.cal-comp-theme.default .darkest-fg,
.cal-comp-theme.default .darkest-fg {
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-darkest);
}
.cal-comp-theme.default .darkest-bg,
.cal-comp-theme.default .darkest-bg {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-darkest);
}
.cal-comp-theme.default .light,
.cal-comp-theme.default .light {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-light);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-light);
}
.cal-comp-theme.default .light-fg,
.cal-comp-theme.default .light-fg {
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-light);
}
.cal-comp-theme.default .light-bg,
.cal-comp-theme.default .light-bg {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-light);
}
.cal-comp-theme.default .lighter,
.cal-comp-theme.default .lighter {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-lighter);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-lighter);
}
.cal-comp-theme.default .lighter-fg,
.cal-comp-theme.default .lighter-fg {
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-lighter);
}
.cal-comp-theme.default .lighter-bg,
.cal-comp-theme.default .lighter-bg {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-lighter);
}
.cal-comp-theme.default .lightest,
.cal-comp-theme.default .lightest {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-lightest);
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-lightest);
}
.cal-comp-theme.default .lightest-fg,
.cal-comp-theme.default .lightest-fg {
  --theme-color-fg-basic: var(--theme-color-fg-basic-gradient-lightest);
}
.cal-comp-theme.default .lightest-bg,
.cal-comp-theme.default .lightest-bg {
  --theme-color-bg-basic: var(--theme-color-bg-basic-gradient-lightest);
}
.cal-comp-theme.default .basic {
  --theme-color-bg: var(--theme-color-bg-basic);
  --theme-color-fg: var(--theme-color-fg-basic);
}
.cal-comp-theme.default .primary .dark,
.cal-comp-theme.default .primary.dark {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-dark);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-dark);
}
.cal-comp-theme.default .primary .dark-fg,
.cal-comp-theme.default .primary.dark-fg {
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-dark);
}
.cal-comp-theme.default .primary .dark-bg,
.cal-comp-theme.default .primary.dark-bg {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-dark);
}
.cal-comp-theme.default .primary .darker,
.cal-comp-theme.default .primary.darker {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-darker);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-darker);
}
.cal-comp-theme.default .primary .darker-fg,
.cal-comp-theme.default .primary.darker-fg {
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-darker);
}
.cal-comp-theme.default .primary .darker-bg,
.cal-comp-theme.default .primary.darker-bg {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-darker);
}
.cal-comp-theme.default .primary .darkest,
.cal-comp-theme.default .primary.darkest {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-darkest);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-darkest);
}
.cal-comp-theme.default .primary .darkest-fg,
.cal-comp-theme.default .primary.darkest-fg {
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-darkest);
}
.cal-comp-theme.default .primary .darkest-bg,
.cal-comp-theme.default .primary.darkest-bg {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-darkest);
}
.cal-comp-theme.default .primary .light,
.cal-comp-theme.default .primary.light {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-light);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-light);
}
.cal-comp-theme.default .primary .light-fg,
.cal-comp-theme.default .primary.light-fg {
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-light);
}
.cal-comp-theme.default .primary .light-bg,
.cal-comp-theme.default .primary.light-bg {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-light);
}
.cal-comp-theme.default .primary .lighter,
.cal-comp-theme.default .primary.lighter {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-lighter);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-lighter);
}
.cal-comp-theme.default .primary .lighter-fg,
.cal-comp-theme.default .primary.lighter-fg {
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-lighter);
}
.cal-comp-theme.default .primary .lighter-bg,
.cal-comp-theme.default .primary.lighter-bg {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-lighter);
}
.cal-comp-theme.default .primary .lightest,
.cal-comp-theme.default .primary.lightest {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-lightest);
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-lightest);
}
.cal-comp-theme.default .primary .lightest-fg,
.cal-comp-theme.default .primary.lightest-fg {
  --theme-color-fg-primary: var(--theme-color-fg-primary-gradient-lightest);
}
.cal-comp-theme.default .primary .lightest-bg,
.cal-comp-theme.default .primary.lightest-bg {
  --theme-color-bg-primary: var(--theme-color-bg-primary-gradient-lightest);
}
.cal-comp-theme.default .primary {
  --theme-color-bg: var(--theme-color-bg-primary);
  --theme-color-fg: var(--theme-color-fg-primary);
}
.cal-comp-theme.default .success .dark,
.cal-comp-theme.default .success.dark {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-dark);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-dark);
}
.cal-comp-theme.default .success .dark-fg,
.cal-comp-theme.default .success.dark-fg {
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-dark);
}
.cal-comp-theme.default .success .dark-bg,
.cal-comp-theme.default .success.dark-bg {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-dark);
}
.cal-comp-theme.default .success .darker,
.cal-comp-theme.default .success.darker {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-darker);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-darker);
}
.cal-comp-theme.default .success .darker-fg,
.cal-comp-theme.default .success.darker-fg {
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-darker);
}
.cal-comp-theme.default .success .darker-bg,
.cal-comp-theme.default .success.darker-bg {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-darker);
}
.cal-comp-theme.default .success .darkest,
.cal-comp-theme.default .success.darkest {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-darkest);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-darkest);
}
.cal-comp-theme.default .success .darkest-fg,
.cal-comp-theme.default .success.darkest-fg {
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-darkest);
}
.cal-comp-theme.default .success .darkest-bg,
.cal-comp-theme.default .success.darkest-bg {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-darkest);
}
.cal-comp-theme.default .success .light,
.cal-comp-theme.default .success.light {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-light);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-light);
}
.cal-comp-theme.default .success .light-fg,
.cal-comp-theme.default .success.light-fg {
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-light);
}
.cal-comp-theme.default .success .light-bg,
.cal-comp-theme.default .success.light-bg {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-light);
}
.cal-comp-theme.default .success .lighter,
.cal-comp-theme.default .success.lighter {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-lighter);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-lighter);
}
.cal-comp-theme.default .success .lighter-fg,
.cal-comp-theme.default .success.lighter-fg {
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-lighter);
}
.cal-comp-theme.default .success .lighter-bg,
.cal-comp-theme.default .success.lighter-bg {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-lighter);
}
.cal-comp-theme.default .success .lightest,
.cal-comp-theme.default .success.lightest {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-lightest);
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-lightest);
}
.cal-comp-theme.default .success .lightest-fg,
.cal-comp-theme.default .success.lightest-fg {
  --theme-color-fg-success: var(--theme-color-fg-success-gradient-lightest);
}
.cal-comp-theme.default .success .lightest-bg,
.cal-comp-theme.default .success.lightest-bg {
  --theme-color-bg-success: var(--theme-color-bg-success-gradient-lightest);
}
.cal-comp-theme.default .success {
  --theme-color-bg: var(--theme-color-bg-success);
  --theme-color-fg: var(--theme-color-fg-success);
}
.cal-comp-theme.default .warning .dark,
.cal-comp-theme.default .warning.dark {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-dark);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-dark);
}
.cal-comp-theme.default .warning .dark-fg,
.cal-comp-theme.default .warning.dark-fg {
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-dark);
}
.cal-comp-theme.default .warning .dark-bg,
.cal-comp-theme.default .warning.dark-bg {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-dark);
}
.cal-comp-theme.default .warning .darker,
.cal-comp-theme.default .warning.darker {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-darker);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-darker);
}
.cal-comp-theme.default .warning .darker-fg,
.cal-comp-theme.default .warning.darker-fg {
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-darker);
}
.cal-comp-theme.default .warning .darker-bg,
.cal-comp-theme.default .warning.darker-bg {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-darker);
}
.cal-comp-theme.default .warning .darkest,
.cal-comp-theme.default .warning.darkest {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-darkest);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-darkest);
}
.cal-comp-theme.default .warning .darkest-fg,
.cal-comp-theme.default .warning.darkest-fg {
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-darkest);
}
.cal-comp-theme.default .warning .darkest-bg,
.cal-comp-theme.default .warning.darkest-bg {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-darkest);
}
.cal-comp-theme.default .warning .light,
.cal-comp-theme.default .warning.light {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-light);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-light);
}
.cal-comp-theme.default .warning .light-fg,
.cal-comp-theme.default .warning.light-fg {
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-light);
}
.cal-comp-theme.default .warning .light-bg,
.cal-comp-theme.default .warning.light-bg {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-light);
}
.cal-comp-theme.default .warning .lighter,
.cal-comp-theme.default .warning.lighter {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-lighter);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-lighter);
}
.cal-comp-theme.default .warning .lighter-fg,
.cal-comp-theme.default .warning.lighter-fg {
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-lighter);
}
.cal-comp-theme.default .warning .lighter-bg,
.cal-comp-theme.default .warning.lighter-bg {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-lighter);
}
.cal-comp-theme.default .warning .lightest,
.cal-comp-theme.default .warning.lightest {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-lightest);
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-lightest);
}
.cal-comp-theme.default .warning .lightest-fg,
.cal-comp-theme.default .warning.lightest-fg {
  --theme-color-fg-warning: var(--theme-color-fg-warning-gradient-lightest);
}
.cal-comp-theme.default .warning .lightest-bg,
.cal-comp-theme.default .warning.lightest-bg {
  --theme-color-bg-warning: var(--theme-color-bg-warning-gradient-lightest);
}
.cal-comp-theme.default .warning {
  --theme-color-bg: var(--theme-color-bg-warning);
  --theme-color-fg: var(--theme-color-fg-warning);
}
.cal-comp-theme.default .error .dark,
.cal-comp-theme.default .error.dark {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-dark);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-dark);
}
.cal-comp-theme.default .error .dark-fg,
.cal-comp-theme.default .error.dark-fg {
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-dark);
}
.cal-comp-theme.default .error .dark-bg,
.cal-comp-theme.default .error.dark-bg {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-dark);
}
.cal-comp-theme.default .error .darker,
.cal-comp-theme.default .error.darker {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-darker);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-darker);
}
.cal-comp-theme.default .error .darker-fg,
.cal-comp-theme.default .error.darker-fg {
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-darker);
}
.cal-comp-theme.default .error .darker-bg,
.cal-comp-theme.default .error.darker-bg {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-darker);
}
.cal-comp-theme.default .error .darkest,
.cal-comp-theme.default .error.darkest {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-darkest);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-darkest);
}
.cal-comp-theme.default .error .darkest-fg,
.cal-comp-theme.default .error.darkest-fg {
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-darkest);
}
.cal-comp-theme.default .error .darkest-bg,
.cal-comp-theme.default .error.darkest-bg {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-darkest);
}
.cal-comp-theme.default .error .light,
.cal-comp-theme.default .error.light {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-light);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-light);
}
.cal-comp-theme.default .error .light-fg,
.cal-comp-theme.default .error.light-fg {
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-light);
}
.cal-comp-theme.default .error .light-bg,
.cal-comp-theme.default .error.light-bg {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-light);
}
.cal-comp-theme.default .error .lighter,
.cal-comp-theme.default .error.lighter {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-lighter);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-lighter);
}
.cal-comp-theme.default .error .lighter-fg,
.cal-comp-theme.default .error.lighter-fg {
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-lighter);
}
.cal-comp-theme.default .error .lighter-bg,
.cal-comp-theme.default .error.lighter-bg {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-lighter);
}
.cal-comp-theme.default .error .lightest,
.cal-comp-theme.default .error.lightest {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-lightest);
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-lightest);
}
.cal-comp-theme.default .error .lightest-fg,
.cal-comp-theme.default .error.lightest-fg {
  --theme-color-fg-error: var(--theme-color-fg-error-gradient-lightest);
}
.cal-comp-theme.default .error .lightest-bg,
.cal-comp-theme.default .error.lightest-bg {
  --theme-color-bg-error: var(--theme-color-bg-error-gradient-lightest);
}
.cal-comp-theme.default .error {
  --theme-color-bg: var(--theme-color-bg-error);
  --theme-color-fg: var(--theme-color-fg-error);
}
`;

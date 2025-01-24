export type ColorType = "basic"|"primary"|"success"|"warning"|"error";
export type ColorShade = "dark"|"darker"|"darkest"|"light"|"lighter"|"lightest"|"none";
export type PaddingValue = 0|1|2|3|4|5|6;

export const DaysOfWeek = {
  Sunday: {
    index: 0,
    short: "Sun",
    letter: "Su",
  },
  Monday: {
    index: 1,
    short: "M",
    letter: "M",
  },
  Tuesday: {
    index: 2,
    short: "Tues",
    letter: "Tu",
  },
  Wednesday: {
    index: 3,
    short: "Weds",
    letter: "W",
  },
  Thursday: {
    index: 4,
    short: "Thurs",
    letter: "Th",
  },
  Friday: {
    index: 5,
    short: "Fri",
    letter: "F",
  },
  Saturday: {
    index: 6,
    short: "Sat",
    letter: "Sa",
  },
}
export type DayOfWeek = keyof typeof DaysOfWeek;

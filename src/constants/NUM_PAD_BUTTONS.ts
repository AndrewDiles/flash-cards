import type { NumPadButton } from "./types";

const NUM_PAD_BUTTONS: NumPadButton[] = [
  { type: "number", content: "0", gridArea: "a" },
  { type: "number", content: "1", gridArea: "b" },
  { type: "number", content: "2", gridArea: "c" },
  { type: "number", content: "3", gridArea: "d" },
  { type: "number", content: "4", gridArea: "e" },
  { type: "number", content: "5", gridArea: "f" },
  { type: "number", content: "6", gridArea: "g" },
  { type: "number", content: "7", gridArea: "h" },
  { type: "number", content: "8", gridArea: "i" },
  { type: "number", content: "9", gridArea: "j" },
  { type: "symbol", content: ".", gridArea: "k" },
  { type: "submit", content: "=", gridArea: "l" },
  { type: "back space", content: "<", gridArea: "m" },
  { type: "clear", content: "C", gridArea: "n" },
];

export default NUM_PAD_BUTTONS;

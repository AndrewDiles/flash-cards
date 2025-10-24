export interface Settings {
  dark: boolean; // dark / light mode, not yet used
  theme: string; // color theme, not yet used.
  layout: string, // "num-pad" or "atm" for CSS arrangement of the numpad.
  questions: number; // quantity of questions user wants
  duration: number; // how many seconds they want to answer each question
  factor_1_min: number; // next four keys are for Multiplication
  factor_1_max: number;
  factor_2_min: number;
  factor_2_max: number;
}

export interface NumberExerciseData {
  question: number; // Current question number
  questions: [number, number][]; // List of all questions
  times: number[]; // List of time it took to complete each question
  enteredValues: number[]; // Submitted answers, right/wrong is derivable data
  enteredValue: string, // Current number input (converted to Number when put into enteredValues)
  entered: boolean, // Placeholder to disable input/submission if later animation or functionality is added
  disabled: boolean, // Placeholder to disable input/submission if later animation or functionality is added
}

// Notes:
// question 0 represents a game that has not yet begun
// if question exceeds the max, it will move to results
// entered will be true after a value is submitted. Will revert to false (enabling input) once next card loaded
// disabled is a placeholder for future animations (card flips)


export interface NumPadButton {
  type: string; // Describes nature of button
  content: string; // Text content of the button
  gridArea: string; // Grid area for CSS
}

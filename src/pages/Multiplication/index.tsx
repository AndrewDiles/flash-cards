import { useState, useEffect } from "react";
import type { NumberExerciseData, Settings } from "../../constants/types";
import generateFactors from "../../helpers/generateFactors";
import OpeningPage from "./OpeningPage";
import MultiplicationGame from "./MultiplicationGame";
import GameComplete from "./GameComplete";

const DEFAULT_EXERCISE_DATA: NumberExerciseData = {
  question: 0,
  questions: [],
  times: [],
  enteredValue: "",
  enteredValues: [],
  entered: false,
  disabled: true,
};

const createExercise = (settings: Settings) => ({
  ...DEFAULT_EXERCISE_DATA,
  questions: generateFactors(
    settings.factor_1_min,
    settings.factor_1_max,
    settings.factor_2_min,
    settings.factor_2_max,
    settings.questions
  ),
});

const Multiplication = ({ settings }: { settings: Settings }) => {
  const [exerciseData, setExerciseData] = useState<NumberExerciseData>(
    createExercise(settings)
  );

  // settings' cardCount is needed to know how many questions to generate, however
  // it is obtained on second render, making the question count generated possibly too high
  // or too low depending on what was saved in local storage
  // at the cost of one more render, resetting exerciseData to generate correct number
  useEffect(() => {
    setExerciseData(createExercise(settings));
  }, [settings.questions]);

  const restartGame = () => setExerciseData(createExercise(settings));

  // Managing document title
  useEffect(() => {
    const foundTitle: HTMLElement | null = document.querySelector("title");
    if (!foundTitle) return;
    foundTitle.innerText = "Multiplication";
    return () => {
      foundTitle.innerText = "Flash Cards";
    };
  }, []);

  if (exerciseData.question === 0)
    return (
      <OpeningPage
        maxCardNumber={settings.questions}
        duration={settings.duration}
        setExerciseData={setExerciseData}
      />
    );

  return (
    <main>
      {exerciseData.question <= settings.questions ? (
        <MultiplicationGame
          exerciseData={exerciseData}
          setExerciseData={setExerciseData}
          maxCardNumber={settings.questions}
          duration={settings.duration}
          layout={settings.layout}
        />
      ) : (
        <GameComplete
          maxCardNumber={settings.questions}
          duration={settings.duration}
          exerciseData={exerciseData}
          restartGame={restartGame}
        />
      )}
    </main>
  );
};

export default Multiplication;

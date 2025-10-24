import { useState, useEffect, useRef } from "react";
import type { NumberExerciseData } from "../../constants/types";
import useKeyboardToPressNumbers from "../../hooks/useKeyboardToPressNumbers";
import ActiveResults from "./ActiveResults";
import Card from "./Card";
import NumberEntry from "../../shared/NumberEntry";

const MultiplicationGame = ({
  exerciseData,
  setExerciseData,
  maxCardNumber,
  duration,
  layout,
}: {
  exerciseData: NumberExerciseData;
  setExerciseData: (value: NumberExerciseData) => void;
  maxCardNumber: number;
  duration: number;
  layout: string
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(duration);
  const lastTimeRef = useRef<number>(Date.now());
  useKeyboardToPressNumbers();

  // represents current question being asked
  const question = exerciseData.questions[exerciseData.question-1];

  // single function to submit answer manually or via out of time
  const submitAnswer = () => {
    if (!question) return;
    setTimeRemaining(duration);
    // TODO: if flipping and disabling to be done, manage .entered and .disabled below
    setExerciseData({
      ...exerciseData,
      question: exerciseData.question + 1,
      times: [...exerciseData.times, Date.now() - lastTimeRef.current],
      enteredValues: [
        ...exerciseData.enteredValues,
        Number(exerciseData.enteredValue),
      ],
      enteredValue: "",
    });
    lastTimeRef.current = Date.now();
  };

  // managing remaining time count down
  useEffect(() => {
    const tickTime = () => {
      setTimeRemaining(
        (currentTimeRemaining: number) => {
          // if (currentTimeRemaining === 1) {
          //   submitAnswer();
          //   return duration
          // }
          return currentTimeRemaining - 1}
      );
    };
    const countdownInterval = setInterval(tickTime, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [exerciseData.question]);

  // TODO test if merging this into above effect breaks due to stale state
  useEffect(() => {
    if (timeRemaining <= 0) {
      submitAnswer();
    }
  }, [timeRemaining]);

  // subfunction to simplify NumberEntry component
  const setNumber = (newNumber : string) => {
    setExerciseData({...exerciseData, enteredValue:newNumber})
  }

  return (
    <main>
      <h1>Multiplication</h1>
      <ActiveResults
        results={exerciseData.enteredValues.map(
          (entry: number, index: number) => {
            const questionAtHand = exerciseData.questions[index];
            // if (!questionAtHand) return "error"
            return entry === questionAtHand[0] * questionAtHand[1];
          }
        )}
      />
      <Card
        cardNumber={exerciseData.question}
        maxCardNumber={maxCardNumber}
        timeRemaining={timeRemaining}
        factor1={question ? question[0] : 0}
        factor2={question ? question[1] : 0}
        enteredValue={String(exerciseData.enteredValue)}
        disabled={exerciseData.disabled}
      />
      <NumberEntry layout={layout} disabled={exerciseData.disabled} currentNumber={exerciseData.enteredValue} submitAnswer={submitAnswer} setNumber={setNumber}/>
    </main>
  );
};

export default MultiplicationGame;

import { Link } from "react-router-dom";
import confetti from "../../assets/confetti.gif";
// confetti originally found https://ar.inspiredpencil.com/pictures-2023/confetti-gif-transparent

import type { NumberExerciseData } from "../../constants/types";

const GameComplete = ({
  maxCardNumber,
  duration,
  exerciseData,
  restartGame,
}: {
  maxCardNumber: number;
  duration: number;
  exerciseData: NumberExerciseData;
  restartGame: () => void;
}) => {
  let correctCount: number = 0;
  exerciseData.enteredValues.forEach((enteredValue: number, index: number) => {
    const question = exerciseData.questions[index];
    if (question[0] * question[1] === enteredValue) {
      correctCount += 1;
    }
  });
  const timeOuts: number = exerciseData.times.filter(
    (time) => time / 1000 >= duration
  ).length;
  const averageTime: number =
    Math.floor(
      exerciseData.times.reduce(
        (accumulator, currentValue) =>
          accumulator + Math.min(currentValue, 1000 * duration),
        0
      ) /
        maxCardNumber /
        10
    ) / 100;
  
    const percentage : number = Math.round((100 * correctCount) / maxCardNumber);
    let message : string = "Keep at it!";
    if (percentage === 100) {
      message = "Perfect!"
    } else if (percentage > 85) {
      message = "Excellent work!"
    } else if (percentage > 65) {
      message = "Great job."
    }

  return (
    <>
      <h1>Results</h1>
      {correctCount === maxCardNumber && <img className="confetti" alt="" src={confetti}/>}
      <p className="large-top-margin">{message}</p>
      <p>{percentage} %</p>
      <p>
        {correctCount} / {maxCardNumber} correct
      </p>
      <details style={{minWidth: "300px"}}>
        <summary>View details</summary>
        <p>Card count: {maxCardNumber}</p>
        <p>Max time: {duration}s</p>
        <p>Average time: {averageTime}s</p>
        <p>Timeouts: {timeOuts}</p>
        {exerciseData.questions.map(
          ([factor1, factor2]: [number, number], index: number) => {
            const correct =
              exerciseData.enteredValues[index] === factor1 * factor2;
            return (
              <p>
                {correct ? "✅" : "❌"} {factor1}{" "}
                <span className="operation">×</span> {factor2} ={" "}
                {exerciseData.enteredValues[index]}{" "}
                {!correct && (
                  <span className="correction">({factor1 * factor2})</span>
                )}
              </p>
            );
          }
        )}
      </details>
      <button type="button" onClick={restartGame}>
        <span>again</span>
      </button>
      <Link to="/flash-cards/">
        <span>exit</span>
      </Link>
    </>
  );
};

export default GameComplete;

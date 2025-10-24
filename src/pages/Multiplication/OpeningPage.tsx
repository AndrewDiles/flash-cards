import React from "react";
import { Link } from "react-router-dom";
import ActiveResults from "./ActiveResults";
import Card from "./Card";
import type { NumberExerciseData } from "../../constants/types";

const OpeningPage = ({
  maxCardNumber,
  duration,
  setExerciseData,
}: {
  maxCardNumber: number;
  duration: number;
  setExerciseData: React.Dispatch<React.SetStateAction<NumberExerciseData>>;
}) => {
  const handleClick = () => {
    setExerciseData((current: NumberExerciseData) => ({
      ...current,
      question: 1,
      disabled: false,
    }));
  };

  return (
    <main>
      <h1>Multiplication</h1>
      <ActiveResults results={[]} />
      <Card
        cardNumber={0}
        maxCardNumber={maxCardNumber}
        timeRemaining={duration}
        factor1={0}
        factor2={0}
        enteredValue="?"
        disabled={true}
      />
      <button type="button" onClick={handleClick}>
        <span>start</span>
      </button>
      <Link to="/flash-cards">
        <span>exit</span>
      </Link>
    </main>
  );
};

export default OpeningPage;

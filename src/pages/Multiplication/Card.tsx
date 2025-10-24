const Card = ({
  cardNumber,
  maxCardNumber,
  timeRemaining,
  factor1,
  factor2,
  enteredValue,
  disabled,
}: {
  cardNumber: number;
  maxCardNumber: number;
  timeRemaining: number;
  factor1: number;
  factor2: number;
  enteredValue: string;
  disabled: boolean;
}) => {
  return (
    <div className="card">
      <p>
        # {cardNumber} / {maxCardNumber}
      </p>
      <p>{timeRemaining}s</p>
      <div className="card-contents">
        <p>{factor1 || "?"}</p>
        <p>
          <span className="operation margin-right">×</span>
          {factor2 || "?"}
        </p>
        <div className="bar"></div>
        <p className="push-right">
          {enteredValue}{!disabled && <span className="caret">|</span>}
        </p>
      </div>
    </div>
  );
};

export default Card;

import "./NumberEntry.css";
import NUM_PAD_BUTTONS from "../constants/NUM_PAD_BUTTONS";

const NumberEntry = ({
  layout,
  disabled,
  currentNumber,
  setNumber,
  submitAnswer,
}: {
  layout: string;
  disabled: boolean;
  currentNumber: string;
  setNumber: (replacement: string) => void;
  submitAnswer: () => void;
}) => {
  return (
    <section className={layout}>
      {NUM_PAD_BUTTONS.map(
        ({
          type,
          content,
          gridArea,
        }: {
          type: string;
          content: string;
          gridArea: string;
        }) => {
          // Added functionDisabled after onClick and left duplication of logic in the click handler
          let functionDisabled: boolean = false;
          if (content === "0" && currentNumber === "0") functionDisabled = true;
          if (type === "symbol" && currentNumber.includes(content))
            functionDisabled = true;
          if (type === "submit" && (!currentNumber || currentNumber === "."))
            functionDisabled = true;
          if ((type === "back space" || type === "clear") && !currentNumber)
            functionDisabled = true;
          if (type === "number" && currentNumber.length > 9)
            functionDisabled = true;

          const onClick = () => {
            if (content === "0" && currentNumber === "0") return;

            if (type === "number") {
              if (currentNumber.length > 9) return;
              if (currentNumber[0] === "0") {
                return setNumber(currentNumber.slice(1) + content);
              } else {
                return setNumber(currentNumber + content);
              }
            }

            if (type === "symbol") {
              if (currentNumber.includes(content)) return;
              return setNumber(currentNumber + content);
            }
            if (type === "submit") {
              if (currentNumber && currentNumber !== ".") submitAnswer();
              return;
            }
            if (type === "back space") {
              return setNumber(currentNumber.slice(0, -1));
            }
            if (type === "clear") {
              return setNumber("");
            }
          };
          return (
            <button
              key={content}
              type="button"
              id={content}
              onClick={onClick}
              disabled={functionDisabled || disabled}
              style={{ gridArea }}
            >
              <span>{content}</span>
            </button>
          );
        }
      )}
    </section>
  );
};

export default NumberEntry;

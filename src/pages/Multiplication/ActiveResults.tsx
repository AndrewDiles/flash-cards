import { memo } from "react";
import correct from "../../assets/correct.png";
import incorrect from "../../assets/incorrect.png";

const ActiveResults = ({ results }: { results: boolean[] }) => {
  return (
    <div className="activeResults">
      {results.length === 0 && (
        <>
          <img
            style={{ visibility: "hidden" }}
            alt="preloading correct"
            src={correct}
          />
          <img
            style={{ visibility: "hidden" }}
            alt="preloading incorrect"
            src={incorrect}
          />
        </>
      )}
      {results.map((value, index) => {
        const result = value ? "correct" : "incorrect";
        return (
          <img
            className={result}
            key={index}
            style={{ right: `${-1 * (index - results.length + 1) * 50}px` }}
            alt={result}
            src={value ? correct : incorrect}
          />
        );
      })}
    </div>
  );
};

export default memo(ActiveResults);

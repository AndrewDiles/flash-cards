import { useState } from "react";
import { Link } from "react-router-dom";
import multiplication from "../../assets/robot_multiplication.png";
import "./styles.css";

const Exercises = () => {
  const [multiplicationImageLoaded, setMultiplicationImageLoaded] =
    useState<string>("false");

  return (
    <main>
      <h1>Select Type</h1>
      <Link to="/flash-cards/multiplication">
        {multiplicationImageLoaded === "error" && <span>multiplication</span>}
        {multiplicationImageLoaded !== "error" && (
          <>
            <img
              style={{
                display:
                  multiplicationImageLoaded !== "true" ? "none" : "block",
              }}
              onLoad={() => setMultiplicationImageLoaded("true")}
              onError={() => setMultiplicationImageLoaded("error")}
              alt="robot multiplication"
              src={multiplication}
            />
            {multiplicationImageLoaded === "false" && (
              <div className="loader"></div>
            )}
          </>
        )}
      </Link>
      <Link to="/flash-cards/">
        <span>back</span>
      </Link>
    </main>
  );
};

export default Exercises;

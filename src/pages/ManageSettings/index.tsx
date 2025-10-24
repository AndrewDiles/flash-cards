import { Link } from "react-router-dom";
import type { Settings } from "../../constants/types";
import "./styles.css";
import SampleNumberEntry from "../../shared/SampleNumberEntry";

const MIN_WIDTH_STYLES = {
  minWidth: "2rem",
  display: "inline-block",
};

const ManageSettings = ({
  settings,
  updateSettings,
  resetSettings,
}: {
  settings: Settings;
  updateSettings: (
    key: keyof Settings,
    value: Settings[keyof Settings]
  ) => void;
  resetSettings: () => void;
}) => {
  const {
    questions,
    duration,
    // factor_1_min,
    // factor_1_max,
    // factor_2_min,
    // factor_2_max,
  } = settings;
  return (
    <main className="fit-container">
      <h1>Settings</h1>

      <section className="full row end">
        Questions
        <div>
          <button
            type="button"
            disabled={questions === 5}
            onClick={() => {
              updateSettings("questions", questions - 1);
            }}
          >
            <span>↓</span>
          </button>
          <span style={MIN_WIDTH_STYLES}>{questions}</span>
          <button
            type="button"
            disabled={questions === 100}
            onClick={() => {
              updateSettings("questions", questions + 1);
            }}
          >
            <span>↑</span>
          </button>
        </div>
      </section>

      <section className="full row end">
        Duration
        <div>
          <button
            type="button"
            disabled={duration === 1}
            onClick={() => {
              updateSettings("duration", duration - 1);
            }}
          >
            <span>↓</span>
          </button>
          <span style={MIN_WIDTH_STYLES}>{duration}</span>
          <button
            type="button"
            disabled={duration === 20}
            onClick={() => {
              updateSettings("duration", duration + 1);
            }}
          >
            <span>↑</span>
          </button>
        </div>
      </section>

      <section className="full col end dashed-under-border">
        Layout
        <div className="full row between">
          <p>
            Num Pad
            <button
              type="button"
              onClick={() => {
                updateSettings("layout", "num-pad");
              }}
            >
              <span
                style={{
                  color:
                    settings.layout !== "num-pad" ? "transparent" : "inherit",
                }}
              >
                ✔
              </span>
            </button>
          </p>

          <p>
            ATM
            <button
              type="button"
              onClick={() => {
                updateSettings("layout", "atm");
              }}
            >
              <span
                style={{
                  color: settings.layout !== "atm" ? "transparent" : "inherit",
                }}
              >
                ✔
              </span>
            </button>
          </p>
        </div>
        <p>Sample Layout</p>
        <SampleNumberEntry layout={settings.layout} />
      </section>

      <button
        type="button"
        onClick={() => {
          resetSettings();
        }}
      >
        <span>restore defaults</span>
      </button>
      <Link to="/flash-cards">
        <span>back</span>
      </Link>
    </main>
  );
};

export default ManageSettings;

import "./NumberEntry.css";

const BUTTONS = [
  { type: "number", content: "0", gridArea: "a" },
  { type: "number", content: "1", gridArea: "b" },
  { type: "number", content: "2", gridArea: "c" },
  { type: "number", content: "3", gridArea: "d" },
  { type: "number", content: "4", gridArea: "e" },
  { type: "number", content: "5", gridArea: "f" },
  { type: "number", content: "6", gridArea: "g" },
  { type: "number", content: "7", gridArea: "h" },
  { type: "number", content: "8", gridArea: "i" },
  { type: "number", content: "9", gridArea: "j" },
  { type: "symbol", content: ".", gridArea: "k" },
  { type: "function", content: "=", gridArea: "l" },
  { type: "function", content: "<", gridArea: "m" },
  { type: "function", content: "C", gridArea: "n" },
];

const SampleNumberEntry = ({ layout }: { layout: string }) => {
  return (
    <section className={layout} style={{ opacity: 0.5 }}>
      <h3 className="sample-text">Sample Layout</h3>
      {BUTTONS.map(({ content, gridArea }) => (
        <button key={content} tabIndex={-1} style={{ gridArea }} type="button">
          <span>{content}</span>
        </button>
      ))}
    </section>
  );
};

export default SampleNumberEntry;

import paperTexture from "../../assets/paper_texture.jpg";
import { useState } from "react";

const PaperTexture = () => {
  const [srcLoaded, setSrcLoaded] = useState<boolean>(false);
    console.log({srcLoaded})
  return (
    <img
      src={paperTexture}
      alt="paper-texture"
      className="paper-texture"
      style={{
        display: srcLoaded ? "block" : "none",
      }}
      onLoad={() => setSrcLoaded(true)}
    />
  );
};

export default PaperTexture;

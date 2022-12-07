import { useState } from "react";
import typefaces, { Typeface } from "./typefaces";

function getFontWeightNumber(weight: string): number {
  switch (weight) {
    case "Thin":
      return 100;
    case "Medium":
      return 400;
    case "Bold":
      return 600;
    default:
      return 400;
  }
}

function Typeface({
  typeface: { name, source, foundery, type, weights },
}: {
  typeface: Typeface;
}) {
  const [activeWeight, setActiveWeight] = useState("Medium");

  return (
    <div className="typeface-option">
      <span
        className={`typeface-option-title typeface-${name
          .toLowerCase()
          .replaceAll(" ", "")}`}
        style={{ fontWeight: getFontWeightNumber(activeWeight) }}
      >
        {name}
      </span>
      <a href={source} className="typeface-option-source">
        Source Code
      </a>
      <span className="typeface-option-foundery">{foundery}</span>
      <span className="typeface-option-type">{type}</span>
      <div className="typeface-option-weights">
        {weights.map((weight: string) => (
          <span
            className="typeface-option-weight"
            key={weight}
            onClick={() => setActiveWeight(weight)}
            data-active={weight === activeWeight ? "true" : "false"}
          >
            {weight}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function OpenTypeWeights() {
  return (
    <>
      {typefaces.map((typeface) => (
        <Typeface typeface={typeface} key={typeface.name} />
      ))}
    </>
  );
}

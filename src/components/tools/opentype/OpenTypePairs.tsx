import { useState } from "react";
import { typeSystem } from "./typesystem";

// [title, body]
const pairs = [
  ["Space Mono", "Inter"],
  ["Source Serif", "Source Sans"],
  ["Plex Serif", "Plex Sans"],
  ["Inter", "Source Serif"],
  ["Source Serif", "Inter"],
  ["Mona Sans", "Source Serif"],
];

export default function OpenTypePairs() {
  const [activePair, setActivePair] = useState(pairs[0]);

  function updatePair(pair: string[]) {
    setActivePair(pair);
    typeSystem.setKey("title", pair[0]);
    typeSystem.setKey("body", pair[1]);
  }

  return (
    <div className="typeface-pairs">
      {pairs.map((pair) => {
        const [title, body] = pair;
        return (
          <div
            className="typeface-pair"
            onClick={() => updatePair(pair)}
            key={`${[title, body]}`}
            data-active={activePair === pair}
          >
            <span className="typeface-pair-name">
              {title} + {body}
            </span>
            <span
              className={`typeface-preview-title typeface-${title
                .toLowerCase()
                .replaceAll(" ", "")}`}
            >
              The Cosmos Awaits
            </span>
            <span
              className={`typeface-preview-body typeface-${body
                .toLowerCase()
                .replaceAll(" ", "")}`}
            >
              Descended from astronomers of brilliant syntheses globular star
              cluster a mote of dust suspended in a sunbeam billions upon
              billions emerged into consciousness.
            </span>
          </div>
        );
      })}
    </div>
  );
}

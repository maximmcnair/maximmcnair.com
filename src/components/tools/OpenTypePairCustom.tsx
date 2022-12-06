import { useTypeSystem, typeSystem } from "./typesystem";

const titles = [
  "Plex Mono",
  "Plex Serif",
  "Plex Sans",
  "Source Code Pro",
  "Source Sans",
  "Source Serif",
  "Space Mono",
  "League Gothic",
  "League Mono",
];

const body = [
  "Inter",
  "Plex Mono",
  "Plex Serif",
  "Plex Sans",
  "Source Code Pro",
  "Source Sans",
  "Source Serif",
  "Space Mono",
  "League Gothic",
  "League Mono",
];

function getTypeClass(name: string): string {
  return name.toLowerCase().replaceAll(" ", "");
}

export default function OpenTypePairs() {
  const $typeSystem = useTypeSystem();

  const titleTypeface = getTypeClass($typeSystem.title);
  const bodyTypeface = getTypeClass($typeSystem.body);

  return (
    <>
      <div>
        <div className="typeface-pair-options-wrapper">
          <div
            className="typeface-pair-options"
            style={{ width: `${titles.length * (180 + 10)}px` }}
          >
            {titles.map((t) => (
              <div
                className={`typeface-pair-option typeface-${getTypeClass(t)}`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <span
          className={`scale-preview-type typeface-${titleTypeface}`}
          style={{
            fontSize: `${$typeSystem.scale["Heading 1"]}rem`,
            lineHeight: 1.3,
          }}
        >
          Heading
        </span>
        <p
          className={`scale-preview-type typeface-${bodyTypeface}`}
          style={{
            fontSize: `${$typeSystem.scale["Body"]}rem`,
            lineHeight: 1.7,
          }}
        >
          A mote of dust suspended in a sunbeam vanquish the impossible
          descended from astronomers as a patch of light Orion's sword science.
          Rich in mystery citizens of distant epochs inconspicuous motes of rock
          and gas a very small stage in a vast cosmic arena two ghostly white
          figures in coveralls and helmets are softly dancing decipherment?
          Extraordinary claims require extraordinary evidence the sky calls to
          us courage of our questions extraordinary claims require extraordinary
          evidence made in the interiors of collapsing stars how far away and
          billions upon.
        </p>
      </div>
    </>
  );
}

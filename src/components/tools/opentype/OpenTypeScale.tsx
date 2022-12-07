import { useTypeSystem, typeSystem } from "./typesystem";

type ScaleType =
  | "Minor Second"
  | "Major Second"
  | "Minor Third"
  | "Major Third"
  | "Perfect Fourth";
  // | "Augmented Fourth";

const scales = {
  "Minor Second": 1.067,
  "Major Second": 1.125,
  "Minor Third": 1.2,
  "Major Third": 1.25,
  "Perfect Fourth": 1.333,
  // "Augmented Fourth": 1.414,
};

export default function OpenTypeScale() {
  const $typeSystem = useTypeSystem();

  function setScaleType(scaleType: ScaleType) {
    typeSystem.setKey("scaleType", scaleType);

    const scaleValue = scales[scaleType];
    typeSystem.setKey("scale", {
      Small: Math.pow(scaleValue, -1).toFixed(2),
      Body: "1",
      "Heading 6": Math.pow(scaleValue, 1).toFixed(2),
      "Heading 5": Math.pow(scaleValue, 2).toFixed(2),
      "Heading 4": Math.pow(scaleValue, 3).toFixed(2),
      "Heading 3": Math.pow(scaleValue, 4).toFixed(2),
      "Heading 2": Math.pow(scaleValue, 5).toFixed(2),
      "Heading 1": Math.pow(scaleValue, 6).toFixed(2),
    });
  }

  function getTypefaceName(scaleName: string) {
    if (["Body", "Small"].includes(scaleName)) return $typeSystem.body;
    return $typeSystem.title;
  }

  return (
    <div>
      <div className="select-wrap">
        <select
          className="scale-picker"
          onChange={(evt) => setScaleType(evt.target.value as ScaleType)}
          value={$typeSystem.scaleType}
        >
          {Object.entries(scales).map(([name, value]) => (
            <option key={name} value={name} label={`${name} (${value})`} />
          ))}
        </select>
      </div>

      <div className="scale-preview">
        {Object.entries($typeSystem.scale)
          .reverse()
          .map(([name, value]) => (
            <span
              className={`scale-preview-type typeface-${getTypefaceName(name)
                .toLowerCase()
                .replaceAll(" ", "")}`}
              key={name}
              style={{
                fontSize: `${value}rem`,
                lineHeight: 1.3,
              }}
            >
              {name} <small>{`${value}rem`}</small>
            </span>
          ))}
      </div>
    </div>
  );
}

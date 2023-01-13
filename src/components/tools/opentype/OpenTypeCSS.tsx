import { useState } from "react";
import { useTypeSystem } from "./typesystem";

const typefaceWeights = {
  Inter: [
    [100, "Inter-Thin"],
    [400, "Inter-Regular"],
    [600, "Inter-Bold"],
  ],
  "Plex Sans": [
    [100, "IBMPlexSans-Thin"],
    [400, "IBMPlexSans-Medium"],
    [600, "IBMPlexSans-Bold"],
  ],
  "Plex Serif": [
    [100, "IBMPlexSerif-Thin"],
    [400, "IBMPlexSerif-Medium"],
    [600, "IBMPlexSerif-Bold"],
  ],
  "Source Sans": [
    [100, "SourceSans3-Light"],
    [400, "SourceSans3-Regular"],
    [600, "SourceSans3-Bold"],
  ],
  "Source Serif": [
    [100, "SourceSerif4-Light"],
    [400, "SourceSerif4-Regular"],
    [600, "SourceSerif4-Bold"],
  ],
  "Space Mono": [
    [400, "SpaceMono-Regular"],
    [600, "SpaceMono-Bold"],
  ],
  "Mona Sans": [[400, "Mona-Sans"]],
};

function typeFontFaceImports(typeface: string): string {
  // @ts-ignore
  const weights = typefaceWeights[typeface];

  if (!weights || weights.lenght === 0) return "";

  return weights
    .map(
      (w: any) =>
        `@font-face {
  font-family: "${typeface}";
  font-style: normal;
  font-weight: ${w[0]};
  font-display: swap;
  src: url("/${w[1]}.woff2") format("woff2"),
    url("/${w[1]}.woff") format("woff");
}`
    )
    .join("\n");
}

export default function OpenTypeCSS() {
  const [showMsg, setShowMsg] = useState(false);
  const $typeSystem = useTypeSystem();

  const css = `/* Base font-size of 18px */
html {
  font-size: 112.5%;
}

${[$typeSystem.title, $typeSystem.body]
  .map(
    (t) => `/* ${t} */
${typeFontFaceImports(t)}
`
  )
  .join("\n")}

:root {
  /* Typefaces */
  --typeface-title: '${$typeSystem.title}';
  --typeface-body: '${$typeSystem.body}';
  /* Typesizes */
  --typesize-h1: ${$typeSystem.scale["Heading 1"]}rem;
  --typesize-h2: ${$typeSystem.scale["Heading 2"]}rem;
  --typesize-h3: ${$typeSystem.scale["Heading 3"]}rem;
  --typesize-h4: ${$typeSystem.scale["Heading 4"]}rem;
  --typesize-h5: ${$typeSystem.scale["Heading 5"]}rem;
  --typesize-h6: ${$typeSystem.scale["Heading 6"]}rem;
  --typesize-body: ${$typeSystem.scale["Body"]}rem;
  --typesize-small: ${$typeSystem.scale["Small"]}rem;
  /* Weights */
  --typeweight-thin: 100;
  --typeweight-medium: 400;
  --typeweight-bold: 600;
}

body {
  font-family: var(--typeface-body), sans-serif;
  font-weight: var(--typeweight-medium);
  line-height: 1.7;
  /* Dark mode (this can be removed) */
  background: black;
  color: white;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin: 3rem 0 1.38rem;
  font-family: var(--typeface-title), sans-serif;
  font-weight: var(--typeweight-bold);
  line-height: 1.3;
}

h1, .h1 {
  margin-top: 0;
  font-size: var(--typesize-h1);
}

h2, .h2 {
  font-size: var(--typesize-h2);
}

h3, .h3 {
  font-size: var(--typesize-h3);
}

h4, .h4 {
  font-size: var(--typesize-h4);
}

h5, .h5 {
  font-size: var(--typesize-h5);
}

h6, .h6 {
  font-size: var(--typesize-h6);
}

p, .type-para {
  margin-bottom: 1rem;
}

small, .type-small {
  font-size: var(--typesize-small);
}

/* Example use in custom component */
.custom-component {
  font-size: var(--typesize-h4); 
}
`;

  function copyToClipboard(str: string) {
    setShowMsg(true);
    navigator.clipboard.writeText(str);

    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  }

  return (
    <>
      <h3>CSS Output</h3>

      <p>This CSS has no dependencies and should work with any tech stack.</p>

      <p>
        Typesizes are set in rems with CSS variables that can be used to build
        additional custom styles easily.
      </p>

      <div>
        <span>Typeface downloads:</span>
        {[
          "Inter",
          "Plex Sans",
          "Plex Serif",
          "Source Sans",
          "Source Serif",
          "Space Mono",
          "Mona Sans",
        ].map((t) => {
          if ([$typeSystem.title, $typeSystem.body].includes(t)) {
            return (
              <div key={t}>
                <a href={`/opentype/${t}.zip`} target="_blank">
                  {t} download
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div style={{ position: "relative" }}>
        <button
          onClick={() => copyToClipboard(css)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "var(--color-grey-dark)",
          }}
        >
          {showMsg ? "Copied!" : "Copy to clipboard"}
        </button>

        <pre style={{ backgroundColor: "var(--color-grey-dark)" }}>
          <code
            style={{
              fontSize: "var(--typesize-small)",
              lineHeight: "0.8em",
            }}
          >
            {css}
          </code>
        </pre>
      </div>
    </>
  );
}

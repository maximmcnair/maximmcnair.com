import { useState } from "react";
import { useTypeSystem } from "./typesystem";

export default function OpenTypeCSS() {
  const [showMsg, setShowMsg] = useState(false);
  const $typeSystem = useTypeSystem();

  const css = `/* Base font-size of 16px */
html {font-size: 100%;}

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
  font-size: font-size: var(--typesize-small);
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
      <div style={{ position: "relative" }}>
        <h3>CSS Output</h3>
        <button
          onClick={() => copyToClipboard(css)}
          style={{ position: "absolute", top: "0px", right: "0px" }}
        >
          {showMsg ? "Copied!" : "Copy to clipboard"}
        </button>
      </div>
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
    </>
  );
}

export type TypefaceWeight = "Thin" | "Medium" | "Bold";
export type TypefaceName =
  | "Inter"
  | "Plex Mono"
  | "Plex Serif"
  | "Plex Sans"
  | "Source Code Pro"
  | "Source Sans"
  | "Source Serif"
  | "Space Mono"
  | "League Gothic"
  | "League Mono"
  | "Hubot Sans"
  | "Mona Sans"
  | "Hack";

export interface Typeface {
  name: TypefaceName;
  source: string;
  foundery: string;
  type: string;
  weights: TypefaceWeight[];
}

const typefaces: Typeface[] = [
  {
    name: "Inter",
    source: "https://github.com/rsms/inter",
    foundery: "rsms",
    type: "Sans Serif",
    weights: ["Thin", "Medium", "Bold"],
  },
  // {
  //   name: "Plex Mono",
  //   source: "https://github.com/IBM/plex",
  //   foundery: "IBM",
  //   type: "Monospace",
  //   weights: ["Thin", "Medium", "Bold"],
  // },
  {
    name: "Plex Serif",
    source: "https://github.com/IBM/plex",
    foundery: "IBM",
    type: "Serif",
    weights: ["Thin", "Medium", "Bold"],
  },
  {
    name: "Plex Sans",
    source: "https://github.com/IBM/plex",
    foundery: "IBM",
    type: "Sans Serif",
    weights: ["Thin", "Medium", "Bold"],
  },
  // {
  //   name: "Source Code Pro",
  //   source: "https://github.com/adobe-fonts/source-code-pro",
  //   foundery: "Adobe",
  //   type: "Monospace",
  //   weights: ["Thin", "Medium", "Bold"],
  // },
  {
    name: "Source Sans",
    source: "https://github.com/adobe-fonts/source-sans",
    foundery: "Adobe",
    type: "Monospace",
    weights: ["Thin", "Medium", "Bold"],
  },
  {
    name: "Source Serif",
    source: "https://github.com/adobe-fonts/source-serif",
    foundery: "Adobe",
    type: "Monospace",
    weights: ["Thin", "Medium", "Bold"],
  },
  {
    name: "Space Mono",
    source: "https://github.com/googlefonts/spacemono",
    foundery: "Colophon + Google",
    type: "Monospace",
    weights: ["Medium", "Bold"],
  },
  // {
  //   name: "League Gothic",
  //   source: "https://github.com/theleagueof/league-gothic",
  //   foundery: "The League of Moveable Type",
  //   type: "Display",
  //   weights: ["Medium"],
  // },
  // {
  //   name: "League Mono",
  //   source: "https://github.com/theleagueof/league-mono",
  //   foundery: "The League of Moveable Type",
  //   type: "Monospace",
  //   weights: ["Thin", "Medium", "Bold"],
  // },
  // {
  //   name: "Hack",
  //   source: "https://github.com/source-foundry/Hack",
  //   foundery: "Source Foundry",
  //   type: "Monospace",
  //   weights: ["Medium", "Bold"],
  // },
  // {
  //   name: "Hubot Sans",
  //   source: "https://github.com/github/hubot-sans",
  //   foundery: "Github + Degarism",
  //   type: "Sans Serif",
  //   weights: ["Medium", "Bold"],
  // },
  {
    name: "Mona Sans",
    source: "https://github.com/github/mona-sans",
    foundery: "Github + Degarism",
    type: "Sans Serif",
    weights: ["Medium", "Bold"],
  },
];

export default typefaces;

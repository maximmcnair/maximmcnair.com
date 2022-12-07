import { map } from "nanostores";
import { useStore } from "@nanostores/react";

export const typeSystem = map({
  title: "Space Mono",
  body: "Inter",
  scaleType: "Minor Third",
  scale: {
    Small: "0.83",
    Body: "1.00",
    "Heading 6": "1.20",
    "Heading 5": "1.44",
    "Heading 4": "1.73",
    "Heading 3": "2.07",
    "Heading 2": "2.49",
    "Heading 1": "2.99",
  },
});

export function useTypeSystem() {
  return useStore(typeSystem);
}

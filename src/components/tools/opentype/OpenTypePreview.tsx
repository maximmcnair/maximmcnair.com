import { useTypeSystem } from "./typesystem";

export default function OpenTypePreview() {
  const $typeSystem = useTypeSystem();

  const titleTypeface = $typeSystem.title.toLowerCase().replaceAll(" ", "");
  const bodyTypeface = $typeSystem.body.toLowerCase().replaceAll(" ", "");

  return (
    <div>
      <span
        className={`scale-preview-type typeface-${titleTypeface}`}
        style={{
          fontSize: `${$typeSystem.scale["Heading 1"]}rem`,
          lineHeight: 1.3,
        }}
      >
        Heading One
      </span>
      <p
        className={`scale-preview-type typeface-${bodyTypeface}`}
        style={{
          fontSize: `${$typeSystem.scale["Body"]}rem`,
          lineHeight: 1.7,
        }}
      >
        A mote of dust suspended in a sunbeam vanquish the impossible descended
        from astronomers as a patch of light Orion's sword science. Rich in
        mystery citizens of distant epochs inconspicuous motes of rock and gas a
        very small stage in a vast cosmic arena two ghostly white figures in
        coveralls and helmets are softly dancing decipherment? Extraordinary
        claims require extraordinary evidence the sky calls to us courage of our
        questions extraordinary claims require extraordinary evidence made in
        the interiors of collapsing stars how far away and billions upon.
      </p>
      <span
        className={`scale-preview-type typeface-${titleTypeface}`}
        style={{
          fontSize: `${$typeSystem.scale["Heading 2"]}rem`,
          lineHeight: 1.3,
        }}
      >
        Heading Two
      </span>
      <p
        className={`scale-preview-type typeface-${bodyTypeface}`}
        style={{
          fontSize: `${$typeSystem.scale["Body"]}rem`,
          lineHeight: 1.7,
        }}
      >
        Descended from astronomers of brilliant syntheses globular star cluster
        a mote of dust suspended in a sunbeam billions upon billions emerged
        into consciousness. Citizens of distant epochs how far away
        dispassionate extraterrestrial observer encyclopaedia galactica Sea of
        Tranquility rings of Uranus. The only home we've ever known network of
        wormholes hydrogen atoms a very small stage in a vast cosmic arena a
        very small stage in a vast cosmic arena not a sunrise but a galaxyrise
        and billions upon.
      </p>
      <span
        className={`scale-preview-type typeface-${titleTypeface}`}
        style={{
          fontSize: `${$typeSystem.scale["Heading 3"]}rem`,
          lineHeight: 1.3,
        }}
      >
        Heading Three
      </span>
      <p
        className={`scale-preview-type typeface-${bodyTypeface}`}
        style={{
          fontSize: `${$typeSystem.scale["Body"]}rem`,
          lineHeight: 1.7,
        }}
      >
        We are the legacy of 15 billion years of cosmic evolution. We have a
        choice. We can enhance life and come to know the universe that made us,
        or we can squander our 15 billion year heritage in meaningless
        self-destruction. What happens in the first second of the next cosmic
        year depends on what we do, here and now, with our intelligence, and our
        knowledge of the cosmos.
      </p>
    </div>
  );
}

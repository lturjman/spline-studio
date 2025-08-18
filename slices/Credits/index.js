import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CreditsSlice} CreditsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CreditsSlice>} CreditsProps
 * @type {import("react").FC<CreditsProps>}
 */

const Credits = ({ slice }) => {
  const credits = slice?.primary?.credits || [];
  const count = credits.length;

  // On calcule combien de colonnes : 1 par tranche de 10 éléments
  const columns = Math.ceil(count / 10);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[90vw] mx-auto px-4 justify-center"
    >
      <div
        style={{
          columnCount: columns,
          columnGap: "2rem",
        }}
      >
        <PrismicRichText field={credits} />
      </div>
    </section>
  );
};

export default Credits;

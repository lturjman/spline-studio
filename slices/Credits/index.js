import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CreditsSlice} CreditsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CreditsSlice>} CreditsProps
 * @type {import("react").FC<CreditsProps>}
 */

const Credits = ({ slice }) => {
  const credits = slice?.primary?.credits || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 justify-center text-sm"
    >
      <div className="columns-xs">
        <PrismicRichText field={credits} />
      </div>
    </section>
  );
};

export default Credits;

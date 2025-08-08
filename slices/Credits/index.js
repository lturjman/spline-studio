import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CreditsSlice} CreditsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CreditsSlice>} CreditsProps
 * @type {import("react").FC<CreditsProps>}
 */

const Credits = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice?.primary?.credits} />
    </section>
  );
};

export default Credits;

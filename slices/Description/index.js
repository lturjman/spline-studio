import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @type {import("react").FC<DescriptionProps>}
 */

const Description = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice?.primary?.description} />
    </section>
  );
};

export default Description;

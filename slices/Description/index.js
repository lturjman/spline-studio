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
      className="max-w-4xl mx-auto px-4 text-center space-y-4"
    >
      {/* <PrismicRichText field={slice?.primary?.description} /> */}

      <PrismicRichText
        field={slice?.primary?.description}
        components={{
          hyperlink: ({ node, children }) => (
            <a
              href={node.data.url}
              target={node.data.target}
              rel={
                node.data.target === "_blank"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="underline hover:text-emerald-300 transition-colors duration-300"
            >
              {children}
            </a>
          ),
        }}
      />
    </section>
  );
};

export default Description;

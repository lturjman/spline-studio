import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TwinColumnDescriptionSlice} TwinColumnDescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TwinColumnDescriptionSlice>} TwinColumnDescriptionProps
 * @type {import("react").FC<TwinColumnDescriptionProps>}
 */
const TwinColumnDescription = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[87vw] mx-auto px-4 text-justify flex flex-col md:flex-row gap-10"
    >
      <div className="flex-1">
        <PrismicRichText
          field={slice?.primary?.left_description}
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
      </div>

      <div className="flex-1">
        <PrismicRichText
          field={slice?.primary?.right_description}
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
      </div>
    </section>
  );
};

export default TwinColumnDescription;

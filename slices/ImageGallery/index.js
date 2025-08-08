/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @type {import("react").FC<ImageGalleryProps>}
 */
import { PrismicImage } from "@prismicio/react";

const ImageGallery = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.primary?.imagegallery.map(({ photo }) => {
        return <PrismicImage field={photo} key={photo.id} />;
      })}
    </section>
  );
};

export default ImageGallery;

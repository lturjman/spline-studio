/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @type {import("react").FC<VideoProps>}
 */
const Video = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="">
        <div
          className="*:aspect-video my-4 *:w-full *:h-full *:md:max-w-[70vw] *:max-h-[80vh]  flex justify-center "
          dangerouslySetInnerHTML={{ __html: slice?.primary?.video?.html }}
        ></div>
      </div>
    </section>
  );
};

export default Video;

/**
 * @typedef {import("@prismicio/client").Content.DossierSlice} DossierSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DossierSlice>} DossierProps
 * @type {import("react").FC<DossierProps>}
 */

import { PrismicLink } from "@prismicio/react";

const Dossier = ({ slice }) => {
  return (
    <section className="flex justify-center items-center">
      <PrismicLink
        field={slice.primary.dossier}
        target="_blank"
        className=" hover:bg-emerald-300 bg-black hover:text-black text-white rounded-full px-6 py-2 lg:w-[20vw] transition-all text-center"
      />
    </section>
  );
};

export default Dossier;

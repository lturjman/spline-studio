import { createClient } from "@/prismicio";
import { Heading } from "@/components/Heading";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { PrismicRichText } from "@prismicio/react";
import ImagesSpline from "@/components/ImagesGalleryAPropos";
import Link from "next/link";

export default async function SplineStudio() {
  const client = createClient();
  const page = await client.getSingle("spline_studio");

  return (
    <div className="space-y-15">
      <section className="relative flex flex-col items-center justify-center text-center mt-10">
        <div className=" relative w-[80vw] h-[15vh] transition-all m-auto overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-[url('/SplineStudioPage.png')] bg-cover bg-center bg-fixed"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Heading level={1} className=" text-white">
              {" "}
              {page.data.title}
            </Heading>
          </div>
        </div>
      </section>

      <section className=" lg:w-6xl mx-auto text-center px-6">
        <div className=" font-epilogue w-[70vw] m-auto text-xl md:text-3xl uppercase">
          <PrismicRichText field={page.data.accroche} />
        </div>
        <div className="w-[70vw] m-auto mt-10">
          <PrismicRichText field={page.data.presentation} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10 m-auto">
          <div className="order-1 md:order-2">
            <video
              src="/Maolacroix Animation.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="order-2 md:order-1">
            <div className="text-justify">
              {" "}
              <PrismicRichText field={page.data.history} />
            </div>

            <Link href="/films">
              <button className=" m-auto mt-6 hover:bg-emerald-300 bg-black hover:text-black text-white rounded-full px-6 py-2 lg:w-[20vw] transition-all">
                Découvrir nos films
              </button>
            </Link>
          </div>
        </div>

        <ImagesSpline />

        <div>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </section>
    </div>
  );
}

import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/app/components/ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import StarGrid from "@/app/components/StarGrid";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
    <div className="relative ">
      <StarGrid />
     {isFilled.richText(slice.primary.heading) && ( 
    <h1 className="text-balance text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />

    </h1>
  )}

{isFilled.richText(slice.primary.body) && ( 
    <div className="mx-auto mt-6 max-w-md text-balance text-slate-200">
        <PrismicText field={slice.primary.body} />

    </div>
  )}
    <ButtonLink className="mt-8" field={slice.primary.button_link}>{slice.primary.button_label}</ButtonLink>

    <div className="glass-container mt-16 w-fit">
    <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter " />

    <PrismicNextImage field={slice.primary.image} />
    </div>
    </div>
    </Bounded>
  );
};

export default Hero;

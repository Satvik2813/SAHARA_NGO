import { Hero } from "@/sections/Hero";
import { IdentityTrust } from "@/sections/IdentityTrust";
import { ProgramGrid } from "@/sections/ProgramGrid";
import { FeaturedStory } from "@/sections/FeaturedStory";
import { JourneyTeaser } from "@/sections/JourneyTeaser";
import { GalleryTeaser } from "@/sections/GalleryTeaser";
import { TransparencyBand } from "@/sections/TransparencyBand";
import { PressStrip } from "@/sections/PressStrip";
import { DonateBand } from "@/sections/DonateBand";
import { GetInvolvedTeaser } from "@/sections/GetInvolvedTeaser";
import { Seo } from "@/components/Seo";

export function Home() {
  return (
    <>
      <Seo
        title="SAHARA — NGO for the poor & needy in Telangana"
        description="SAHARA is a grassroots NGO supporting children, women, youth and the elderly across Telangana since 1986. Extend a helping hand."
      />
      <Hero />
      <IdentityTrust />
      <ProgramGrid />
      <FeaturedStory />
      <JourneyTeaser />
      <GalleryTeaser />
      <TransparencyBand />
      <PressStrip />
      <DonateBand />
      <GetInvolvedTeaser />
    </>
  );
}

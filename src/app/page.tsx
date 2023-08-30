import EventsSection from "@/components/eventssection/eventssection"
import FeaturedSection from "@/components/featuredsection/featuredsection"
import HeroSection from "@/components/herosection/herosection"


export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturedSection />
      <EventsSection />
    </>
  )
}

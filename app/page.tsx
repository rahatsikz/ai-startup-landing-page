import CallToAction from "@/components/shared/call-to-action";
import ClientReviews from "@/components/shared/client-reviews";
import Companies from "@/components/shared/companies";
import FeatureSection from "@/components/shared/feature-section";
import HeroSection from "@/components/shared/hero-section";
import Pricing from "@/components/shared/pricing";
import SeoSection from "@/components/shared/seo-section";

export default function Home() {
  return (
    <main className=''>
      <div className='px-4 lg:px-6 2xl:px-0'>
        <HeroSection />
        <Companies />
        <FeatureSection />
      </div>

      <SeoSection />
      <div className='px-4 lg:px-6 2xl:px-0'>
        <ClientReviews />
        <Pricing />
        <CallToAction />
      </div>
    </main>
  );
}

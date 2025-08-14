import Image from "next/image";
import { Badge } from "../ui/badge";
import heroDesktopImg from "../../assets/hero-big.png";
import { useNestedTranslations } from "@/hooks/use-safe-translation";

export default function HeroSection() {
  const t = useNestedTranslations("hero-section");
  return (
    <section className='min-h-[400px] py-10 flex flex-col items-center justify-center'>
      <Badge className='bg-background text-foreground border border-border pl-4 pr-5 rounded-full py-2'>
        <Badge className='bg-primary text-foreground rounded-full'>
          {t("bannerBadgeText")}
        </Badge>
        <span className='ml-3 text-base text-primary tracking-wider capitalize'>
          {t("bannerTitle")}
        </span>
      </Badge>
      <h2 className='md:text-7xl text-5xl font-bold mt-8 max-w-2xl text-center capitalize leading-14 md:leading-22'>
        {t("title1")} <br />
        <span className='bg-gradient-to-b from-[#fff] via-[#fff] to-[#B372CF] bg-clip-text text-transparent'>
          {t("title2")}
        </span>
      </h2>
      <p className='max-w-xl text-lg mt-5 tracking-wide text-center'>
        {t("description")}
      </p>
      <div className='relative max-w-4xl w-full mt-10'>
        <Image
          src={heroDesktopImg.src}
          alt='hero'
          className='object-cover relative z-10 md:max-lg:px-4'
          sizes='(max-width: 768px) 100vw, 1000px'
          width={1000}
          height={1000}
        />
        <div
          className='absolute top-0 left-0 w-full h-full z-0 pointer-events-none'
          style={{
            background: `
        radial-gradient(ellipse at top center, rgba(153, 85, 255, 0.8) 0%, transparent 60%),
        radial-gradient(ellipse at left center, rgba(153, 85, 255, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at right center, rgba(153, 85, 255, 0.3) 0%, transparent 50%)
      `,
            filter: "blur(120px)",
          }}
        />
      </div>
    </section>
  );
}

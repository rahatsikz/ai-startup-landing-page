import heroImg from "@/assets/hero-big.png";
import reportImg from "@/assets/report.png";
import visual1 from "@/assets/Visual.png";
import visual2 from "@/assets/Visual2.png";
import { useNestedTranslations } from "@/hooks/use-safe-translation";
import Image from "next/image";

export default function FeatureSection() {
  const tHeader = useNestedTranslations("feature-section-header");
  const t = useNestedTranslations("feature-row-texts");
  return (
    <section className='max-w-7xl w-full mx-auto pt-6 pb-20'>
      <h3 className='md:text-3xl text-xl font-bold text-center max-w-2xl text-pretty mx-auto tracking-wide md:leading-10'>
        {tHeader()}
      </h3>
      <div className='grid grid-cols-12 gap-5 lg:gap-x-5 lg:gap-y-6 mt-6 md:mt-10'>
        {/* 1st row */}
        <div className='col-span-12 md:col-span-6 lg:col-span-4 border border-border rounded-lg px-10 pt-2 pb-[25px] flex flex-col items-center justify-center'>
          <Image
            src={visual1.src}
            alt='ring-svg'
            className='md:w-96 w-72 object-cover'
            sizes='(max-width: 768px) 100vw, 384px'
            width={384}
            height={206}
          />
          <div className='mt-2 md:mt-4'>
            <h4 className='text-xl font-semibold text-foreground capitalize'>
              {t("0.title")}
            </h4>
            <p className='mt-1 text-foreground/70 text-sm md:text-pretty'>
              {t("0.description")}
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-8 border border-border rounded-lg'>
          <div className='relative w-full h-72 md:h-full overflow-hidden rounded-lg'>
            <Image
              src={heroImg.src}
              alt='Dashboard'
              sizes='(max-width: 768px) 100vw, 800px'
              width={800}
              height={800}
              className='absolute w-full h-full object-cover brightness-60 max-lg:px-11 lg:-right-28 top-12 md:top-20 scale-120'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent' />

            {/* Content */}
            <div className='absolute bottom-0 z-10 px-8 py-8 text-white max-w-md backdrop-blur-sm rounded-lg'>
              <h3 className='text-xl font-semibold capitalize'>
                {t("1.title")}
              </h3>
              <p className='text-sm text-white/80 mt-1'>{t("1.description")}</p>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className='col-span-12 md:col-span-6 lg:col-span-8 border border-border rounded-lg'>
          <div className='relative w-full h-72 md:h-full overflow-hidden rounded-lg'>
            {/* Background image */}
            <Image
              src={reportImg.src}
              alt='Dashboard'
              sizes='(max-width: 768px) 100vw, 600px'
              width={800}
              height={600}
              className='absolute w-full h-full object-contain brightness-60 -right-0 top-4 max-lg:px-4 lg:top-12 '
            />

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent' />

            {/* Content */}
            <div className='absolute bottom-0  z-10 px-8 py-[27px] text-white max-w-md backdrop-blur-sm rounded-lg'>
              <h3 className='text-xl font-semibold capitalize'>
                {t("2.title")}
              </h3>
              <p className='text-sm text-white/80 mt-1'>{t("2.description")}</p>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4 border border-border rounded-lg px-10 pt-2 pb-[28px] flex flex-col items-center justify-center'>
          <Image
            src={visual2.src}
            alt='ring-svg'
            className='lg:w-68 w-52 object-cover'
            sizes='(max-width: 768px) 100vw, 384px'
            width={384}
            height={206}
          />
          <div className='mt-2 md:mt-4'>
            <h4 className='text-xl font-semibold text-foreground'>
              {t("3.title")}
            </h4>
            <p className='mt-1 text-foreground/70 text-sm text-pretty'>
              {t("3.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

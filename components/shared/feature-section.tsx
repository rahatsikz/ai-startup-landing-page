import heroImg from "@/assets/hero-big.png";
import reportImg from "@/assets/report.png";
import visual1 from "@/assets/Visual.png";
import visual2 from "@/assets/Visual2.png";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className='max-w-7xl w-full mx-auto pt-6 pb-20'>
      <h3 className='md:text-3xl text-xl font-bold text-center max-w-2xl text-pretty mx-auto tracking-wide md:leading-10'>
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels
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
              SEO goal setting
            </h4>
            <p className='mt-1 text-foreground/70 text-sm md:text-pretty'>
              Helps you set and achieve SEO goals with our most dedicated guided
              assistance
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
                User friendly dashboard
              </h3>
              <p className='text-sm text-white/80 mt-1'>
                Perform complex SEO audits and optimizations with a single click
              </p>
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
                Visual reports with charts
              </h3>
              <p className='text-sm text-white/80 mt-1'>
                Visual insights into your site&#39;s performance with various
                charts and graphs
              </p>
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
              Smart Keyword Generator
            </h4>
            <p className='mt-1 text-foreground/70 text-sm text-pretty'>
              Automatic suggestions and the best keywords to target for better
              results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

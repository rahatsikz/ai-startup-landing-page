import clientImg1 from "@/assets/client1.png";
import lineHorizontal from "@/assets/Line-horizontal.png";
import lineVertical from "@/assets/Line-vertical.png";
import { useNestedTranslations } from "@/hooks/use-safe-translation";
import Image from "next/image";
export default function ClientReviews() {
  const tHeader = useNestedTranslations("client-reviews-header");
  const tSubHeader = useNestedTranslations("client-reviews-subheader");
  const tReview = useNestedTranslations("client-reviews");
  return (
    <section className='md:my-20 my-10 max-w-4xl mx-auto'>
      <h3 className='text-3xl font-bold text-center capitalize'>{tHeader()}</h3>
      <p className='text-center text-foreground/70 mt-2 max-w-xs text-pretty mx-auto'>
        {tSubHeader()}
      </p>
      <div className='md:mt-20 mt-8 relative'>
        <Image
          src={lineHorizontal.src}
          alt='line'
          className='absolute top-0 left-0 w-full  h-px object-cover pointer-events-none max-md:hidden'
          width={96}
          height={2}
        />
        <Image
          src={lineHorizontal.src}
          alt='line'
          className='absolute bottom-0 left-0 w-full  h-px object-cover pointer-events-none max-md:hidden'
          width={96}
          height={2}
        />

        <div className='flex max-md:flex-col items-center gap-8 relative z-10'>
          <div className='w-60 max-md:hidden' />
          <div className='md:w-[calc(100%-18rem)] w-full relative h-[370px] -my-12'>
            <Image
              src={clientImg1.src}
              alt='client'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='size-68 absolute top-1/2 left-1/2 -translate-1/2  -translate-y-1/2 rounded-lg object-cover '
              width={64}
              height={64}
            />
            <div
              className='absolute inset-0 z-0 pointer-events-none'
              style={{
                background: `
                 radial-gradient(
                   ellipse at top center,
                   rgba(153, 85, 255, 0.6) 0%,
                   transparent 30%
                 ),
                 radial-gradient(
                   ellipse at bottom center,
                   rgba(153, 85, 255, 0.4) 0%,
                   transparent 60%
                 ),
                 radial-gradient(
                   ellipse at left center,
                   rgba(153, 85, 255, 0.3) 0%,
                   transparent 60%
                 ),
                 radial-gradient(
                   ellipse at right center,
                   rgba(153, 85, 255, 0.3) 0%,
                   transparent 60%
                 ),
                 radial-gradient(
                   circle at center,
                   rgba(153, 85, 255, 0.1) 0%,
                   transparent 70%
                 )`,
                filter: "blur(100px)",
              }}
            />
            <Image
              src={lineVertical.src}
              alt='line'
              className='absolute top-0 bottom-0 -left-px h-full w-px object-cover pointer-events-none max-md:hidden'
              width={96}
              height={2}
            />
            <Image
              src={lineVertical.src}
              alt='line'
              className='absolute top-0 bottom-0 right-0 h-full w-px object-cover pointer-events-none max-md:hidden'
              width={96}
              height={2}
            />
          </div>
          <div className='w-full max-md:text-center'>
            <blockquote className='text-foreground text-pretty text-2xl font-semibold max-w-2xl'>
              ”{tReview("0.review")}”
            </blockquote>
            <p className='text-foreground/70 text-pretty text-sm mt-4'>
              {tReview("0.name")}
            </p>
            <p className='text-foreground/70 text-pretty text-sm mt-0.5'>
              {tReview("0.role")}
            </p>
          </div>
          <div className='w-20' />
        </div>
      </div>
    </section>
  );
}

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CallToAction() {
  return (
    <section className='relative h-96 md:h-[500px] max-w-7xl rounded-xl mb-12 mt-4 md:mt-6 mx-auto border border-border flex items-center justify-center '>
      {/* Fading Grid Pattern */}
      <div
        className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none h-60'
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        }}
      ></div>

      {/* Radial Gradient from Top Middle */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            "radial-gradient(ellipse 30% 50% at 50% 0%, rgba(152, 85, 255,0.5), transparent)",
        }}
      ></div>

      {/* Content */}
      <div className='z-10 text-center px-4'>
        <h3 className='text-4xl max-md:text-3xl font-bold text-foreground leading-tight max-w-2xl capitalize text-pretty mx-auto'>
          AI-driven SEO optimization for everyone
        </h3>

        <form className='mt-8 flex max-w-md mx-auto'>
          <Input
            type='email'
            placeholder='Your email'
            className='rounded-r-none focus-visible:border-primary border-2 border-r-0 py-5 !bg-background/5  focus-visible:ring-0 placeholder:text-foreground/50 placeholder:pl-2 text-foreground/80'
          />
          <Button
            type='submit'
            className='rounded-l-none bg-foreground text-background hover:bg-gray-200 py-[21.5px]'
          >
            Join waitlist
          </Button>
        </form>

        <p className='mt-4 text-sm text-white/60'>
          No credit card required &middot; 7-days free trial
        </p>
      </div>
    </section>
  );
}

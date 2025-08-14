import company1 from "@/assets/acme 1.png";
import company2 from "@/assets/echo1.png";
import company3 from "@/assets/quan1.png";
import company4 from "@/assets/pulse1.png";
import company5 from "@/assets/outside1.png";
import company6 from "@/assets/apex1.png";
import company7 from "@/assets/cel1.png";
import company8 from "@/assets/twice1.png";
import Image from "next/image";
import { useNestedTranslations } from "@/hooks/use-safe-translation";

const images = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
];

export default function Companies() {
  const t = useNestedTranslations("company-section-header");
  return (
    <section className='max-w-7xl w-full mx-auto py-10 xl:py-20 '>
      <h3 className='text-3xl font-bold text-center'>{t()}</h3>
      <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        {images.map((image, index) => (
          <li
            key={index}
            className='border border-border rounded-lg h-32 flex items-center justify-center'
          >
            <Image
              src={image.src}
              alt={`Company ${index + 1}`}
              className='w-48 object-cover'
              sizes='(max-width: 768px) 100vw, 180px'
              loading='lazy'
              width={180}
              height={100}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

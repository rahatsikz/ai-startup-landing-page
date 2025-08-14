import logo from "@/assets/Logo.png";
import { useNestedTranslations } from "@/hooks/use-safe-translation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Footer() {
  const tSiteInfo = useNestedTranslations("metadata");
  const tFooter = useNestedTranslations("footer-options");
  const rawT = useTranslations(); 

  // Get footer-options as raw array from translations
  const footerSections: Array<{
    title: string;
    shortTitle?: string;
    "sub-pages": Array<{ title: string; "short-title"?: string }>;
  }> = rawT.raw("footer-options");

  return (
    <footer className='bg-primary/5 text-foreground py-12 2xl:py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div
          className={cn("flex items-start flex-wrap gap-7", "justify-between")}
        >
          {/* Logo and Social Section */}
          <div className='max-md:flex items-center max-md:gap-6 md:space-y-5 max-md:w-full'>
            <div className='flex items-center space-x-3'>
              <Image
                src={logo.src}
                alt='logo'
                className='size-9'
                width={48}
                height={48}
              />
              <span className='text-lg font-semibold'>
                {tSiteInfo("title")}
              </span>
            </div>

            <div className='flex space-x-4'>
              <SocialIcon href='#' icon={<FaXTwitter className='w-4 h-4' />} />
              <SocialIcon href='#' icon={<FaInstagram className='w-4 h-4' />} />
              <SocialIcon href='#' icon={<FaYoutube className='w-4 h-4' />} />
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {footerSections.map((section, sectionIndex) => (
            <div className='space-y-4' key={sectionIndex}>
              <h3 className='text-foreground font-semibold text-base'>
                {section.shortTitle ? (
                  <>
                    <span className='sm:block hidden'>
                      {tFooter(`${sectionIndex}.title`)}
                    </span>
                    <span className='sm:hidden'>
                      {tFooter(`${sectionIndex}.short-title`)}
                    </span>
                  </>
                ) : (
                  tFooter(`${sectionIndex}.title`)
                )}
              </h3>

              <ul className='space-y-3'>
                {section["sub-pages"].map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href='#'
                      className='text-foreground/70 hover:text-white transition-colors text-sm'
                    >
                      {sub["short-title"] ? (
                        <>
                          <span className='sm:block hidden'>
                            {tFooter(
                              `${sectionIndex}.sub-pages.${subIndex}.title`
                            )}
                          </span>
                          <span className='sm:hidden'>
                            {tFooter(
                              `${sectionIndex}.sub-pages.${subIndex}.short-title`
                            )}
                          </span>
                        </>
                      ) : (
                        tFooter(`${sectionIndex}.sub-pages.${subIndex}.title`)
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className='w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
    >
      {icon}
    </a>
  );
}

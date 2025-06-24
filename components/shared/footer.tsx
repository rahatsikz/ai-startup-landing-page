import logo from "@/assets/Logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
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
              <span className='text-lg font-semibold'>AI Startup Website</span>
            </div>

            {/* Social Icons - positioned higher */}
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <FaXTwitter className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <FaInstagram className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors'
              >
                <FaYoutube className='w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className='space-y-4'>
            <h3 className='text-foreground font-semibold text-base'>Product</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Integration
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className='space-y-4'>
            <h3 className='text-white font-semibold text-base'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Manifesto
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Contract
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className='space-y-4'>
            <h3 className='text-white font-semibold text-base'>
              <span className='sm:block hidden'>Resource</span>
              <span className='sm:hidden'>Tools</span>
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  <span className='sm:block hidden'>Examples</span>
                  <span className='sm:hidden'>Leads</span>
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className='space-y-4'>
            <h3 className='text-white font-semibold text-base'>Legal</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-foreground/70 hover:text-white transition-colors text-sm'
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

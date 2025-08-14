"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useNestedTranslations } from "@/hooks/use-safe-translation";
import { Link } from "@/i18n/navigation";
import logo from "@/assets/Logo.png";

// Common Nav Structure Keys
const NAV_SECTIONS = [0, 1, 2] as const;
const SINGLE_LINKS = [3, 4] as const;

export default function Navbar() {
  const isTab = useMediaQuery("(max-width: 1024px)");
  const [scrolled, setScrolled] = useState(false);

  const tNavOptions = useNestedTranslations("navoptions");
  const tNavActions = useNestedTranslations("navActionText");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-background border-border shadow-sm px-6 sm:px-8 py-4 sticky top-0 z-50 transition-colors duration-500",
        scrolled ? "border-b border-border" : "border-b-transparent"
      )}
    >
      <div className='flex justify-between items-center gap-4 sm:gap-8 container mx-auto'>
        {/* Logo */}
        <Link href=''>
          <Image
            src={logo.src}
            alt='logo'
            className='size-9'
            width={48}
            height={48}
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu
          viewport={false}
          className='justify-center py-1.5 px-2 hidden lg:flex border border-border rounded-full'
        >
          <NavigationMenuList className='gap-8'>
            {NAV_SECTIONS.map((sectionIndex) => (
              <NavigationMenuItem key={sectionIndex}>
                <NavigationMenuTrigger className='rounded-full xl:px-6'>
                  {tNavOptions(`${sectionIndex}.trigger`)}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='!bg-background text-foreground border border-border rounded-md shadow-lg  lg:!top-11'>
                  <ul
                    className={cn(
                      "grid gap-2 p-4",
                      sectionIndex === 2
                        ? "w-[400px] sm:grid-cols-2"
                        : "w-[500px] sm:grid-cols-2"
                    )}
                  >
                    {Array.from({
                      length: sectionIndex === 2 ? 3 : 4, // Company has 3 items, others 4
                    }).map((_, i) => (
                      <ListItem
                        key={i}
                        href=''
                        title={tNavOptions(
                          `${sectionIndex}.children.${i}.title`
                        )}
                      >
                        {tNavOptions(
                          `${sectionIndex}.children.${i}.description`
                        )}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {SINGLE_LINKS.map((linkIndex) => (
              <NavigationMenuItem key={linkIndex}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full xl:px-6"
                  )}
                >
                  <Link href=''>{tNavOptions(`${linkIndex}.trigger`)}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className='flex items-center gap-4'>
          <Button
            className='relative  text-white font-medium px-6 py-2 rounded-full  border border-[#9d6dff] shadow-[0_0_12px_2px_rgba(153,85,255,0.5)] transition hover:brightness-110'
            size='lg'
            style={{
              background: `linear-gradient(120deg, #9855FF, #7A3FFF, #4B1FA6)`,
              backgroundSize: "200% 200%",
              animation: "flow-button 5.5s ease-in-out infinite",
              boxShadow: `inset 0 4px 8px rgba(255, 255, 255, 0.1),
                inset 0 -4px 8px rgba(0, 0, 0, 0.3),
                0 0 10px rgba(153,85,255,0.6)`,
            }}
          >
            {tNavActions()}
          </Button>

          {isTab && <HamburgerMenu className='lg:hidden' />}
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className='block rounded p-3 hover:bg-muted/50 transition'
        >
          <div className='text-sm font-medium'>{title}</div>
          <p className='text-foreground/60 text-sm'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function HamburgerMenu(props: React.HTMLAttributes<HTMLDivElement>) {
  const tNavOptions = useNestedTranslations("navoptions");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(props?.className)}>
        <Button variant='outline' size='icon' aria-label='Menu'>
          <Menu className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-48 p-1 mr-2' sideOffset={10}>
        {NAV_SECTIONS.map((sectionIndex) => (
          <DropdownMenuSub key={sectionIndex}>
            <DropdownMenuSubTrigger>
              {tNavOptions(`${sectionIndex}.trigger`)}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={13} className='w-48'>
              {Array.from({
                length: sectionIndex === 2 ? 3 : 4,
              }).map((_, i) => (
                <DropdownMenuItem asChild key={i}>
                  <Link href=''>
                    {tNavOptions(`${sectionIndex}.children.${i}.title`)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}

        {SINGLE_LINKS.map((linkIndex) => (
          <DropdownMenuItem asChild key={linkIndex} className='mt-1'>
            <Link href=''>{tNavOptions(`${linkIndex}.trigger`)}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

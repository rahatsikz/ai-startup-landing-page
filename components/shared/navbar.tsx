"use client";
import Link from "next/link";
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
import React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const isTab = useMediaQuery("(max-width: 1024px)");

  return (
    <header className='bg-background border-b border-border shadow-sm px-6 sm:px-8 py-4 sticky top-0 z-50'>
      <div className='flex justify-between items-center gap-4 sm:gap-8 container mx-auto '>
        <Image
          src={logo.src}
          alt='logo'
          className='size-9'
          width={48}
          height={48}
        />
        <NavigationMenu
          viewport={false}
          className='justify-center py-1.5 px-2 hidden lg:flex border border-border rounded-full'
        >
          <NavigationMenuList className='gap-8'>
            {/* Features */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className='rounded-full xl:px-6'>
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className='!bg-background text-foreground border border-border rounded-md shadow-lg  lg:!top-11'>
                <ul className='grid w-[500px] gap-2 p-4 sm:grid-cols-2'>
                  <ListItem href='' title='Analytics'>
                    Powerful real-time metrics and insights.
                  </ListItem>
                  <ListItem href='' title='Automation'>
                    Automate repetitive workflows easily.
                  </ListItem>
                  <ListItem href='' title='Collaboration'>
                    Multi-user team features to improve teamwork.
                  </ListItem>
                  <ListItem href='' title='Security'>
                    Enterprise-grade security and privacy features.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Developers */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className='rounded-full xl:px-6'>
                Developers
              </NavigationMenuTrigger>
              <NavigationMenuContent className='!bg-background text-foreground border border-border rounded-md shadow-lg lg:!top-11'>
                <ul className='grid w-[500px] gap-2 p-4 sm:grid-cols-2'>
                  <ListItem href='' title='API Docs'>
                    Complete API documentation &amp; examples.
                  </ListItem>
                  <ListItem href='' title='SDKs'>
                    Download client SDKs for popular languages.
                  </ListItem>
                  <ListItem href='' title='Community'>
                    Join the developer community forums.
                  </ListItem>
                  <ListItem href='' title='Changelog'>
                    See the latest updates &amp; version history.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Company */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className='rounded-full xl:px-6'>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className='!bg-background text-foreground border border-border rounded-md shadow-lg lg:!top-11'>
                <ul className='grid w-[400px] gap-2 p-4 sm:grid-cols-2'>
                  <ListItem href='' title='About Us'>
                    Our story, team, and values.
                  </ListItem>
                  <ListItem href='' title='Careers'>
                    Join us — explore our job openings.
                  </ListItem>
                  <ListItem href='' title='Contact'>
                    Get in touch with us.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Blog */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rounded-full xl:px-6"
                )}
              >
                <Link href=''>Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Changelog */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rounded-full xl:px-6"
                )}
              >
                <Link href=''>Changelog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
            Join waitlist
          </Button>

          {isTab && <HamburgerMenu className='lg:hidden' />}
        </div>
      </div>
    </header>
  );
}

// Reusable list item component
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
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

export function HamburgerMenu({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(props?.className)}>
        <Button variant='outline' size='icon' aria-label='Menu'>
          <Menu className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-48 p-1'>
        {/* Features Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Features</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={13} className='w-48 '>
            <DropdownMenuItem asChild>
              <Link href=''>Analytics</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>Automation</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>Collaboration</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>Security</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Developers Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Developers</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={13} className='w-48'>
            <DropdownMenuItem asChild>
              <Link href=''>API Docs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>SDKs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>Community</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Company Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Company</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={13} className='w-48'>
            <DropdownMenuItem asChild>
              <Link href=''>About Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>Careers</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href=''>Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Single links */}
        <DropdownMenuItem asChild className='mt-1'>
          <Link href=''>Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href=''>Changelog</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

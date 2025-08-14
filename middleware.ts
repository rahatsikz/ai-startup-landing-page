import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "hi", "ja"];
const defaultLocale = "en";

const countryLocaleMap: Record<string, string> = {
  IN: "hi", // India
  JP: "ja", // Japan
};

async function getCountryFromIP(request: NextRequest): Promise<string> {
  const headerCountry = request.headers.get("x-vercel-ip-country");
  if (headerCountry) return headerCountry;

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "8.8.8.8"; // fallback for local testing

    const res = await fetch(`https://ipapi.co/${ip}/country/`, {
      cache: "no-store",
    });

    if (res.ok) {
      return (await res.text()).trim();
    }
  } catch (error) {
    console.error("Error fetching country:", error);
  }

  return "US"; // default fallback
}

function getPreferredLocale(country: string): string {
  return countryLocaleMap[country] ?? defaultLocale;
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathname === "/" && !pathnameHasLocale) {
    const country = await getCountryFromIP(request);
    const preferredLocale = getPreferredLocale(country);

    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url));
  }

  return createMiddleware({ locales, defaultLocale })(request);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};

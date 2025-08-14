// Recursively build dot paths for only string leaves
export type DotPaths<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${Extract<K, string>}`
    : T[K] extends Record<string, any>
    ? DotPaths<T[K], `${Prefix}${Extract<K, string>}.`>
    : never;
}[keyof T];

// Public type: string keys only
export type TranslationKeys<T> = DotPaths<T>;


export type Messages = {
  metadata: {
    title: string;
    description: string;
  };
  navoptions: Array<
    | {
        "trigger:"?: string;
        children: { title: string; description: string; href: string }[];
      }
    | { trigger: string; href: string }
  >;
  navActionText: string;
  "hero-section": {
    bannerBadgeText: string;
    bannerTitle: string;
    title1: string;
    title2: string;
    description: string;
  };
  "company-section-header": string;
  "feature-section-header": string;
  "feature-row-texts": { title: string; description: string }[];
  "seo-section-header": string;
  "seo-row-texts": { title: string; description: string }[];
  "client-reviews-header": string;
  "client-reviews-subheader": string;
  "client-reviews": { name: string; role: string; review: string }[];
  pricings: {
    name: string;
    price: string;
    features: string[];
    highlighted?: boolean;
  }[];
  "pricings-header": string;
  "pricing-subheader": string;
  "pricing-action": string;
  "call-to-action-header": string;
  "call-to-action-input": { placeholder: string; buttonText: string };
  "call-to-action-footer": string;
  "footer-options": Array<{
    title: string;
    "mobile-screen-title"?: string;
    sub-pages: { title: string; href: string; "mobile-title"?: string }[];
  }>;
};

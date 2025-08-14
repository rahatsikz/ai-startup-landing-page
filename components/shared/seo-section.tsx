import {
  BarChart3,
  Bell,
  FileText,
  Link,
  MousePointer,
  PieChart,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNestedTranslations } from "@/hooks/use-safe-translation";

const ICONS: LucideIcon[] = [
  PieChart,
  TrendingUp,
  Sparkles,
  FileText,
  Target,
  Bell,
  Link,
  MousePointer,
  BarChart3,
];

// bg-gradient-to-br from-primary/30 via-35% via-transparent to-background

export default function SeoSection() {
  const tSeoFeatures = useNestedTranslations("seo-row-texts");
  const tHeader = useNestedTranslations("seo-section-header");
  return (
    <section
      className='lg:py-24 py-12 px-8 2xl:px-0'
      style={{
        backgroundImage: `
    linear-gradient(
      to bottom right,
      oklch(0.6156 0.238559 296.8541 / 0.2),
      transparent,
      transparent
    ),
    linear-gradient(
      to top right,
      oklch(0.6156 0.238559 296.8541 / 0.05),
      transparent,
      transparent
    )
  `,
        backgroundColor: "oklch(0.129 0.042 264.695)",
      }}
    >
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold max-w-xs capitalize leading-10 tracking-wide mb-9'>
          {tHeader()}
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-24 md:gap-y-9'>
          {ICONS.map((icon, index) => {
            const IconComponent = icon;
            return (
              <Card
                key={index}
                className='bg-transparent border-none shadow-none p-0'
              >
                <CardContent className='p-0'>
                  <div className='flex items-center gap-3 mb-2'>
                    <IconComponent className='w-4 h-4 text-foreground/80' />
                    <h3 className='text-xl font-semibold  text-white'>
                      {tSeoFeatures(index + ".title")}
                    </h3>
                  </div>

                  <p className='text-foreground/70 text-pretty leading-relaxed'>
                    {tSeoFeatures(index + ".description")}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

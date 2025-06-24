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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: PieChart,
    title: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: TrendingUp,
    title: "Visual reports",
    description: "Visual insights into your site's performance and health.",
  },
  {
    icon: Sparkles,
    title: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
  },
  {
    icon: FileText,
    title: "Content evaluation",
    description: "Simple corrections for immediate improvements in content.",
  },
  {
    icon: Target,
    title: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
  },
  {
    icon: Bell,
    title: "Automated alerts",
    description:
      "Automatic notifications about your SEO health, including quick fixes.",
  },
  {
    icon: Link,
    title: "Link Optimization Wizard",
    description:
      "Guides you through the process of creating and managing links.",
  },
  {
    icon: MousePointer,
    title: "One-click optimization",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: BarChart3,
    title: "Competitor reports",
    description:
      "Provides insights into competitors' keyword strategies and ranking.",
  },
];

// bg-gradient-to-br from-primary/30 via-35% via-transparent to-background

export default function SeoSection() {
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
          Elevate your SEO efforts with us
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-24 md:gap-y-9'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className='bg-transparent border-none shadow-none p-0'
              >
                <CardContent className='p-0'>
                  <div className='flex items-center gap-3 mb-2'>
                    <IconComponent className='w-4 h-4 text-foreground/80' />
                    <h3 className='text-xl font-semibold  text-white'>
                      {feature.title}
                    </h3>
                  </div>

                  <p className='text-foreground/70 text-pretty leading-relaxed'>
                    {feature.description}
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

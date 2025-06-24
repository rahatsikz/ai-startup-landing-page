import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pricing",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
  },
  {
    name: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
  },
];

export default function Pricing() {
  return (
    <div className='lg:py-16 py-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-bold mb-1.5'>Pricing</h1>
          <p className='text-base text-foreground/80 max-w-md mx-auto'>
            Choose the right plan to meet your SEO needs and start optimizing
            today.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto'>
          {plans.map((plan, index) => (
            <Card
              key={index}
              style={{
                boxShadow: plan.highlighted
                  ? "0px 0px 300px 1px rgba(152, 85, 255, 0.35)"
                  : "",
              }}
              className={`bg-gray-900 border-gray-800 text-foreground relative ${
                plan.highlighted
                  ? "z-10 bg-gradient-to-b from-purple-900/20 to-gray-900"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div
                  className='absolute top-0 left-0 w-full h-full z-0 pointer-events-none'
                  style={{
                    background: `
         radial-gradient(
                   circle at center,
                   rgba(153, 85, 255, 0.5) 0%,
                   transparent 70%
                 )
       
      `,
                    filter: "blur(120px)",
                  }}
                />
              )}
              <CardHeader className='pb-4'>
                <CardTitle className='text-2xl font-bold'>
                  {plan.name}
                </CardTitle>
                <div className='text-3xl font-bold text-gray-300'>
                  {plan.price}
                </div>
              </CardHeader>
              <CardContent className='flex flex-col justify-between h-full space-y-10'>
                <div className='space-y-4'>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className='flex items-center gap-2.5'
                    >
                      <Check
                        className='size-3.5 text-foreground/90 flex-shrink-0'
                        strokeWidth={3}
                      />
                      <span className='text-foreground'>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size={"lg"}
                  className={`w-full rounded-xl py-4 px-6 font-medium transition-all tracking-wide duration-200 ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-primary/80 to-primary/90 hover:from-primary hover:to-primary/90 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.1)]"
                      : "bg-gradient-to-b from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.1)] border-0"
                  }`}
                  variant='ghost'
                >
                  Join waitlist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

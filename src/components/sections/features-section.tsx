import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScanLine, QrCode, ShieldCheck, WifiOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: ScanLine,
    title: "Instant Scanning",
    description: "Real-time QR code scanning with 99.9% accuracy guaranteed using advanced camera optics."
  },
  {
    icon: QrCode,
    title: "Easy Generation",
    description: "Create custom QR codes from any text or URL in seconds with our intuitive generator."
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: "Scan and generate QR codes even without an internet connection, ensuring reliability anytime."
  },
  {
    icon: ShieldCheck,
    title: "Smart History",
    description: "Access all your scanned and created codes with intelligent search and management features."
  }
];

const iconColors = [
  { text: "text-[#007BFF]", bg: "bg-[#007BFF]/10" }, // Blue
  { text: "text-[#FFA500]", bg: "bg-[#FFA500]/10" }, // Orange
  { text: "text-[#90EE90]", bg: "bg-[#90EE90]/10" }, // Light Green
  { text: "text-[#007BFF]", bg: "bg-[#007BFF]/10" },  // Blue
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Scanify?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the most advanced QR code technology with unmatched precision and ease of use.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <div className={`${iconColors[index % iconColors.length].bg} p-4 rounded-full mb-4`}>
                <feature.icon className={`w-8 h-8 ${iconColors[index % iconColors.length].text}`} />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

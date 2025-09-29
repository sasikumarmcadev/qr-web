import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download, Apple } from "lucide-react";

export function HeroSection() {
  const phoneMockup = PlaceHolderImages.find((img) => img.id === "phone-mockup");

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
          Highest quality
          <span className="text-primary"> QR scanner and generator</span> app at the lowest effort
        </h1>
        <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
          Get more from your QR codes with our advanced AI-powered content suggestion tool! Create and scan with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="https://github.com/sasikumarmcadev/qr-apk/raw/refs/heads/main/qrscanner.apk" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <Download className="mr-2" />
              Download Android APK
            </Button>
          </a>
          <Button size="lg" variant="outline" disabled>
            <Apple className="mr-2" />
            iOS Version Soon
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        {phoneMockup && (
          <Image
            src={phoneMockup.imageUrl}
            alt={phoneMockup.description}
            width={350}
            height={700}
            data-ai-hint={phoneMockup.imageHint}
            className="rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
    </section>
  );
}

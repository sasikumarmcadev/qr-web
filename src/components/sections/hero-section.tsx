import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download, Apple, Star } from "lucide-react";

export function HeroSection() {
  const phoneMockup1 = PlaceHolderImages.find((img) => img.id === "phone-mockup-1");
  const phoneMockup2 = PlaceHolderImages.find((img) => img.id === "phone-mockup-2");

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-theme(spacing.14))] py-12 md:py-20 bg-background">
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
          <span className="text-primary"> QR scanner and generator</span> app at the lowest effort
        </h1>
        <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
          Scan QR, barcode and generate 6 types of content like WiFi, text, URL, contact, and email.
        </p>
        <div className="flex flex-col gap-4">
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
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-12 text-sm text-muted-foreground mt-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">99.9%</p>
              <p className="text-muted-foreground mt-1">Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary flex items-center justify-center">
                4.8<Star className="w-8 h-8 ml-1 fill-current" />
              </p>
              <p className="text-muted-foreground mt-1">Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end">
        {phoneMockup1 && (
          <Image
            src={phoneMockup1.imageUrl}
            alt={phoneMockup1.description}
            width={300}
            height={600}
            data-ai-hint={phoneMockup1.imageHint}
            className="rounded-3xl transform transition-transform duration-500 hover:scale-105 w-full max-w-[220px] sm:max-w-[280px]"
          />
        )}
        {phoneMockup2 && (
          <Image
            src={phoneMockup2.imageUrl}
            alt={phoneMockup2.description}
            width={300}
            height={600}
            data-ai-hint={phoneMockup2.imageHint}
            className="rounded-3xl transform transition-transform duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[350px] -ml-16"
          />
        )}
      </div>
    </section>
  );
}

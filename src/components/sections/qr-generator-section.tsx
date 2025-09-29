import { QrCodeGenerator } from "@/components/qr-code-generator";

export function QrGeneratorSection() {
  return (
    <section id="generate" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Generate Your QR Code</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Enter any text or URL below to create your custom QR code. Use our AI to suggest content for your links!
          </p>
        </div>
        <QrCodeGenerator />
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Download, QrCode } from "lucide-react";
import { suggestQrCodeContent } from "@/ai/flows/suggest-qr-code-content";
import { useToast } from "@/hooks/use-toast";

export function QrCodeGenerator() {
  const [inputValue, setInputValue] = useState<string>("https://firebase.google.com/");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isSuggesting, setIsSuggesting] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const { toast } = useToast();

  const handleSuggestion = async () => {
    if (!inputValue.startsWith("http")) {
      toast({
        title: "Invalid URL",
        description: "AI suggestions only work with valid URLs (e.g., https://...).",
        variant: "destructive",
      });
      return;
    }

    setIsSuggesting(true);
    try {
      const result = await suggestQrCodeContent({ url: inputValue });
      setInputValue(result.suggestion);
    } catch (error) {
      console.error("AI suggestion failed:", error);
      toast({
        title: "Suggestion Failed",
        description: "Could not generate an AI suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSuggesting(false);
    }
  };
  
  const generateQrCode = () => {
    if (!inputValue) {
      toast({
        title: "Input required",
        description: "Please enter text or a URL to generate a QR code.",
        variant: "destructive",
      });
      return;
    }
    setIsGenerating(true);
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(inputValue)}`;
    setQrCodeUrl(url);
    setTimeout(() => setIsGenerating(false), 500);
  };
  
  const handleDownload = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.target = "_blank";
    link.download = 'scanify-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
      <div className="flex flex-col items-center justify-center bg-card rounded-lg p-6 min-h-[320px] shadow-lg border">
        {qrCodeUrl ? (
          <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95">
            <p className="font-semibold text-center">Your QR Code is ready!</p>
            <Image
              src={qrCodeUrl}
              alt="Generated QR Code"
              width={256}
              height={256}
              className="rounded-lg border-4 border-white shadow-md"
            />
            <Button onClick={handleDownload} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <QrCode className="mx-auto h-16 w-16 mb-4" />
            <p>Your generated QR code will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background animate-fade-in-down">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a href="https://github.com/sasikumarmcadev/qr-apk/raw/refs/heads/main/qrscanner.apk" target="_blank" rel="noopener noreferrer">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download APK
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download APK
          </Button>
        </div>
      </div>
    </header>
  );
}

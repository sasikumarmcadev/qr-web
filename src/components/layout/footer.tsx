import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
        </div>
        <div className="flex flex-col items-center text-center md:items-end md:text-right">
          <p className="text-sm text-muted-foreground">
            Developed by sasikumar
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Qr scanner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { QrCode } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <QrCode className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
      <span className="text-xl sm:text-2xl font-bold font-headline">
        qr scanner
      </span>
    </a>
  );
}

import { QrCode } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <QrCode className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline">
        Scanify
      </span>
    </a>
  );
}

import { MessageCircle } from 'lucide-react';

type CTAButtonProps = {
  label: string;
  variant?: 'solid' | 'outline';
  withWhatsApp?: boolean;
  className?: string;
};

export default function CTAButton({
  label,
  variant = 'solid',
  withWhatsApp = false,
  className = '',
}: CTAButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full';
  const styles =
    variant === 'solid'
      ? 'bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]'
      : 'border border-white/30 text-white hover:border-white hover:bg-white/5';

  return (
    <button className={`${base} ${styles} ${className}`}>
      {withWhatsApp && (
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
      )}
      {label}
    </button>
  );
}

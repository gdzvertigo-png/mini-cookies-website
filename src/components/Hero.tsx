import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-jet-black overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative z-10 animate-fade-in">
        <Logo />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

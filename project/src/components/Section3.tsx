import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia, 22',
    text: 'I was studying full-time and could barely afford rent. Now I work 4 hours a day and make more than my entire university combined.',
    role: 'Student',
  },
  {
    name: 'Mia, 25',
    text: 'The privacy setup was what convinced me. Nobody in my real life has any idea. I feel completely safe.',
    role: 'Retail worker',
  },
  {
    name: 'Lena, 28',
    text: 'I never thought this was for me. I was shy and introverted. The coaching changed everything. Now I\u2019m one of the top earners.',
    role: 'Former waitress',
  },
  {
    name: 'Jade, 24',
    text: 'I was scared to start but the team made it so easy. They handle all the chatting and I just show up and be myself.',
    role: 'Freelancer',
  },
  {
    name: 'Aria, 21',
    text: 'Best decision I ever made. I went from struggling to pay bills to traveling the world. The freedom is unreal.',
    role: 'Former barista',
  },
  {
    name: 'Nina, 26',
    text: 'The AI-shield thing is real. I tried doing social media before and AI accounts kept copying me. Here, that doesn\u2019t happen.',
    role: 'Content creator',
  },
  {
    name: 'Iris, 23',
    text: 'I earn while I sleep. The off-platform income streams are insane. I wake up to money I made overnight.',
    role: 'Student',
  },
  {
    name: 'Zoe, 27',
    text: 'No contract, no lock-in. That\u2019s what made me trust them. If I want to leave, I leave. But I never will.',
    role: 'Former office worker',
  },
  {
    name: 'Eva, 29',
    text: 'I was on OnlyFans for a year and made almost nothing. Switched to webcam and earned from day one. Night and day.',
    role: 'Former OnlyFans creator',
  },
  {
    name: 'Luna, 22',
    text: 'The 1-1 coaching is not generic at all. My manager knows exactly what works for my personality and vibe.',
    role: 'Student',
  },
  {
    name: 'Ruby, 25',
    text: 'I work from a different country every month. The location freedom is the best part. I\u2019m living my dream life.',
    role: 'Digital nomad',
  },
  {
    name: 'Chloe, 24',
    text: 'I was nervous about the explicit stuff. Turns out it\u2019s mostly just chatting and being yourself. Way easier than I thought.',
    role: 'Former receptionist',
  },
  {
    name: 'Maya, 26',
    text: 'The geo-blocking gave me peace of mind. My home country can\u2019t see me at all. Complete anonymity.',
    role: 'Former nurse',
  },
];

export default function Section3() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="py-24 sm:py-32 px-6 bg-jet-black border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">2<br /></span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-16 max-w-4xl text-center"
          style={{ fontSize: 'clamp(1.75rem, 6vw, 48px)' }}
        >
          <span style={{ fontStyle: 'italic', fontSize: '30px' }}>Earnings And Feedback<br /></span>
        </h2>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-1">
                  <div className="border border-white/10 p-10 sm:p-14 mx-auto max-w-3xl text-center min-h-[280px] flex flex-col justify-center">
                    <p className="text-lg sm:text-2xl font-light text-white/90 leading-relaxed mb-8 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex flex-col items-center gap-1">
                      <span className="w-10 h-px bg-white/30 mb-2" />
                      <span className="font-semibold text-white">{t.name}</span>
                      <span className="text-xs text-white/40 tracking-wider uppercase">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

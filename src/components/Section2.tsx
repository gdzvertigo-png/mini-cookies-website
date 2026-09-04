const cards = [
  {
    title: 'Conversation',
    description:
      'The highest earnings come from genuine human connection - engaging in real conversations, listening, and being present with your audience. Explicit or extreme content is never required to build a lucrative career with us. You just need to show up with a positive energy and good vibes - chatting, sales, and accounts management is handled completely by us.',
  },
  {
    title: 'Privacy',
    description:
      'Fake name, fake location, fake background life story. Platforms are visited by a specific type of people, not from your social media feed. All platforms have a Geo-blocking option - block any country or region. DMCA monitoring.',
  },
  {
    title: 'High Demand',
    description:
      'No time wasted on building your brand and audience from zero. Our platform-partners have millions of active users daily waiting for you to go live. Instead, if you ever plan to grow your brand on other social media platforms, you can leverage your existing fan base from the WebCam platforms.',
  },
  {
    title: 'AI-Shield',
    description:
      'All WebCam platforms have 100% AI protection. AI will never be able to pass the live human verification. AI can\u2019t compete with you like in the mainstream social media. Men pay for real human connection, and choose connection with real women with real personality.',
  },
  {
    title: 'Beginner Friendly',
    description:
      'Every model in our agency receives personal, one-on-one coaching from an experienced manager who understands the industry inside and out. This is not generic advice you could find on YouTube. You have everything that is necessary to become a successful model.',
  },
];

export default function Section2() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">02</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <h2
            className="font-extrabold tracking-tight leading-[1.05] lg:w-2/5 shrink-0"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            What is WebCam?
          </h2>
          <div className="lg:w-3/5 space-y-4">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Think of it like a FaceTime call or TikTok live where you set the price. You log-in,
              start having fun - people join and pay you for being yourself.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              If you ever enjoyed being in your bedroom while listening to music, having good vibes,
              talking to your crush - you did almost everything. That one last detail? We teach you!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group relative border border-white/10 p-8 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.02] flex flex-col ${
                i === 3 ? 'lg:col-start-2' : ''
              } ${i === 4 ? 'lg:col-start-3' : ''}`}
              style={{ minHeight: '280px' }}
            >
              <h3 className="text-2xl font-bold tracking-tight mb-4">{card.title}</h3>
              <div className="w-8 h-px bg-white/20 mb-4 group-hover:w-16 group-hover:bg-white/50 transition-all duration-500" />
              <p className="text-sm text-white/60 font-light leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

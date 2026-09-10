function App() {
  return (
    <div className="min-h-screen bg-pure-white font-display text-deep-ink overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative hero-sky min-h-screen w-full overflow-hidden">
        {/* Top Navigation — logo only */}
        <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 lg:px-20 pt-6 md:pt-8">
          <div className="mx-auto max-w-page flex items-center">
            <a
              href="#"
              className="text-xl md:text-2xl font-extrabold tracking-tight text-deep-ink animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              ARISM<span className="text-[0.5em] align-super font-bold">&reg;</span>
            </a>
          </div>
        </nav>

        {/* Hero Wordmark — flush left, extreme scale */}
        <div className="absolute left-6 md:left-12 lg:left-20 top-[18%] md:top-[18%] z-20 pointer-events-none">
          <h1
            className="font-extrabold text-deep-ink leading-[0.8] animate-fade-in-up select-none"
            style={{
              fontSize: 'clamp(64px, 13vw, 187px)',
              letterSpacing: '-0.04em',
              animationDelay: '0.4s',
            }}
          >
            ARISM<span className="text-[0.3em] align-super">&reg;</span>
          </h1>
        </div>

        {/* 3D Jet Render — positioned so text overlaps its top */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-[700px] pointer-events-none animate-fade-in"
          style={{
            top: 'clamp(30%, 34%, 38%)',
            animationDelay: '0.8s',
          }}
        >
          <img
            src="/jet-render.webp"
            alt="ARISM private jet"
            className="w-full h-auto animate-float-jet select-none drop-shadow-[0_20px_50px_rgba(0,13,16,0.15)]"
            draggable={false}
          />
        </div>

        {/* Hero Headline — right-aligned, below jet area */}
        <div className="absolute right-6 md:right-12 lg:right-20 bottom-[12%] sm:bottom-[10%] md:top-[32%] md:bottom-auto z-20 text-right pointer-events-none">
          <h2
            className="font-extrabold text-deep-ink leading-[1.0] animate-fade-in-up"
            style={{
              fontSize: 'clamp(32px, 6vw, 63px)',
              letterSpacing: '-0.02em',
              animationDelay: '0.6s',
            }}
          >
            Launching
            <br />
            Soon.
          </h2>
        </div>

        {/* Bottom gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white z-0" />
      </section>
    </div>
  );
}

export default App;

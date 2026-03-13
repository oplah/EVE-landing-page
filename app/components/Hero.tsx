export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(135deg, #DBE9FE 0%, #E5E6FA 100%)" }}
      aria-label="Hero section"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-200/35 blur-[100px]" />
      </div>

      {/* Text content — centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-36 pb-12 flex flex-col items-center text-center">

        <h1 className="title-bold-1 text-[#1A1A1A] mb-6">
          Meet EVE AI
        </h1>

        <p className="title-6 text-content-secondary max-w-2xl mb-12">
          Your AI companion for personal transformation.
          EVE learns your story, understands your goals, and guides you
          toward the best version of yourself — every single day.
        </p>

        {/* Store badges */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl text-white hover:bg-black/80 transition-all duration-200"
            aria-label="Download on the App Store"
          >
            <svg width="22" height="26" viewBox="0 0 22 26" fill="white" aria-hidden="true">
              <path d="M18.24 13.8c-.03-3.19 2.6-4.73 2.72-4.8-1.49-2.18-3.8-2.47-4.62-2.5-1.96-.2-3.84 1.16-4.84 1.16-1 0-2.53-1.13-4.17-1.1-2.13.03-4.1 1.25-5.2 3.16-2.24 3.87-.57 9.6 1.58 12.73 1.07 1.54 2.34 3.26 4 3.2 1.6-.07 2.2-1.03 4.14-1.03 1.92 0 2.47 1.03 4.17 1 1.74-.03 2.83-1.57 3.88-3.12 1.24-1.78 1.75-3.52 1.77-3.61-.04-.02-3.39-1.3-3.43-5.09zM14.89 4.2C15.76 3.16 16.36 1.71 16.2.23c-1.28.06-2.85.86-3.76 1.87-.82.9-1.55 2.38-1.36 3.78 1.43.11 2.9-.73 3.81-1.68z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-70 uppercase tracking-wide">Download on the</p>
              <p className="text-[15px] font-semibold leading-tight mt-0.5">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl text-white hover:bg-black/80 transition-all duration-200"
            aria-label="Get it on Google Play"
          >
            <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden="true">
              <path d="M1.22.47C.8.7.5 1.2.5 1.86v20.28c0 .66.3 1.16.72 1.39l.08.05 11.36-11.36v-.27L1.3.42l-.08.05z" fill="#4FC3F7"/>
              <path d="M16.45 16.01l-3.79-3.79v-.27l3.79-3.79.09.05 4.49 2.55c1.28.73 1.28 1.92 0 2.65l-4.49 2.55-.09.05z" fill="#FFD54F"/>
              <path d="M16.54 15.96L12.66 12 1.22 23.53c.42.45 1.12.5 1.9.06l13.42-7.63" fill="#F06292"/>
              <path d="M16.54 8.04L3.12.41C2.34-.03 1.64.02 1.22.47L12.66 12l3.88-3.96z" fill="#81C784"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-70 uppercase tracking-wide">GET IT ON</p>
              <p className="text-[15px] font-semibold leading-tight mt-0.5">Google Play</p>
            </div>
          </a>
        </div>
      </div>

      {/* Video — full width, no shadow */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-8 pb-0">
        <div
          className="w-full rounded-t-3xl overflow-hidden border border-black/8 border-b-0 bg-[#0D0920]"
          style={{ aspectRatio: "16/9" }}
          aria-label="EVE product demo video"
        >
          <video
            className="w-full h-full object-cover"
            src="/eve.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="See EVE in action"
          />
        </div>
      </div>

    </section>
  );
}

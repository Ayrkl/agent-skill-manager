import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-base-100 min-h-screen selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 bg-base-100">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[0%] right-[-5%] w-[35vw] h-[35vw] bg-secondary/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
          <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-[0.2em] text-primary backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Agent Skills Alpha v1.0
          </div>

          <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-[-0.05em] uppercase text-base-content m-0">
            Skills <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Reimagined</span>
          </h1>

          <p className="text-xl md:text-3xl text-base-content/50 max-w-4xl font-light leading-relaxed m-0">
            Design, deploy and iterate on AI agent behaviors using a collaborative markdown-first experience. Built on the edge with Next.js 16.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 w-full">
            <Link 
              href="/skills" 
              className="btn btn-primary btn-lg rounded-2xl h-20 px-12 md:px-20 text-xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-none"
            >
              Explore Now
            </Link>
            <Link 
              href="/register" 
              className="btn btn-outline btn-lg rounded-2xl h-20 px-12 md:px-20 text-xl font-black uppercase tracking-widest border-2 hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Access
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 px-6 bg-base-200">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">Architecture</span>
              <h2 className="text-5xl md:text-7xl font-black m-0 leading-none">Built for Scale</h2>
            </div>
            <p className="text-xl text-base-content/50 max-w-md font-light leading-relaxed m-0 mb-2">
              Our platform leverages advanced rendering strategies to ensure your agent skills are available instantly, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SSG Box */}
            <div className="group relative bg-base-100 rounded-[3rem] p-12 overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[400px]">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-12 transform group-hover:rotate-12 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-5xl font-black mb-6">SSG</h3>
                <p className="text-2xl text-base-content/40 font-light leading-relaxed">
                  Static Site Generation. Blazing fast response times served from the edge.
                </p>
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

            {/* ISR Box */}
            <div className="group relative bg-base-100 rounded-[3rem] p-12 overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[400px]">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-12 transform group-hover:rotate-12 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="text-5xl font-black mb-6">ISR</h3>
                <p className="text-2xl text-base-content/40 font-light leading-relaxed">
                  Incremental Static Regeneration. Fresh data without sacrificed performance.
                </p>
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

            {/* SSR Box */}
            <div className="group relative bg-base-100 rounded-[3rem] p-12 overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[400px]">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-12 transform group-hover:rotate-12 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <h3 className="text-5xl font-black mb-6">SSR</h3>
                <p className="text-2xl text-base-content/40 font-light leading-relaxed">
                  Server-Side Rendering. Fully dynamic, authenticated experiences per user.
                </p>
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

            {/* CSR Box */}
            <div className="group relative bg-base-100 rounded-[3rem] p-12 overflow-hidden border border-white/5 hover:border-warning/30 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[400px]">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-warning/10 text-warning mb-12 transform group-hover:rotate-12 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ width: '32px', height: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-5xl font-black mb-6">CSR</h3>
                <p className="text-2xl text-base-content/40 font-light leading-relaxed">
                  Client-Side Rendering. Interactive editors and real-time state management.
                </p>
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-warning/5 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-40 bg-base-100 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-xl font-black uppercase tracking-[0.4em] text-base-content/30 mb-20 leading-none">Stack</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-60">
                <span className="text-4xl md:text-7xl font-black tracking-[-0.05em]">Next.js 16</span>
                <span className="text-4xl md:text-7xl font-black tracking-[-0.05em]">React 19</span>
                <span className="text-4xl md:text-7xl font-black tracking-[-0.05em]">Prisma 7</span>
                <span className="text-4xl md:text-7xl font-black tracking-[-0.05em]">Tailwind 4</span>
                <span className="text-4xl md:text-7xl font-black tracking-[-0.05em]">DaisyUI</span>
            </div>
        </div>
      </section>
    </div>
  );
}
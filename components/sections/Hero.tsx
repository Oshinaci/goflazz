export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7C3AED33,transparent_60%)]" />

      <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative z-10 max-w-3xl text-center">

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          🚀 Closed Beta Coming Soon
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          The Next Generation
          <br />
          Crypto Wallet
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Secure.
          Fast.
          Multi-chain.
          Built for everyone.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-xl bg-violet-600 px-7 py-3 font-semibold transition hover:scale-105 hover:bg-violet-500">
            Join Waitlist
          </button>

          <button className="rounded-xl border border-white/10 px-7 py-3 backdrop-blur">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

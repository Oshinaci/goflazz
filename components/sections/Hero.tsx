import AppPreview from "./AppPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7C3AED33,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div>

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 Closed Beta Coming Soon
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            The Next Generation
            <br />
            Crypto Wallet
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-400">
            Secure, fast, and beautifully designed. Manage your digital assets across multiple blockchains in one wallet.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold">
              Join Waitlist
            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3">
              Learn More
            </button>
          </div>

        </div>

        <AppPreview />

      </div>

    </section>
  );
}

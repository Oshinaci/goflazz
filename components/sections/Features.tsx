const features = [
  {
    title: "Multi-chain",
    desc: "Manage assets across multiple blockchain networks.",
  },
  {
    title: "Fast Swap",
    desc: "Swap crypto instantly with competitive rates.",
  },
  {
    title: "Top Security",
    desc: "Industry-standard encryption and secure key management.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why GoFlazz?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-violet-500"
            >
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Stats() {
  const stats = [
    { label: "Supported Chains", value: "20+" },
    { label: "Transactions", value: "1M+" },
    { label: "Security", value: "Multi-Layer" },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h2 className="text-3xl font-bold text-violet-400">
              {item.value}
            </h2>

            <p className="mt-2 text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
      }

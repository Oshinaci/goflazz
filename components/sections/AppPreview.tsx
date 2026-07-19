export default function AppPreview() {
  return (
    <div className="mx-auto mt-16 w-full max-w-sm rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Total Balance</p>
          <h2 className="mt-1 text-3xl font-bold">$24,580.42</h2>
        </div>

        <div className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
          +12.8%
        </div>
      </div>

      <div className="mb-6 h-32 rounded-2xl bg-gradient-to-r from-violet-600/30 to-blue-500/30" />

      <div className="grid grid-cols-4 gap-3">
        {["Send", "Receive", "Swap", "Buy"].map((item) => (
          <button
            key={item}
            className="rounded-xl bg-white/5 py-3 text-sm transition hover:bg-violet-500/20"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {[
          ["BTC", "0.245 BTC", "$14,800"],
          ["ETH", "3.84 ETH", "$8,200"],
          ["USDT", "1,580 USDT", "$1,580"],
        ].map(([symbol, amount, value]) => (
          <div
            key={symbol}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div>
              <h3 className="font-semibold">{symbol}</h3>
              <p className="text-sm text-gray-400">{amount}</p>
            </div>

            <p className="font-medium">{value}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

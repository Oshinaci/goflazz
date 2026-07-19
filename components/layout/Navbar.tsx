export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          GoFlazz
        </h1>

        <button className="rounded-lg border border-violet-500 px-4 py-2 text-sm text-white">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-xl font-bold tracking-wide">
          GoFlazz
        </h1>

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Roadmap</a>
          <a href="#">Docs</a>
        </nav>

        <button className="rounded-xl bg-violet-600 px-5 py-2 font-medium transition hover:bg-violet-500">
          Launch App
        </button>

      </div>

    </header>
  );
}

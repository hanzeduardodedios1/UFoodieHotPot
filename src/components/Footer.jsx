function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-12">
        <p className="text-center text-sm text-zinc-400 sm:text-left">
          © 2026 Ufoodie Hot Pot. Built locally in Anaheim.
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          aria-label="Back to top"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer

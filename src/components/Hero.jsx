function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center text-white">
      <img
        src="/ufoodieentrance.jpg"
        alt="UFoodie restaurant entrance"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <h1 className="relative z-10 max-w-4xl text-5xl font-bold leading-[1.05] text-white md:text-7xl">
        Authentic Szechuan <span className="text-orange-500">Hot Pot</span> in Anaheim.
      </h1>
      <p className="relative z-10 mt-6 max-w-xl text-lg font-semibold tracking-widest text-gray-200 md:text-xl">
        BOLD SOUP. BIG FLAVOR. YOUR WAY.
      </p>
      <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://www.doordash.com/store/u-foodie-malatang-anaheim-44225453/108600752/?pickup=true&rwg_token=AFd1xnGxuC3vCYm8QEFlZT7WZyEwKs7Nw06nQNpiObMh2NQ37phwm_YFOUA5_5GfxhYSmebBOO76jMA3hXFIpd7Y2-c5_YgOTw==&utm_campaign=gpa"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-orange-600 px-6 py-2 font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-orange-700 active:scale-95"
        >
          Order on DoorDash
        </a>
        <button
          type="button"
          className="rounded-full border border-white bg-transparent px-6 py-2 font-medium text-white transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
        >
          View Menu
        </button>
      </div>
      <div
        className="relative z-10 mt-6 flex items-center justify-center gap-2"
        aria-label="4.9 star Google rating from 99 reviews"
      >
        <div className="flex items-center gap-0.5 text-yellow-400" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm font-medium tracking-wide text-gray-300">
          4.9 ★ Google Rating (99 Reviews)
        </p>
      </div>
    </section>
  )
}

export default Hero

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#F9F8F6]/90 px-6 py-4 backdrop-blur-sm lg:px-12">
      <img src="/logo.png" alt="Logo" className="h-10" />
      <div className="hidden items-center gap-8 md:flex">
        <span className="group relative cursor-pointer text-sm font-medium text-zinc-900 transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
          Menu
        </span>
        <span className="group relative cursor-pointer text-sm font-medium text-zinc-900 transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
          Quality
        </span>
        <span className="group relative cursor-pointer text-sm font-medium text-zinc-900 transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
          Visit Us
        </span>
        <a
          href="https://www.doordash.com/store/u-foodie-malatang-anaheim-44225453/108600752/?pickup=true&rwg_token=AFd1xnGxuC3vCYm8QEFlZT7WZyEwKs7Nw06nQNpiObMh2NQ37phwm_YFOUA5_5GfxhYSmebBOO76jMA3hXFIpd7Y2-c5_YgOTw==&utm_campaign=gpa"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-orange-600 px-6 py-2 text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-orange-700 active:scale-95"
        >
          Order on DoorDash
        </a>
      </div>
      <a
        href="https://www.doordash.com/store/u-foodie-malatang-anaheim-44225453/108600752/?pickup=true&rwg_token=AFd1xnGxuC3vCYm8QEFlZT7WZyEwKs7Nw06nQNpiObMh2NQ37phwm_YFOUA5_5GfxhYSmebBOO76jMA3hXFIpd7Y2-c5_YgOTw==&utm_campaign=gpa"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-orange-600 px-6 py-2 text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-orange-700 active:scale-95 md:hidden"
      >
        Order on DoorDash
      </a>
    </nav>
  )
}

export default Navbar

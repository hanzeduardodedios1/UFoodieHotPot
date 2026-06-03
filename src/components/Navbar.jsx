function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#F9F8F6]/90 px-6 py-4 backdrop-blur-sm lg:px-12">
      <img src="/logo.png" alt="Logo" className="h-10" />
      <div className="hidden items-center gap-8 md:flex">
        <span className="cursor-pointer text-sm font-medium text-zinc-900">Menu</span>
        <span className="cursor-pointer text-sm font-medium text-zinc-900">Quality</span>
        <span className="cursor-pointer text-sm font-medium text-zinc-900">Visit Us</span>
        <button
          type="button"
          className="rounded-full bg-orange-600 px-6 py-2 text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-orange-700 active:scale-95"
        >
          Order on DoorDash
        </button>
      </div>
      <button
        type="button"
        className="rounded-full bg-orange-600 px-6 py-2 text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-orange-700 active:scale-95 md:hidden"
      >
        Order on DoorDash
      </button>
    </nav>
  )
}

export default Navbar

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 z-50 w-full border-t border-zinc-200 bg-[#F9F8F6] p-4 md:hidden">
      <button type="button" className="btn-primary min-h-14 w-full">
        Delivery via DoorDash
      </button>
    </div>
  )
}

export default MobileStickyBar

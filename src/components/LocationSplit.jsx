const ADDRESS = '614 S Brookhurst St, Anaheim, CA 92804'
const DIRECTIONS_URL = 'https://maps.google.com/?cid=10356880200949722280'
const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Ufoodie%20Hot%20Pot,%20614%20S%20Brookhurst%20St,%20Anaheim,%20CA%2092804&t=&z=15&ie=UTF8&iwloc=&output=embed'
const DINING_OPTIONS = ['Dine-in', 'Takeout', 'Delivery']

function CheckIcon() {
  return (
    <svg
      className="mr-1 inline-block h-4 w-4 text-green-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LocationSplit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-12">
      <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center">
          <p className="section-label">Location</p>
          <h2 className="mb-8 text-4xl md:text-5xl">Visit Us</h2>
          <p className="text-base leading-relaxed text-zinc-900">
            <span className="font-medium">Address:</span> {ADDRESS}
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            <span className="font-medium text-zinc-900">Phone:</span>{' '}
            <a href="tel:+17146169699" className="hover:text-orange-600">
              +1 714-616-9699
            </a>
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            <span className="font-medium text-zinc-900">Hours:</span> Open Daily from 4:00 PM – 11:00 PM
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm font-medium text-gray-700">
            {DINING_OPTIONS.map((option) => (
              <span key={option} className="inline-flex items-center">
                <CheckIcon />
                {option}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-orange-700 active:scale-95"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="h-full min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg md:min-h-0">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            loading="lazy"
            allowFullScreen
            title="U Foodie location on Google Maps"
            src={MAP_EMBED_URL}
          />
        </div>
      </div>
    </section>
  )
}

export default LocationSplit

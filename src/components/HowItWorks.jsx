import FadeUp from './FadeUp'

const STEPS = [
  {
    number: 1,
    title: 'Build Your Bowl',
    description:
      'Grab your tongs and select from over 50+ fresh ingredients, including premium sliced meats, fresh seafood, handmade noodles, and seasonal greens.',
  },
  {
    number: 2,
    title: 'Weigh & Pay',
    description:
      'You control the portion. We weigh your custom bowl at the counter ($11.99 / LB, 1 LB minimum).',
  },
  {
    number: 3,
    title: 'Choose Your Flavor',
    description:
      'Select your favorite house-simmered broth—from mild chicken to our fiery beef bone soup, or try it dry-tossed in Mala sauce.',
  },
  {
    number: 4,
    title: 'We Cook, You Customize',
    description:
      'Hand your bowl to our chefs. While we cook, mix your ultimate dipping sauce at our sauce bar and grab your favorite sides and specialty teas. We will bring the steaming bowl right to your table.',
  },
]

function HowItWorks() {
  return (
    <section id="quality" className="bg-[#F9F8F6]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/ufoodieingredients.jpg"
              alt="Fresh malatang ingredients displayed at the buffet bar"
              className="aspect-square h-[500px] w-full object-cover md:aspect-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl">The Malatang Experience</h2>
            <ol className="mt-10 space-y-8">
              {STEPS.map((step) => (
                <li key={step.number}>
                  <FadeUp className="flex gap-5">
                    <span className="shrink-0 text-2xl font-bold text-orange-600">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-xl">{step.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </FadeUp>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

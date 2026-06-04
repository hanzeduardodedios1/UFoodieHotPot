import FadeUp from './FadeUp'

const MENU_IMAGE_URL = '/ufoodiehotpotitem.jpg'

const CLEAR_BROTH_ITEMS = [
  {
    title: 'Chicken Broth',
    description: 'Light, nourishing and gently flavorful.',
  },
  {
    title: 'Beef Bone Broth',
    description: 'Rich, clear with deep umami.',
  },
]

const BOLD_BROTH_ITEMS = [
  {
    title: 'Classic Beef Bone Broth (Mid-Spicy)',
    description:
      'Deep, bold beef bone flavor with a gentle spicy kick. Rich and warming.',
  },
  {
    title: 'Tomato Broth',
    description: 'Bright and tangy with a slow-simmered richness.',
  },
  {
    title: 'Tom Yum Broth',
    description: 'Thai-style broth with a spicy kick and burst of lemongrass.',
  },
]

const SIGNATURE_DRY_BOWL = {
  title: 'Mala Ban',
  description:
    'Mala Ban is our signature dry bowl — a customizable mix of your favorite ingredients tossed in our house-made spicy mala sauce, rich in umami.',
}

function MenuCard({ title, description, imageSrc = MENU_IMAGE_URL, className = '' }) {
  return (
    <article className={`overflow-hidden bg-white ${className}`}>
      <img
        src={imageSrc}
        alt={title}
        className="block aspect-[4/3] w-full object-cover"
      />
      <div className="p-5 md:p-6">
        <h4 className="text-xl text-orange-600">{title}</h4>
        <p className="mt-2 text-base leading-relaxed text-gray-600">{description}</p>
      </div>
    </article>
  )
}

function MenuSection({ title, children }) {
  return (
    <div className="mt-16 md:mt-20">
      <h3 className="text-2xl md:text-3xl">{title}</h3>
      {children}
    </div>
  )
}

function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-12">
      <p className="section-label">Menu</p>
      <h2 className="text-4xl md:text-5xl">Signature Broths</h2>
      <p className="mt-4 text-sm font-bold uppercase tracking-wide text-orange-600 md:text-base">
        CHOOSE YOUR FAVORITE SOUP BASE • $11.99 / LB (1 LB Minimum)
      </p>

      <MenuSection title="Clear Broth (Build Your Pho or Noodle)">
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {CLEAR_BROTH_ITEMS.map((item) => (
            <FadeUp key={item.title}>
              <MenuCard title={item.title} description={item.description} />
            </FadeUp>
          ))}
        </div>
      </MenuSection>

      <MenuSection title="Bold Broth (For Malatang or Hotpot)">
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BOLD_BROTH_ITEMS.map((item) => (
            <FadeUp key={item.title}>
              <MenuCard title={item.title} description={item.description} />
            </FadeUp>
          ))}
        </div>
      </MenuSection>

      <MenuSection title="Signature Dry Bowl">
        <div className="mt-8 flex justify-center">
          <FadeUp className="w-full max-w-2xl">
            <MenuCard
              title={SIGNATURE_DRY_BOWL.title}
              description={SIGNATURE_DRY_BOWL.description}
              className="w-full"
            />
          </FadeUp>
        </div>
      </MenuSection>
    </section>
  )
}

export default Menu

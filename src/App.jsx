import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Menu from './components/Menu'
import LocationSplit from './components/LocationSplit'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <HowItWorks />
        <Menu />
        <LocationSplit />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  )
}

export default App

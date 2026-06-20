import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

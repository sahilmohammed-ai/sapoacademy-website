import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-sapo-dark">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <About />
      <Newsletter />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

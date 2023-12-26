import { BrowserRouter } from 'react-router-dom'
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  window.onload = function () {
    const hash = window.location.hash
    if (hash) {
      const startTime = Date.now()
      const timer = setInterval(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView()
          clearInterval(timer)
        }
        if (Date.now() - startTime > 3000) clearInterval(timer)
      }, 100)
    }
  }
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <ToastContainer />
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

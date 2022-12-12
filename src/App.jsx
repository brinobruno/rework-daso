import * as React from 'react'

import { Divider } from './components/Divider'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Feedback } from './components/Feedback'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  return (
    <React.StrictMode>
      <Header />

      {/* Header height */}
      <main className='mt-28'>
        <Home />
        <Divider />
        <About />
        <Divider />
        <Menu />
        <Divider />
        <Feedback />
        <Divider />
        <Contact />
      </main>
      <Divider />
      <Footer />
      <BackToTop />
    </React.StrictMode>
  )
}
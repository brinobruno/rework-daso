import * as React from 'react'

import { Divider } from './components/Divider'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'

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
        <section className='min-h-screen' id='cardapio'>cardapio</section>
      </main>
    </React.StrictMode>
  )
}
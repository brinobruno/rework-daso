import * as React from 'react'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { Divider } from './components/Divider'

export function App() {
  return (
    <React.StrictMode>
      <Header />

      {/* Header height */}
      <main className='mt-28'>
        <Home />
        <Divider />
        <section className='min-h-screen' id='sobre'>sobre</section>
        <Divider />
        <section className='min-h-screen' id='cardapio'>cardapio</section>
      </main>
    </React.StrictMode>
  )
}
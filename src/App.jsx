import * as React from 'react'
import { Header } from './components/Header'

export function App() {
  return (
    <React.StrictMode>
      <Header />

      <main>
        <section className='min-h-screen' id='inicio'>inicio</section>
        <section className='min-h-screen' id='sobre'>sobre</section>
        <section className='min-h-screen' id='cardapio'>cardapio</section>
      </main>
    </React.StrictMode>
  )
}
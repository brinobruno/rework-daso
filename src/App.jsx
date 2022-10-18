import * as React from 'react'
import { Header } from './components/Header'

export function App() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <section className='min-h-screen' id='inicio' />
        <section className='min-h-screen' id='sobre' />
        <section className='min-h-screen' id='cardapio' />
      </main>
    </React.StrictMode>
  )
}
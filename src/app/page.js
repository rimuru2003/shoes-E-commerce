
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from '@/components'; 
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from '@/data/data';

import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} ifExists={false} />
        <FlexContent endpoint={sneaker} ifExists={false} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  )
}

export default Home
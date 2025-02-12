import React from 'react'
import { CustomerReviews, Footer, Hero, Services, SpecialOffers, Subscribe, SuperQuality, PopularProducts } from './sections';
import Nav from './components/Nav';

const App = () => {
  
  return (
    <div>

      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          < Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-Full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>



      </main>
    </div>


  )
}

export default App

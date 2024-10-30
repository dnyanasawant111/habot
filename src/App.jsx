import React from 'react'
import { Header } from './components/Header'
import Banner from './components/Banner'
import Location from './components/Location'
import Buyer from './components/Buyer'
import Find from './components/Find'
import Works from './components/Works'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Location/>
      <Buyer/>
      <Find/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default App
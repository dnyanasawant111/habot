import React from 'react'
import { Header } from './components/Header'
import Banner from './components/Banner'
import Location from './components/Location'
import Buyer from './components/Buyer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Location/>
      <Buyer/>
    </div>
  )
}

export default App
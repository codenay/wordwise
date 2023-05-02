import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Textinput from './components/Textinput'

const App = () => {
  return (
    <div className="main w-screen h-screen bg-[url('src/assets/bg.svg')]">
      <Header />
      {/* <Textinput /> */}
      <Footer />
    </div>
  )
}

export default App


import './App.css'
import Aside from './view/Aside'
import Footer from './view/Footer'
import Header from './view/Header'
import Main from './view/Main'
import RightSideBanners from './view/RightSideBanners'
import { useState } from 'react'

function App() {
  const [filter, setFilter] = useState(null)

  return (
  <>
  <div className="container">
    <Header />
    <Aside setFilter={(value) => setFilter(value)}/>
    <Main filter={filter}/>
    <RightSideBanners />
  </div>
  <Footer />
  </>
  )
}

export default App

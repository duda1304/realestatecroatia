import './App.css'
import Aside from './view/Aside'
import Footer from './view/Footer'
import Header from './view/Header'
import Homepage from './view/Homepage'
import List from './view/List'
import RightSideBanners from './view/RightSideBanners'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // const [filter, setFilter] = useState(null)
  // const [tagList, setTagList] = useState([]);
  // const [propertyTypeId, setPropertyTypeId] = useState(null);
  // const [lastItemsCount, setLastItemsCount] = useState(null);
  
  return (
    <Router>
      <div className="container">
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/list" element={<List />} />
        </Routes>
        <RightSideBanners />
      </div>
      <Footer />
    </Router>
  )
}

export default App

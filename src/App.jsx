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
          <Route path="/top-100" element={<List count={100}/>} />
          <Route path="/top-20" element={<List count={20}/>} />
          <Route path="/vendita-prima-fila-dal-mare" element={<List parameter={'tagList'} value={10}/>} />
          <Route path="/vendita-nuove-costruzioni" element={<List parameter={'tagList'} value={11}/>} />
          <Route path="/vendita-proprieta-vista-mare" element={<List parameter={'tagList'} value={22}/>} />
          <Route path="/vendita-casa-di-pietra" element={<List parameter={'tagList'} value={17}/>} />
          <Route path="/vendita-appartamenti" element={<List parameter={'propertyTypeId'} value={2}/>} />
          <Route path="/vendita-proprieta-di-lusso" element={<List parameter={'tagList'} value={20}/>} />
          <Route path="/vendita-case" element={<List parameter={'propertyTypeId'} value={1}/>} />
          {/* CHECK THIS how to get non agency properties */}
          <Route path="/vendita-diretta-dal-proprietario" element={<List parameter={'propertyTypeId'} value={2}/>} /> 
          <Route path="/vendita-albergo" element={<List parameter={'tagList'} value={1}/>} />
        </Routes>
        <RightSideBanners />
      </div>
      <Footer />
    </Router>
  )
}

export default App

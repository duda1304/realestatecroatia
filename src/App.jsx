import './App.css'
import Aside from './view/Aside'
import Footer from './view/Footer'
import Header from './view/Header'
import Homepage from './view/Homepage'
import List from './view/List'
import RightSideBanners from './view/RightSideBanners'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AgencyList from './view/AgencyList';

function App() {
  const [parameters, setParameters] = useState([])
  const [values, setValues] = useState([])
  const [title, setTitle] = useState('')

  const setSearchValues = (data) => {
    setParameters(Object.keys(data));
    setValues(Object.values(data));
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Aside />
        <Routes>
          <Route exact path="/" element={<Homepage setSearchValues={(data) => setSearchValues(data)} setTitle={(value) => setTitle(value)} />} />
          <Route path="/listag" element={<AgencyList title='Elenco agenzie' />} />
          <Route path="/top-100" element={<List count={100} title='Elenco delle ultime 100 proprietà' />} />
          <Route path="/top-20" element={<List count={20} title='Elenco delle ultime 20 proprietà' />} />
          <Route path="/vendita-prima-fila-dal-mare" element={<List parameter={'tagList'} value={10} title='Prima fina dal mare' />} />
          <Route path="/vendita-nuove-costruzioni" element={<List parameter={'tagList'} value={11} title='Nuove costruzioni' />} />
          <Route path="/vendita-proprieta-vista-mare" element={<List parameter={'tagList'} value={22} title='Proprieta vista mare' />} />
          <Route path="/vendita-casa-di-pietra" element={<List parameter={'tagList'} value={17} title='Casa di pietra' />} />
          <Route path="/vendita-appartamenti" element={<List parameter={'propertyTypeId'} value={2} title='Appartamenti' />} />
          <Route path="/vendita-proprieta-di-lusso" element={<List parameter={'tagList'} value={20} title='Proprieta di lusso' />} />
          <Route path="/vendita-case" element={<List parameter={'propertyTypeId'} value={1} title='Case' />} />
          {/* CHECK THIS how to get non agency properties */}
          <Route path="/vendita-diretta-dal-proprietario" element={<List parameter={'propertyTypeId'} value={2} title='Diretta dal proprietario' />} />
          <Route path="/vendita-albergo" element={<List parameter={'tagList'} value={1} title='Albergi' />} />
          <Route path="/vendita-con-piscina" element={<List parameter={'tagList'} value={21} title='Con piscina' />} />

          <Route path="/*" element={<h1 className='mt-5 text-center fs-5'>Under construction</h1>} />

          <Route path="/cerca" element={<List parameter={parameters} value={values} title={title} />} />
        </Routes>
        <RightSideBanners />
      </div>
      <Footer />
    </Router>
  )
}

export default App

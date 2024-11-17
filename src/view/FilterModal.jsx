import locationData from '../data/locations_data.json'
import regions from '../data/regions.json'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function FilterModal(props) {
    const [cityAreas, setCityAreas] = useState([])
    const [cities, setCities] = useState([])
    const [propertyTypeName, setPropertyTypeName] = useState('')
    const [sortName, setSortName] = useState('Piu economico')
    const [regionName, setRegionName] = useState('')

    const [data, setData] = useState({
        "regionId" : "",
        "cityArea" : "",
        "city" : "",
        "priceFrom" : "",
        "priceTo" : "",
        "areaFrom" : "",
        "areaTo" : "",
        "propertyTypeId" : "",
        "sort" : "PRICEASC"
    })

    function removeDuplicates(array) {
        return [...new Set(array)]
    }
    
    const renderRegions = () => {
        let regionsList = [];
        locationData.forEach(element => {
            regionsList.push(element.region.toUpperCase())
        })
        regionsList = removeDuplicates(regionsList);
        return (
            <>
                {regionsList.map(region => (<option value={region} key={Math.random()}>{region}</option>))}
            </>
        )
    }
  
    const handleRegionChange = (value) => {
        if (value in regions) {
            updateData("regionId", regions[value])
        } else {
            updateData("regionId", '')
        }
        setRegionName(value)
        const data = locationData.filter(item => item.region.toUpperCase() === value)
        let cityAreas = []
        data.forEach(element => cityAreas.push(element.city))
        cityAreas = removeDuplicates(cityAreas)
        setCityAreas(cityAreas);
        setCities([])
    }

    const handleAreaChange = (value) => {
        updateData("cityArea", value)
        const data = locationData.filter(item => item.city.toUpperCase() === value)
        let cities = []
        data.forEach(element => cities.push(element.cityArea))
        cities = removeDuplicates(cities)
        setCities(cities);
    }

    const handleChange = (name, value) => {
        const numericInputs = ['priceFrom', 'priceTo', 'areaFrom', 'areaTo'];
        if (value in numericInputs) {
            let numericValue = value.replace(/[^0-9]/g, "");
            numericValue = numericValue.replace(/^0+/, "");
            updateData(name, numericValue)
        } else {
            updateData(name, value)
        }
    }
   
    const updateData = (name, value) => {
        setData(prevData => ({
            ...prevData,        
            [name]: value 
          }));
    }

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();        
        e.stopPropagation(); 
        props.setSearchValues(data)
        const title = `${propertyTypeName !== '' ? `${propertyTypeName} - ` : ''} ${regionName !== '' ? `${regionName} ` : ''} ${data.cityArea !== '' ? `- ${data.cityArea} `: ''} ${data.city !== '' ? `- ${data.city} `: ''} ${data.priceFrom !== '' ? `- da ${data.priceFrom} ` : ''} ${data.priceTo !== '' ? `- a ${data.priceTo} ` : ''} ${data.areaFrom !== '' ? `- da ${data.areaFrom}m2 ` : ''} ${data.areaTo !== '' ? `- a ${data.areaTo}m2 ` : ''} - Ordine ${sortName}` 
        props.setTitle(title)
        navigate('/cerca')
    }
  
    return (
        <div className="modal fade" id="filterModal" tabIndex="-1">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title text-center w-100 search-card-text h1" id="filterModalLabel">Filtri</h3>
                        <button type="button" className="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body ms-3 me-3">
                        <form id="modalForm" onSubmit={(e) => handleSubmit(e)}> 
                            {/* cosa cercate */}
                            <h4 className="form-title modal-title mb-3">Cosa cercate?</h4>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" name="propertyType" type="radio" value="1" onChange={(e) => {updateData("propertyTypeId", e.target.value); setPropertyTypeName('Casa')}}/>
                                        <label className="form-check-label modal-text" htmlFor="casa">Casa</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="propertyType" type="radio" value="2" onChange={(e) => {updateData("propertyTypeId", e.target.value); setPropertyTypeName('Appartamento')}}/>
                                        <label className="form-check-label modal-text" htmlFor="appartamento">Appartamento</label>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" name="propertyType" type="radio" value="3" onChange={(e) => {updateData("propertyTypeId", e.target.value); setPropertyTypeName('Terreno')}}/>
                                        <label className="form-check-label modal-text" htmlFor="terreno">Terreno</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="propertyType" type="radio" value="4" onChange={(e) => {updateData("propertyTypeId", e.target.value); setPropertyTypeName('Locale commerciale')}}/>
                                        <label className="form-check-label modal-text" htmlFor="localeCommerciale">Locale commerciale</label>
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-3" />
                            {/* azione */}
                            {/* <h4 className="modal-title mb-3">Azione</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="vendita" />
                                <label className="form-check-label modal-text" htmlFor="vendita">Vendita</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="affitto" />
                                <label className="form-check-label modal-text" htmlFor="affitto">Affitto</label>
                            </div>
                            <hr className="mb-3" /> */}
                            {/* la locallizzazione */}
                            <h4 className="modal-title mb-3">La locallizzazione</h4>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="mb-3">
                                        <label htmlFor="regione" className="form-label modal-text">Regione</label>
                                        <select className="form-select modal-text uniform-select center-select border-0 shadow-sm" id="regione" value={regionName} onChange={(e) => handleRegionChange(e.target.value)}>
                                            <option value="">Seleziona una regione</option>
                                            {renderRegions()}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="citta" className="form-label modal-text">Citta</label>
                                        <select className="form-select modal-text uniform-select center-select border-0 shadow-sm" id="citta" value={data.city} onChange={(e) => handleChange('city', e.target.value)}>
                                            <option value="">Seleziona una citta</option>
                                            {cities.map(city => <option value={city.toUpperCase()} key={Math.random()}>{city.toUpperCase()}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="mb-3">
                                        <label htmlFor="areaVasta" className="form-label modal-text">Area vasta</label>
                                        <select className="form-select modal-text uniform-select center-select border-0 shadow-sm" id="areaVasta" value={data.cityArea} onChange={(e) => handleAreaChange(e.target.value)}>
                                            <option value="">Seleziona un&apos;area vasta</option>
                                            {cityAreas.map(area => <option value={area.toUpperCase()} key={Math.random()}>{area.toUpperCase()}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* prezzo  */}
                            <h4 className="modal-title mb-3">Prezzo</h4>
                            <div className="row mb-3">
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="prezzoDa" className="form-label modal-text mb-0 me-2">da</label>
                                    <input type="text" className="form-control modal-text small-input me-3 border-0 shadow-sm" id="prezzoDa" placeholder="€" value={data.priceFrom} onInput={(e) => handleChange('priceFrom', e.target.value)}/>
                                    <label htmlFor="prezzoA" className="form-label modal-text mb-0 me-2">a</label>
                                    <input type="text" className="form-control modal-text small-input border-0 shadow-sm" id="prezzoA" placeholder="€" value={data.priceTo} onInput={(e) => handleChange('priceTo', e.target.value)}/>
                                </div>
                            </div>
                            <hr className="mb-3" />
                            {/* superficie */}
                            <h4 className="modal-title mb-3">Superficie (m²)</h4>
                            <div className="row mb-3">
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="superficieDa" className="form-label modal-text mb-0 me-2">da</label>
                                    <input type="text" className="form-control modal-text small-input me-3 border-0 shadow-sm" id="superficieDa" placeholder="m²" value={data.areaFrom} onInput={(e) => handleChange('areaFrom', e.target.value)}/>
                                    <label htmlFor="superficieA" className="form-label modal-text mb-0 me-2">a</label>
                                    <input type="text" className="form-control modal-text small-input border-0 shadow-sm" id="superficieA" placeholder="m²" value={data.areaTo} onInput={(e) => handleChange('areaTo', e.target.value)}/>
                                </div>
                            </div>
                            <hr className="mb-3" />
                            {/* ordine */}
                            <h4 className="modal-title mb-3">Ordine</h4>
                            <div className="col-12 col-md-4 mb-3">
                                <select className="form-select modal-text uniform-select center-select shadow-sm border-0" id="ordine" defaultValue={"PRICEASC"} onChange={(e) => {handleChange("sort", e.target.value); setSortName(e.target.options[e.target.selectedIndex].innerText)}}>
                                    <option value="PRICEASC">Piu economico</option>
                                    <option value="PRICEDESC">Più costoso</option>
                                    <option value="NEWDESC">Più recente</option>
                                    <option value="NEWASC">Più vecchio</option>
                                </select>
                            </div>
                            <hr className="mb-3" />
                            {/* buttons */}
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-outline-secondary rounded modal-text" id="clear-form">Eliminare i filtri</button>
                                <button type="submit" className="btn btn-primary modal-text text-white rounded" data-bs-dismiss="modal">Cerca</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
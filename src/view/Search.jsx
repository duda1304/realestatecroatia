import useAutocomplete from "../hooks/Autocomplete"
import data from "../data/city_autosomplete.json"


export default function Search() {
    const {
        inputValue,
        filteredSuggestions,
        showSuggestions,
        handleChange,
        handleSelectSuggestion,
      } = useAutocomplete(data);
      
    return (
        <section className="p-2 rounded border-0" id="searchSection">
            <div className="card p-3 w-100 mb-2 bg-white rounded border-0 search-card">
                <div className="row mb-3">
                <div className="col-12">
                    <h5 className="h5 search-card-text"
                    >Ricercia</h5>
                </div>
                </div>
                <div className="row">
                <div className="col-12 d-flex flex-row">
                    <div className="col flex-1 position-relative">
                        <div className="input-group">
                            <span className="input-group-text border-0">
                                <img src="/assets/icon/search.png" alt="Search" style={{"width": "20px", "height": "20px"}} />
                            </span>
                            <div className="input-suggestion-wrapper">
                                <input type="text" className="form-control border-0 me-5 rounded-end form-input w-100" placeholder="Scrivi qui..." aria-label="Search Input" onChange={handleChange} value={inputValue}/>
                                {showSuggestions && filteredSuggestions.length > 0 && (
                                    <ul className="suggestions list-group position-absolute w-100">
                                    {filteredSuggestions.map((suggestion, index) => (
                                        <li
                                        key={index}
                                        className="list-group-item"
                                        onClick={() => handleSelectSuggestion(suggestion)}
                                        >
                                        {suggestion}
                                        </li>
                                    ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                           
                    </div>
                    <div className="d-flex flex-row">
                        <button type="button" className="btn btn-outline-secondary d-flex align-items-center border-1 rounded me-2" data-bs-toggle="modal" data-bs-target="#filterModal">
                            <img src="/assets/icon/filter.png" alt="Filters Icon" style={{"width": "16px", "height": "16px", "marginRight": "8px"}} />
                            Filtri
                        </button>
                        <button type="button" className="btn btn-primary border-0 rounded-0">Cerca</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default function Search() {
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
                <div className="col-12">
                    <div className="input-group">
                    <span className="input-group-text border-0">
                        <img src="/assets/icon/search.png" alt="Search" style={{"width": "20px", "height": "20px"}} />
                    </span>
                    <input type="text" className="form-control border-0 me-5 rounded-end form-input" placeholder="Scrivi qui..." aria-label="Search Input" />
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
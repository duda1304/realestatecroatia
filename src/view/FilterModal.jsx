export default function FilterModal() {
    return (
        <div className="modal fade" id="filterModal" tabIndex="-1">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title text-center w-100 search-card-text h1" id="filterModalLabel">Filtri</h3>
                        <button type="button" className="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body ms-3 me-3">
                        <form id="modalForm"> 
                            {/* cosa cercate */}
                            <h4 className="form-title modal-title mb-3">Cosa cercate?</h4>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="casa" />
                                        <label className="form-check-label modal-text" htmlFor="casa">Casa</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="appartamento" />
                                        <label className="form-check-label modal-text" htmlFor="appartamento">Appartamento</label>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="terreno" />
                                        <label className="form-check-label modal-text" htmlFor="terreno">Terreno</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="localeCommerciale" />
                                        <label className="form-check-label modal-text" htmlFor="localeCommerciale">Locale commerciale</label>
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-3" />
                            {/* azione */}
                            <h4 className="modal-title mb-3">Azione</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="vendita" />
                                <label className="form-check-label modal-text" htmlFor="vendita">Vendita</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="affitto" />
                                <label className="form-check-label modal-text" htmlFor="affitto">Affitto</label>
                            </div>
                            <hr className="mb-3" />
                            {/* la locallizzazione */}
                            <h4 className="modal-title mb-3">La locallizzazione</h4>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="mb-3">
                                        <label htmlFor="regione" className="form-label modal-text">Regione</label>
                                        <select className="form-select modal-text uniform-select center-select border-0 shadow-sm" id="regione" defaultValue={""}>
                                            <option value="">Seleziona una regione</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="citta" className="form-label modal-text">Citta</label>
                                        <select className="form-select modal-text uniform-select center-select border-0 shadow-sm" id="citta" defaultValue={""}>
                                            <option value="">Seleziona una citta</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="mb-3">
                                        <label htmlFor="areaVasta" className="form-label modal-text">Area vasta</label>
                                        <select className="form-select modal-text uniform-select center-select border-0 shadow-sm" id="areaVasta" defaultValue={""}>
                                            <option value="">Seleziona un&apos;area vasta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* prezzo  */}
                            <h4 className="modal-title mb-3">Prezzo</h4>
                            <div className="row mb-3">
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="prezzoDa" className="form-label modal-text mb-0 me-2">da</label>
                                    <input type="text" className="form-control modal-text small-input me-3 border-0 shadow-sm" id="prezzoDa" placeholder="€" />
                                    <label htmlFor="prezzoA" className="form-label modal-text mb-0 me-2">a</label>
                                    <input type="text" className="form-control modal-text small-input border-0 shadow-sm" id="prezzoA" placeholder="€" />
                                </div>
                            </div>
                            <hr className="mb-3" />
                            {/* superficie */}
                            <h4 className="modal-title mb-3">Superficie (m²)</h4>
                            <div className="row mb-3">
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="superficieDa" className="form-label modal-text mb-0 me-2">da</label>
                                    <input type="text" className="form-control modal-text small-input me-3 border-0 shadow-sm" id="superficieDa" placeholder="m²" />
                                    <label htmlFor="superficieA" className="form-label modal-text mb-0 me-2">a</label>
                                    <input type="text" className="form-control modal-text small-input border-0 shadow-sm" id="superficieA" placeholder="m²" />
                                </div>
                            </div>
                            <hr className="mb-3" />
                            {/* ordine */}
                            <h4 className="modal-title mb-3">Ordine</h4>
                            <div className="col-12 col-md-4 mb-3">
                                <select className="form-select modal-text uniform-select center-select shadow-sm border-0" id="ordine" defaultValue={""}>
                                    <option value="">Piu economico</option>
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
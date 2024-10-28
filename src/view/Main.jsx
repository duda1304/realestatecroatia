import List from "./List";

export default function Main(props) {
    return (
        <main>
            {props.filter && <List />}
            {props.filter === null && 
            <>
            {/* search tabs new */}
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
                            <img src="./src/images/search_icon.png" alt="Search" style={{"width": "20px", "height": "20px"}} />
                        </span>
                        <input type="text" className="form-control border-0 me-5 rounded-end form-input" placeholder="Scrivi qui..." aria-label="Search Input" />
                        <button type="button" className="btn btn-outline-secondary d-flex align-items-center border-1 rounded me-2" data-bs-toggle="modal" data-bs-target="#filterModal">
                            <img src="./src/images/filter_icon.png" alt="Filters Icon" style={{"width": "16px", "height": "16px", "marginRight": "8px"}} />
                            Filtri
                            </button>
                        <button type="button" className="btn btn-primary border-0 rounded-0">Cerca</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* MODAL */}
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

            {/* LINKS IN THE MIDDLE NEW */}
            <section className="container-fluid p-2" id="tagSection">
                <div className="row gx-2">
                <article className="col-4 mt-3">
                    <div className="card h-100 rounded position-relative border-0">
                    <img src="./src/images/middlecard1.png" className="rounded-bottom" alt="house" />
                    <div className="card-img-overlay d-flex align-items-end p-0">
                        <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                        <a href="/itl/list.asp?top=20" className="text-white stretched-link text-decoration-none fw-bolder">Ultimi 20 registrati</a>
                        </div>
                    </div>
                    </div>
                </article>
                <article className="col-4 mt-3">
                    <div className="card h-100 rounded position-relative border-0 shadow-sm">
                    <img src="./src/images/middlecard2.png" className="rounded-bottom" alt="house" />
                    <div className="card-img-overlay d-flex align-items-end p-0">
                        <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                        <a href="/itl/list.asp?vrsta=1&akcija=1&cijenaOd=2&cijenaDo=300000&sortorder=expensive" className="text-white stretched-link text-decoration-none fw-bolder">Casa a 300.000 &#x20AC;</a>
                        </div>
                    </div>
                    </div>
                </article>
                <article className="col-4 mt-3">
                    <div className="card h-100 rounded position-relative border-0 shadow-sm">
                    <img src="./src/images/middlecard3.png" className="rounded-bottom" alt="house" />
                    <div className="card-img-overlay d-flex align-items-end p-0">
                        <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                        <a href="/itl/vendita-prima-fila-dal-mare" className="text-white stretched-link text-decoration-none fw-bolder">Prima fila dal mare</a>
                        </div>
                    </div>
                    </div>
                </article>
                </div>
            </section>

            {/* TOP PONUDA NEW */}
            <section className="p-2" id="list">
                <h2 className="head"><span>TOP</span> offerte</h2>
                {/* <div className="ajax-preload" data-ajax-id="ajax-topponude" data-ajax-link="/Ajax/TopPonude/">
                    <img src="./src/images/ajax-loader.gif" alt="Top Offers" />
                </div> */}
                {/* card 1 */}
                <div className="card mb-3 mt-3 card-top-offer">
                    <div className="d-flex inner-top-offer">
                        <div style={{"flex": "0 0 45%"}}>
                            <img src="https://www.realestatecroatia.com/topponuda/20231019_HRIDR.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                        </div>
                        <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                            <div>
                            <h5 className="card-title h4">Island of Hvar, Jelsa - Vitarnja</h5>
                            <p className="card-text mt-3">Three bedroom villa with swimming pool, wine cellar and terraces, 60 m from the sea</p>
                            </div>
                            <div className="d-flex justify-content-end">
                            <a href="https://www.trgostan.hr/en/hotels-and-villas/hvar-jelsa-vitarnja-three-room-villa-with-pool-wine-shop-and-terraces-60-m-from-the-sea-4714.html" className="btn btn-link text-decoration-underline button-top-offer"> 
                                Piu
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card mb-3 mt-3 card-top-offer" >
                <div className="d-flex inner-top-offer">
                <div style={{"flex": "0 0 45%"}}>
                    <img src="https://www.realestatecroatia.com/topponuda/20240629_WONAO.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                </div>
                <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                    <div>
                    <h5 className="card-title h4">Appartamenti in vendita in un nuovo progetto in costruzione, Pola!</h5>
                    <p className="card-text mt-3">Nuova unit&#xE0; residenziale in costruzione, ubicata nelle immediate vicinanze del centro cittadino.</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <a href="https://www.realestatecroatia.com/itl/detail.asp?id=1043173" className="btn btn-link text-decoration-underline button-top-offer"> 
                        Piu
                    </a>
                    </div>
                </div>
                </div>
                </div>
                {/* card 3 */}
                <div className="card mb-3 mt-3 card-top-offer">
                <div className="d-flex inner-top-offer">
                <div style={{"flex": "0 0 45%"}}>
                    <img src="https://www.realestatecroatia.com/topponuda/20240613_RAGJX.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                </div>
                <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                    <div>
                    <h5 className="card-title h4">Houses with swimming pool</h5>
                    <p className="card-text mt-3">Three bedroom villa with swimming pool, wine cellar and terraces, 60 m from the sea</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <a href="https://www.realestatecroatia.com/itl/list.asp?akcija=1&amp;vrsta=1&amp;cijena=between&#x2B;1000000&#x2B;and&#x2B;2000000&amp;page=2" className="btn btn-link text-decoration-underline button-top-offer"> 
                        Piu
                    </a>
                    </div>
                </div>
                </div>
                </div>
                {/* card 4 */}
                <div className="card mb-3 mt-3 card-top-offer">
                <div className="d-flex inner-top-offer">
                <div style={{"flex": "0 0 45%"}}>
                    <img src="https://www.realestatecroatia.com/topponuda/20240110_TKORS.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                </div>
                <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                    <div>
                    <h5 className="card-title h4">Murter - Betina, luxury villa by the sea</h5>
                    <p className="card-text mt-3">Luxury villa</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <a href="https://www.terradalmatica.hr/en/real-estate/murter-betina-luxury-villa-by-the-sea/" className="btn btn-link text-decoration-underline button-top-offer"> 
                        Piu
                    </a>
                    </div>
                </div>
                </div>
                </div>
                {/* card 5 */}
                <div className="card mb-3 mt-3 card-top-offer">
                <div className="d-flex inner-top-offer">
                <div style={{"flex": "0 0 45%"}}>
                    <img src="https://www.realestatecroatia.com/topponuda/20240520_SXCDA.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                </div>
                <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                    <div>
                    <h5 className="card-title h4">OPATIJA</h5>
                    <p className="card-text mt-3">Lussuoso appartamento con terrazza, vista mare e piscina privata!</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <a href="https://www.smart-invest.hr/listings/more?id_listing=38522&amp;l=3" className="btn btn-link text-decoration-underline button-top-offer"> 
                        Piu
                    </a>
                    </div>
                </div>
                </div>
                </div>
                {/* card 6 */}
                <div className="card mb-3 mt-3 card-top-offer">
                <div className="d-flex inner-top-offer">
                <div style={{"flex": "0 0 45%"}}>
                    <img src="https://www.realestatecroatia.com/topponuda/20200401_JWAMA.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                </div>
                <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                    <div>
                    <h5 className="card-title h4">Luxury Villa near Labin</h5>
                    <p className="card-text mt-3">Istria</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <a href="https://www.realestatecroatia.com/itl/list.asp?id=7748&amp;vrsta=1" className="btn btn-link text-decoration-underline button-top-offer"> 
                        Piu
                    </a>
                    </div>
                </div>
                </div>
                </div>
                {/* card 7 */}
                <div className="card mb-3 mt-3 card-top-offer" >
                    <div className="d-flex inner-top-offer">
                    <div style={{"flex": "0 0 45%"}}>
                        <img src="https://www.realestatecroatia.com/topponuda/20240514_XAQDN.jpg" className="img-fluid rounded-start image-top-offer" alt="Image" />
                    </div>
                    <div className="d-flex flex-column justify-content-between p-3" style={{"flex": "0 0 55%"}}>
                        <div>
                        <h5 className="card-title h4">Pore&#x10D; immobiliare</h5>
                        <p className="card-text mt-3">Houses in Pore&#x10D; up to 1 million EUR</p>
                        </div>
                        <div className="d-flex justify-content-end">
                        <a href="https://www.realestatecroatia.com/itl/list.asp?vrsta=1&amp;akcija=1&amp;regija=18&amp;opcina=pore%C4%8D&amp;mjesto_o=pore%C4%8D&amp;cijenaOd=950000&amp;cijenaDo=1000000&amp;povrsinaOd=&amp;povrsinaDo=&amp;id=&amp;sortorder=cheaper" className="btn btn-link text-decoration-underline button-top-offer">
                            Piu
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <div className="topagencije_holder" id="topAgencies">
                <h2 className="head accordion"><span>TOP</span> agenzie</h2>
                {/* <div className="ajax-preload" data-ajax-id="ajax-homepagetopagencybanners" data-ajax-link="/Ajax/HomePageTopAgencyBanners/" data-initSlick="1">
                    <img src="./src/images/ajax-loader.gif" alt="Top Agents" />
                </div> */}
                <div className="panel">
                    <a href="https://kaiser-immobilien.hr/"><img src="https://www.realestatecroatia.com/recbanners/20230530_IXWDOUJONO.png" className="w-100 rounded-2" /></a>
                </div>
            </div>
            </>
        }
    </main>
    )
}
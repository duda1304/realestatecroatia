import Alphabet from "./Alphabet";
import FilterModal from "./FilterModal";
import Search from "./Search";
import TopAgencies from "./TopAgencies";
import TopOffers from "./TopOffers";
import { useNavigate } from 'react-router-dom'


export default function Homepage() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <main>
            <Alphabet />
            <Search />
            <FilterModal />
            {/* LINKS IN THE MIDDLE NEW */}
            <section className="container-fluid p-2" id="tagSection">
                <div className="row gx-2">
                    <article className="col-4 mt-3" onClick={() => handleNavigation('/top-20')} >
                        <div className="card h-100 rounded position-relative border-0">
                            <img src="/assets/img/homecsreen_tag_1.png" className="rounded-bottom" alt="house" />
                            <div className="card-img-overlay d-flex align-items-end p-0">
                                <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                    <a className="text-white stretched-link text-decoration-none fw-bolder">Ultimi 20 registrati</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="col-4 mt-3">
                        <div className="card h-100 rounded position-relative border-0 shadow-sm">
                            <img src="/assets/img/homecsreen_tag_2.png" className="rounded-bottom" alt="house" />
                            <div className="card-img-overlay d-flex align-items-end p-0">
                                <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                    <a href="/list.asp?vrsta=1&akcija=1&cijenaOd=2&cijenaDo=300000&sortorder=expensive" className="text-white stretched-link text-decoration-none fw-bolder">Casa a 300.000 &#x20AC;</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="col-4 mt-3" onClick={() => handleNavigation('/vendita-prima-fila-dal-mare')}>
                        <div className="card h-100 rounded position-relative border-0 shadow-sm">
                            <img src="/assets/img/homecsreen_tag_3.png" className="rounded-bottom" alt="house" />
                            <div className="card-img-overlay d-flex align-items-end p-0">
                                <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                    <a className="text-white stretched-link text-decoration-none fw-bolder">Prima fila dal mare</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <TopOffers />
            <TopAgencies />
        </main>
    )
}
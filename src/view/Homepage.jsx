import FilterModal from "./FilterModal";
import List from "./List";
import Search from "./Search";
import TopAgencies from "./TopAgencies";
import TopOffers from "./TopOffers";

export default function Homepage() {
    return (
        <main>
            <Search />
            <FilterModal />
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
            <TopOffers />
            <TopAgencies />
        </main>
    )
}
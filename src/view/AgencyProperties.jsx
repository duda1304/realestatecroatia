import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export default function AgencyProperties() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [propertyType, setPropertyType] = useState(2);

    async function get() {
        setData([]);
        setLoading(true);
        setError(false);

        const queryString = `propertyTypeId=${propertyType}`;

        try {
            const response = await fetch(`https://milicic.net/get.php?${queryString}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (data['status'] === 'error') {
                console.log(data['message']);
                setError(true);
            } else {
                setData(data['data']);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        get();
        console.log(`property type: ${propertyType}`);
    }, [propertyType]);

    return (
        <main>
            <section className="p-3 items-list d-flex flex-column">
                {loading && <Loading />}
                {error && <p>Error getting data from server</p>}
                {!loading && !error && data.length !== 0 &&
                    <div className="row gx-2">
                        <article className="col-3 mt-3" onClick={() => setPropertyType(1)} style={{ cursor: "pointer" }}>
                            <div className="card h-100 rounded position-relative border-0">
                                <img src="/assets/img/homecsreen_tag_1.png" className="rounded-bottom" alt="house" />
                                <div className="card-img-overlay d-flex align-items-end p-0">
                                    <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                        <span className="text-white stretched-link text-decoration-none fw-bolder">Casa</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="col-3 mt-3" onClick={() => setPropertyType(2)} style={{ cursor: "pointer" }}>
                            <div className="card h-100 rounded position-relative border-0 shadow-sm">
                                <img src="/assets/img/homecsreen_tag_2.png" className="rounded-bottom" alt="house" />
                                <div className="card-img-overlay d-flex align-items-end p-0">
                                    <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                        <span className="text-white stretched-link text-decoration-none fw-bolder">Appartamento</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="col-3 mt-3" onClick={() => setPropertyType(3)} style={{ cursor: "pointer" }} >
                            <div className="card h-100 rounded position-relative border-0 shadow-sm">
                                <img src="/assets/img/homecsreen_tag_3.png" className="rounded-bottom" alt="house" />
                                <div className="card-img-overlay d-flex align-items-end p-0">
                                    <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                        <span className="text-white stretched-link text-decoration-none fw-bolder">Terreno</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="col-3 mt-3" onClick={() => setPropertyType(4)} style={{ cursor: "pointer" }}>
                            <div className="card h-100 rounded position-relative border-0 shadow-sm">
                                <img src="/assets/img/homecsreen_tag_3.png" className="rounded-bottom" alt="house" />
                                <div className="card-img-overlay d-flex align-items-end p-0">
                                    <div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
                                        <span className="text-white stretched-link text-decoration-none fw-bolder">Locale comm.</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                }
            </section>
        </main>
    )
}



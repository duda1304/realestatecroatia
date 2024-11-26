import Card from "../components/Card";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import Loading from "../components/Loading";

export default function List(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);    
    const [propertyType, setPropertyType] = useState(2);

    const handlePageClick = (event) => {
        const newPage = event.selected + 1;
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            get();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'  
            });
        }
    };
    
    const itemsPerPage = 10;

    async function get() {
        setData([]);
        setLoading(true);
        setError(false);
        
        const queryString = `propertyTypeId=${propertyType}`;

        try {
            const response = await fetch(`https://milicic.net/get.php?page=${currentPage}&${queryString}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (data['status'] === 'error') {
                console.log(data['message']);
                setError(true);
            } else {
                setCount(data['count']);
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
        setCount(null);
        get();
    }, [propertyType]);

    return (
        <main>
            <section className="p-2 items-list d-flex flex-column">
                {loading && <Loading />}
                {error && <p>Error getting data from server</p>}
                {!loading && !error && data.length !== 0 &&  <><h4 className="modal-title mb-3 mt-3">Prezzo</h4>
                            <div className="row mb-3">
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="prezzoDa" className="form-label modal-text mb-0 me-2">da</label>
                                    <input type="text" className="form-control modal-text small-input me-3 border-0 shadow-sm" id="prezzoDa" placeholder="€" value={filter.priceFrom} onInput={(e) => handleChange('priceFrom', e.target.value)}/>
                                    <label htmlFor="prezzoA" className="form-label modal-text mb-0 me-2">a</label>
                                    <input type="text" className="form-control modal-text small-input border-0 shadow-sm" id="prezzoA" placeholder="€" value={filter.priceTo} onInput={(e) => handleChange('priceTo', e.target.value)}/>
                                    <button className="btn btn-primary rounded ms-3 card-ultimi-button" onClick={() => applyFilter()}>Filtrare i risultati</button>
                                </div>
                            </div></>}
                {data.map((item, index) => (
                    <Card key={item.id || index} {...item} />
                ))}
                {count && 
                    <ReactPaginate
                        pageCount={Math.ceil(count / itemsPerPage)}
                        onClick={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        previousLabel=""
                        nextLabel=""
                        initialPage={0}
                        breakLabel={"..."} 
                    />
                }
            </section>
        </main>
    )
}



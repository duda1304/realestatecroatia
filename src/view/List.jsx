import Card from "../components/Card";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import Loading from "../components/Loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function List(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);    

    const [filter, setFilter] = useState({
        'priceFrom' : '',
        'priceTo' : ''
    })

    const resetFilter = () => {
        setFilter(prevFilter =>
          Object.keys(prevFilter).reduce((acc, key) => {
            acc[key] = '';
            return acc;
          }, {})
        );
      };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        get();
    };
    
    const itemsPerPage = 10;

    async function get() {
        setData([]);
        setLoading(true);
        setError(false);
        
        let queryString = '';
        if (props.parameter && props.value) {
            if (Array.isArray(props.parameter) && Array.isArray(props.value)) {
                props.parameter.forEach((parameter,index) => {
                    // CHECK IF FILTER EXISTS
                    let value = props.value[index];
                    if (parameter in filter) {
                        if (filter[parameter] !== '') {
                            value = filter[parameter]
                        }
                    } 
                    queryString += `${parameter}=${value}&`
                })
            } else {
                // CHECK IF FILTER EXISTS
                let value = props.value;
                if (props.parameter in filter) {
                    if (filter[props.parameter] !== '') {
                        value = filter[props.parameter]
                    }
                } 
                queryString = `${props.parameter}=${props.value}`;
            }
        }

        for (const parameter in filter) {
            if (!queryString.includes(parameter)) {
                queryString += `&${parameter}=${filter[parameter]}`
            }
        }
       
        try {
            const response = await fetch(`https://milicic.net/get.php?page=${currentPage}&${queryString}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (data['status'] === 'error') {
                console.log(data['message']);
                setError(true);
            } else {
                if (!props.count) {
                    setCount(data['count']);
                }
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
        if (props.count) {
            setCount(props.count)
        } else {
            setCount(null);
        }
        resetFilter();
        get();
    }, [props]);


   
    const handleChange = (name, value) => {
        let numericValue = value.replace(/[^0-9]/g, "");
        numericValue = numericValue.replace(/^0+/, "");
        updateData(name, numericValue)
    }
   
    const updateData = (name, value) => {
        setFilter(prevData => ({
            ...prevData,        
            [name]: value 
          }));
    }
    const applyFilter = () => {
        if (filter.priceFrom === '' && filter.priceTo === '') {
            return
        }
        setCount(null);
        get();
    }

    return (
        <main>
            <section className="p-2 items-list d-flex flex-column">
                <h2 className="h5 list-title mb-2">{props.title || ''} {!props.count && count && `(${count})`}</h2>
                {loading && <Loading />}
                {error && <p>Error getting data from server</p>}
                {!loading && !error && data.count !== 0 &&  <><h4 className="modal-title mb-3 mt-3">Prezzo</h4>
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
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        previousLabel=""
                        nextLabel=""
                        initialPage={0}
                    />
                }
            </section>
        </main>
    )
}



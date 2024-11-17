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
                    queryString += `${parameter}=${props.value[index]}&`
                })
            } else {
                queryString = `${props.parameter}=${props.value}`;
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
                if (!props.hideCount) {
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
        setCount(null);
        get();
    }, [props]);

    return (
        <main>
            <section className="p-2 items-list d-flex flex-column">
                <h2 className="h5 list-title mb-2">{props.title || ''} {count && `(${count})`}</h2>
                {loading && <Loading />}
                {error && <p>Error getting data from server</p>}
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



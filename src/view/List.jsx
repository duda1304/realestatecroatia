import Card from "../components/Card";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

export default function List(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [count, setCount] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);    

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };
    
    const itemsPerPage = 10;

    async function get() {
        setData([]);
        setError(false);
        
        const queryString = props.parameter && props.value ? `${props.parameter}=${props.value}` : '';
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
    }

    useEffect(() => {
        if (props.count) {
            setCount(props.count);
        }
        get();
    }, [props, currentPage]);

    return (
        <main>
            <section className="p-2">
                <h2 className="h5 list-title mb-2">Elenco delle ultime 100 proprietà</h2>
                {error && <p>Error getting data from server</p>}
                {data.map((item, index) => (
                    <Card key={item.id || index} {...item} />
                ))}
                {data.length > 0 && 
                    <ReactPaginate
                        pageCount={Math.ceil(count / itemsPerPage)}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                }
            </section>
        </main>
    )
}



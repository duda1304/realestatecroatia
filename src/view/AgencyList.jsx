import { useState, useEffect } from "react";
import AgencyCard from "../components/AgencyCard";
// import ReactPaginate from 'react-paginate'; 
import Loading from "../components/Loading";

const agencyData = [
  {
    "name": "21.REAL ESTATE & TOURISM CENTURY d.o.o.",
    "contact": "Damir Prka",
    "address": "Marmontova, Split",
    "telephone": "00385996788663",
    "offer": ["casa", "appartamento", "terreno", "locale commerciale"]
  },
  {
    "name": "21.REAL ESTATE & TOURISM CENTURY d.o.o.",
    "contact": "Damir Prka",
    "address": "Marmontova, Split",
    "telephone": "00385996788663",
    "offer": ["casa", "appartamento", "terreno", "locale commerciale"]
  }, {
    "name": "21.REAL ESTATE & TOURISM CENTURY d.o.o.",
    "contact": "Damir Prka",
    "address": "Marmontova, Split",
    "telephone": "00385996788663",
    "offer": ["casa", "appartamento", "terreno", "locale commerciale"]
  }, {
    "name": "21.REAL ESTATE & TOURISM CENTURY d.o.o.",
    "contact": "Damir Prka",
    "address": "Marmontova, Split",
    "telephone": "00385996788663",
    "offer": ["casa", "appartamento", "terreno", "locale commerciale"]
  }, {
    "name": "21.REAL ESTATE & TOURISM CENTURY d.o.o.",
    "contact": "Damir Prka",
    "address": "Marmontova, Split",
    "telephone": "00385996788663",
    "offer": ["casa", "appartamento", "terreno", "locale commerciale"]
  },
];

export default function AgencyList(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(null); 
  // const [currentPage, setCurrentPage] = useState(1); 

  // const [filter, setFilter] = useState({
  //   'priceFrom': '',
  //   'priceTo': ''
  // });
  // const [previousFilter, setPreviousFilter] = useState(filter);

  // const resetFilter = () => {
  //   setFilter(prevFilter =>
  //     Object.keys(prevFilter).reduce((acc, key) => {
  //       acc[key] = '';
  //       return acc;
  //     }, {})
  //   );
  // };

  // const handlePageClick = (event) => {
  //   const newPage = event.selected + 1;
  //   if (newPage !== currentPage) {
  //     setCurrentPage(newPage);
  //     get();
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const itemsPerPage = 10; 


  //   async function get() {
  //     setData([]);
  //     setLoading(true);
  //     setError(false);

  //     let queryString = '';
  //     if (props.parameter && props.value) {
  //         if (Array.isArray(props.parameter) && Array.isArray(props.value)) {
  //             props.parameter.forEach((parameter, index) => {
  //                 // CHECK IF FILTER EXISTS
  //                 let value = props.value[index];
  //                 if (parameter in filter) {
  //                     if (filter[parameter] !== '') {
  //                         value = filter[parameter]
  //                     }
  //                 }
  //                 queryString += `${parameter}=${value}&`
  //             })
  //         } else {
  //             // CHECK IF FILTER EXISTS
  //             let value = props.value;
  //             if (props.parameter in filter) {
  //                 if (filter[props.parameter] !== '') {
  //                     value = filter[props.parameter]
  //                 }
  //             }
  //             queryString = `${props.parameter}=${props.value}`;
  //         }
  //     }

  //     for (const parameter in filter) {
  //         if (!queryString.includes(parameter)) {
  //             queryString += `&${parameter}=${filter[parameter]}`
  //         }
  //     }

  //     try {
  //         const response = await fetch(`https://milicic.net/get.php?page=${currentPage}&${queryString}`);
  //         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  //         const data = await response.json();
  //         if (data['status'] === 'error') {
  //             console.log(data['message']);
  //             setError(true);
  //         } else {
  //             if (!props.count) {
  //                 setCount(data['count']);
  //             } else {
  //                 if (props.count && data['count'] < props.count) {
  //                     setCount(data['count']);
  //                 }
  //             }
  //             setData(data['data']);
  //         }
  //     } catch (error) {
  //         console.error('Fetch error:', error);
  //         setError(true);
  //     }
  //     finally {
  //         setLoading(false);
  //     }
  // }

  // useEffect(() => {
  //     if (props.count) {
  //         setCount(props.count)
  //     } else {
  //         setCount(null);
  //     }
  //     resetFilter();
  //     get();
  // }, [props]);


  //   const handleChange = (name, value) => {
  //     let numericValue = value.replace(/[^0-9]/g, "");
  //     numericValue = numericValue.replace(/^0+/, "");
  //     updateData(name, numericValue)
  // }

  //   const updateData = (name, value) => {
  //     setFilter(prevData => ({
  //         ...prevData,
  //         [name]: value
  //     }));
  // }


  // const applyFilter = () => {
  //   // Filtering logic is commented out
  // }

  //   const applyFilter = () => {
  //     if (filter.priceFrom === '' && filter.priceTo === '') {
  //         return
  //     }
  //     if (JSON.stringify(filter) !== JSON.stringify(previousFilter)) {
  //         setCount(null);
  //         setPreviousFilter(filter);
  //         get();
  //     }
  // }

  useEffect(() => {
    setLoading(true);
    setError(false);

    try {
      setData(agencyData);
    } catch (error) {
      console.error('Error loading agency data:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const currentPageData = data;
  // const pageCount = 1;

  return (
    <main>
      <section className="p-2 items-list d-flex flex-column">
        <h2 className="h5 list-title mb-2">{props.title || 'Elenco agenzie'}</h2>
        {loading && <Loading />}
        {error && <p>Error loading agency data.</p>}
        {currentPageData.map((agency, index) => (
          <AgencyCard key={index} {...agency} />
        ))}
      </section>
    </main>
  );
}
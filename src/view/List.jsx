import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function List() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function get() {
            try {
                const response = await fetch(`https://milicic.net/get.php?count=100`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
                return false;
            }
        }
        get();
    }, []);

    if (error) return <p>Error: {error}</p>;


    return (
        <>
            <h2 className="h5 list-title mb-2">Elenco delle ultime 100 proprietà</h2>
            {data.map((element, index) => (
                <Card key={element.id || index} {...element} />
            ))}
        </>
    )
}
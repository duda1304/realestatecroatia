import Card from "../components/Card";

export default function List() {

    async function get() {
        try {
          const response = await fetch(`https://milicic.net/get.php?count=100`); 
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json(); 
          return data; 
        } catch (error) {
            console.error('Fetch error:', error); 
            return false;
        }
      }
      
    return (
        <>
        <h2 className="h5 list-title mb-2">Elenco delle ultime 100 proprietà</h2>
        {/* {data.map(element => <Card />)} */}
        </>
    )
}
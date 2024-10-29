export default function Card(props) {

  const formatPrice = (price) => {
    return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const formattedPrice = formatPrice(Number(props.price));

  return (
    <div className="card mb-2 mt-4 card-ultimi">
      <div className="d-flex inner-card-ultimi">
        <div style={{ flex: "0 0 45%" }}>
          <img src={props.imageUrl || "path/to/imageNotFound.jpg"} className="img-fluid rounded-start image-card-ultimi" alt="Image" />
        </div>
        <div className="d-flex flex-column justify-content-between p-3" style={{ "flex": "0 0 55%" }} >
          {/* title and price */}
          <h5 className="card-ultimi-title mb-1">{props.city}<span className="fw-light"> ({props.region} ŽUPANIJA)</span></h5>
          <p className="card-ultimi-price mt-0 fw-bolder"><span className="fw-bolder">{formattedPrice}</span> €</p>
          {/* description */}
          <p className="card-ultimi-text mb-2 mt-2">{props.description ? (props.description.length > 150 ? props.description.slice(0, 150) + '...' : props.description) : ''}</p>
          {/* details with icons */}
          <div className="d-flex align-items-center card-ultimi-info mt-2 mb-1">
            <img src="./src/images/house_icon.png" alt="Apartment icon" className="me-2" />
            <p className="mb-0"> {props.title}</p>
          </div>
          <div className="d-flex align-items-center card-ultimi-info mb-1">
            <img src="./src/images/person_icon.png" alt="Seller icon" className="me-2" />
            <p className="mb-0 ">Venditore: <a href="https://www.trgostan.hr/en/hotels-and-villas/hvar-jelsa-vitarnja-three-room-villa-with-pool-wine-shop-and-terraces-60-m-from-the-sea-4714.html" className="text-decoration-underline">{props.agency}</a></p>
          </div>

          <div className="d-flex align-items-center mb-2 card-ultimi-info">
            <img src="./src/images/fullcircle_icon.png" alt="ID icon" className="me-2" />
            <p className="mb-0">ID: <span className="fw-bold">{props.recId}</span></p>
          </div>
          <div className="d-flex justify-content-end mt-auto">
            <a href="#" className="btn btn-primary text-white rounded card-ultimi-button p-1">Vedi i dettagli &gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Card(props) {

  const propertyTypeMap = {
    1: 'Casa',
    2: 'Appartamento',
    3: 'Terreno',
    4: 'Attività commerciale'
  };

  const propertyType = propertyTypeMap[props.propertyTypeId] || 'Nepoznato';

  let squareFootage = '';
  if (props.title) {
    const titleParts = props.title.split(',');
    const lastPart = titleParts[titleParts.length - 1].trim();
    const squareFootagePattern = /^[\d.,]+\s*m2$/i;
    if (squareFootagePattern.test(lastPart)) {
      squareFootage = lastPart;
    }
  }

  const formatPrice = (price) => {
    return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const formattedPrice = formatPrice(Number(props.price));

  return (
    <div className="card mb-3 mt-4 card-ultimi">
      <div className="d-flex inner-card-ultimi flex-column flex-md-row">
        <div className="image-container">
          <img
            src={props.imageUrl || "path/to/imageNotFound.jpg"}
            className="img-fluid image-card-ultimi"
            alt="Image"
          />
        </div>
        <div className="d-flex flex-column justify-content-between p-3 content-container">
          {/* title and price */}
          <h5 className="card-ultimi-title mb-1">
            {props.city}
            <span className="fw-light"> ({props.region})</span>
          </h5>
          <p className="card-ultimi-price mt-0 fw-bolder">
            <span className="fw-bolder">{formattedPrice}</span> €
          </p>
          {/* description */}
          <p className="card-ultimi-text mb-2 mt-2">
            {props.description
              ? props.description.length > 120
                ? props.description.slice(0, 120) + "..."
                : props.description
              : ''}
          </p>
          {/* details with icons */}
          <div className="d-flex align-items-center card-ultimi-info mt-2 mb-1">
            <img
              src="/assets/icon/property.png"
              alt="Apartment icon"
              className="me-2"
            />
            <p className="mb-0">
              {propertyType}
              {squareFootage ? ', ' + squareFootage : ''}
            </p>
          </div>
          <div className="d-flex align-items-center card-ultimi-info mb-1">
            <img
              src="/assets/icon/agency.png"
              alt="Seller icon"
              className="me-2"
            />
            <p className="mb-0">
              Venditore:{" "}
              <a
                href="https://www.trgostan.hr/en/hotels-and-villas/hvar-jelsa-vitarnja-three-room-villa-with-pool-wine-shop-and-terraces-60-m-from-the-sea-4714.html"
                className="text-decoration-underline"
              >
                <span className="card-ultimi-agency">{props.agency}</span>
              </a>
            </p>
          </div>
          <div className="d-flex align-items-center mb-2 card-ultimi-info">
            <img
              src="/assets/icon/dot.png"
              alt="ID icon"
              className="me-2"
            />
            <p className="mb-0">
              ID: <span className="fw-bold">{props.recId}</span>
            </p>
          </div>
          <div className="d-flex justify-content-end mt-auto">
            <a
              href="#"
              className="btn btn-primary rounded card-ultimi-button p-1"
            >
              <span className="ultimi-underline-text">Vedi i dettagli</span> <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
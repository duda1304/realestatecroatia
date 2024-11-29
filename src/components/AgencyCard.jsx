import { Link } from "react-router-dom";

export default function AgencyCard(props) {
  return (
    <div className="card mb-3 mt-4 card-ultimi">
      <div className="d-flex inner-card-ultimi flex-column flex-md-row">
        {/* image */}
        <div className="image-container-agency">
          <img
            src={props.imageUrl || "./img/agency_placeholder.png"}
            className="img-fluid image-card-agency"
            alt="Agency"
          />
        </div>
        {/* contetn */}
        <div className="d-flex flex-column justify-content-between p-3 content-container-agency">
          <h5 className="card-agency-title mb-1">{props.name}</h5>
          {/* contact */}
          <div className="d-flex align-items-center mb-1 mt-3 card-agency-info">
            <img
              src="/icon/agency.png"
              alt="contatto icon"
              className="me-2"
            />
            <p className="mb-0">
              Contatto: <span className="card-agency-text-blue">{props.contact}</span>
            </p>
          </div>
          {/* adress */}
          <div className="d-flex align-items-center mb-1 card-agency-info">
            <img
              src="/icon/adress_icon.png"
              alt="indirizzo icon"
              className="me-2"
            />
            <p className="mb-0">
              Indirizzo: <span className="card-agency-text-blue">{props.address}</span>
            </p>
          </div>
          {/* phone */}
          <div className="d-flex align-items-center mb-1 card-agency-info">
            <img
              src="../../public/icon/phone_icon.png"
              alt="telefono icon"
              className="me-2"
            />
            <p className="mb-0">
              Telefono: <span className="card-agency-text-blue">{props.telephone}</span>
            </p>
          </div>
          <hr />
          {/*offers*/}
          <p className="mb-2 card-agency-info">
            Offerta dell'agenzia:
          </p>
          <p className="mb-2 card-agency-text-blue card-agency-info">
            {props.offer
              .map(offer => offer.charAt(0).toUpperCase() + offer.slice(1))
              .join(" / ")}
          </p>
          {/* button */}
          <div className="d-flex justify-content-end mt-auto">
            <Link
              to={`/agency`}
              className="btn btn-primary rounded card-ultimi-button p-1"
            >
              <span className="ultimi-underline-text">Vedi i dettagli</span> <span>&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
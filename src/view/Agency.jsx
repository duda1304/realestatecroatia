import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import AgencyProperties from "./AgencyProperties.jsx"

const agencyInfo = {
  "name": "21.REAL ESTATE & TOURISM CENTURY d.o.o.",
  "contact": "Damir Prka",
  "address": "Marmontova, Split",
  "email": "damir@bla.com",
  "web": "21realestate.com",
  "language": "ENG",
  "info1": "21.REAL ESTATE & TOURISM CENTURY d.o.o. is a real estate agency with the best offer of luxury villas and apartments for sales. We offer you carefully selected properties in the most attractive Croatian locations. *** Some of them are exclusive Off-Market Real Estates ***",
  "info2": "21.REAL ESTATE & TOURISM CENTURY d.o.o. provide complete project management for you. Our team of people, from lawyers and architects to designers, is fully capable of bringing the project from preliminary design and building permit to the final stage and opening the facility with building use permit."
};

export default function Agency() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(false);

    try {
      setData(agencyInfo);
    } catch (error) {
      console.error('Error loading agency data:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error || !data) {
    return <p>Error loading agency data.</p>;
  }

  return (
    <main>
      <section className="p-3">
        <h2 className="h5 list-title mb-2">{data.name}</h2>
        <div className="card mb-3 mt-4 p-3 border-0 shadow">
          <div className="d-flex flex-column flex-md-row">
            {/* image */}
            <div className="image-container-agency" style={{ flex: "0 0 30%" }}>
              <img
                src="/img/agency_placeholder.png"
                className="img-fluid image-agency"
                alt="Agency"
              />
            </div>
            {/* content */}
            <div className="d-flex flex-column justify-content-between p-3 content-container-agency" style={{ flex: "1" }}>
              <div className="agency-details">
                {/* name */}
                <div className="d-flex align-items-center mb-2 agency-info">
                  <img
                    src="/icon/agency_name_icon.png"
                    alt="Indirizzo Icon"
                    className="me-2"
                  />
                  <p className="mb-0">
                    Venditore: <span className="agency-text-bold">{data.name}</span>
                  </p>
                </div>
                {/* contact */}
                <div className="d-flex align-items-center mb-2 agency-info">
                  <img
                    src="/icon/agency.png"
                    alt="Contatto Icon"
                    className="me-2"
                  />
                  <p className="mb-0">
                    Contatto: <span className="agency-text-bold">{data.contact}</span>
                  </p>
                </div>
                {/* address */}
                <div className="d-flex align-items-center mb-2 agency-info">
                  <img
                    src="/icon/adress_icon.png"
                    alt="Indirizzo Icon"
                    className="me-2"
                  />
                  <p className="mb-0">
                    Indirizzo: <span className="agency-text-bold">{data.address}</span>
                  </p>
                </div>
                {/* email */}
                <div className="d-flex align-items-center mb-2 agency-info">
                  <img
                    src="/icon/email_icon.png"
                    alt="Email Icon"
                    className="me-2"
                  />
                  <p className="mb-0">
                    Email: <span className="agency-text-bold">{data.email}</span>
                  </p>
                </div>
                {/* web */}
                <div className="d-flex align-items-center mb-2 agency-info">
                  <img
                    src="/icon/web_icon.png"
                    alt="Web Icon"
                    className="me-2"
                  />
                  <p className="mb-0">
                    Web: <a href={`https://${data.web}`} className="agency-text-bold" target="_blank" rel="noopener noreferrer">{data.web}</a>
                  </p>
                </div>
                {/* language */}
                <div className="d-flex align-items-center mb-2 agency-info">
                  <img
                    src="/icon/language_icon.png"
                    alt="Language Icon"
                    className="me-2"
                  />
                  <p className="mb-0">
                    Lingua: <span className="agency-text-bold">{data.language}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* info */}
          <div className="agency-info mt-4">
            <div className="mb-3">
              <p>{data.info1}</p>
            </div>
            <div>
              <p>{data.info2}</p>
            </div>
          </div>
        </div>
      </section>
      <AgencyProperties />
    </main>
  );
}
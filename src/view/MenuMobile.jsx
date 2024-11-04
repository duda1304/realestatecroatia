const accordionData = [
  {
    title: "Immobili",
    collapseId: "collapseOne",
    items: [
      { name: "Ricerca", link: "#" },
      { name: "Elenco agenzie", link: "#" },
      { name: "Ultimi 20 registrati", link: "#" },
      { name: "Elenco per citta", link: "#" },
      { name: "Elenco per regione", link: "#" },
      { name: "Case nuove", link: "#" },
      { name: "Prima fila del mare", link: "#" },
    ],
  },
  {
    title: "Annunci immobiliari popolari",
    collapseId: "collapseTwo",
    items: [
      { name: "Istra", link: "#" },
      { name: "Kvarner", link: "#" },
      { name: "Dubrovnik", link: "#" },
      { name: "Zagreb", link: "#" },
      { name: "Split", link: "#" },
      { name: "Zadar", link: "#" },
      { name: "Varazdin", link: "#" },
      { name: "Lika", link: "#" },
    ],
  },
  {
    title: "Pubblicità",
    collapseId: "collapseThree",
    items: [
      { name: "Pacchetti", link: "#" },
      { name: "Servizi aggiuntivi", link: "#" },
      { name: "Banner", link: "#" },
      { name: "Sponsorizzazioni", link: "#" },
    ],
  },
  {
    title: "Utenti",
    collapseId: "collapseFour",
    items: [
      { name: "Accesso", link: "#" },
      { name: "Registrazione", link: "#" },
    ],
  },
];

export default function MenuMobile() {
  return (
    <div className="container d-block d-md-none show" id="mobile-accordion">
      <div className="accordion" >
        {accordionData.map((section, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index + 1}`}>
              <button
                className="accordion-button collapsed fw-bolder accordion-button-mobile"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${section.collapseId}`}
                aria-expanded="false"
                aria-controls={section.collapseId}
              >
                {section.title}
              </button>
            </h2>
            <hr className="d-md-none hr-immobili" />
            <div
              id={section.collapseId}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index + 1}`}
              data-bs-parent="#accordionMobile"
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.link} className="accordion-li">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function AgentCard() {
  return (
    <div className="card mb-3 mt-4 p-2 agent-card border-0 shadow w-50">
      <div className="card-body d-flex flex-column">
        {/* image */}
        <div className="d-flex align-items-center">
          <div className="me-3">
            <img src="/img/agent_placeholder.png" className="rounded-circle img-fluid" alt="Agency" width="70" height="70" />
          </div>
          {/* name */}
          <div className='agency-info'>
            <h5 className="mb-0 agency-text-bold">Damir</h5>
            <h5 className="mb-0 ">Prka</h5>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column mb-3">
          {/* phone */}
          <div className="d-flex align-items-center mb-2 agency-info lh-lg">
            <img src="/icon/phone_icon.png" alt="Telefono Icon" className="me-2" width="20" height="20" />
            <p className="mb-0">Telefono: <span className="agency-text-bold">00385996788663</span></p>
          </div>

          {/* email */}
          <div className="d-flex align-items-center mb-2 agency-info lh-lg">
            <img src="/icon/email_icon.png" alt="Email Icon" className="me-2" width="20" height="20" />
            <p className="mb-0">Email: <span className="agency-text-bold">damir@bla.com</span></p>
          </div>

          {/* language */}
          <div className="d-flex align-items-center mb-2 agency-info lh-lg">
            <img
              src="/icon/language_icon.png" alt="Language Icon" className="me-2" width="20" height="20" />
            <p className="mb-0">Lingue staniere: <span className="fw-bold agency-text-bold">ENG</span></p>
          </div>
        </div>

        {/* button */}
        <div className="mt-auto d-flex justify-content-end pt-4">
          <Link
            to="/agency"
            className="btn agency-type-city"
          >
            Tutti gli immobili &gt;
          </Link>
        </div>

      </div>
    </div>
  );
}
export default function Footer() {
	return (
		<footer className="py-2">
			{/* LARGE SCREEN */}
			<div className="d-none d-md-flex flex-row justify-content-between container">
				{/* col 1 */}
				<div className="px-3 text-start">
					<h5 className="fw-bolder">Immobili</h5>
					<p>
						<a href="#">Ricerca</a> / <a href="#">Elenco agenzie</a> /{' '}
						<a href="#">Ultimi 20 registrati</a>
					</p>
					<p>
						<a href="#">Elenco per citta</a> / <a href="#">Elenco per regione</a>
					</p>
					<p>
						<a href="#">Case nuove</a> / <a href="#">Prima fila del mare</a>
					</p>
				</div>
				{/* col 2 */}
				<div className="px-3">
					<h5 className="fw-bolder">Annunci immobiliari popolari</h5>
					<p>
						<a href="#">Istra</a> / <a href="#">Kvarner</a> / <a href="#">Dubrovnik</a>
					</p>
					<p>
						<a href="#">Zagreb</a> / <a href="#">Split</a> / <a href="#">Zadar</a>
					</p>
					<p>
						<a href="#">Varazdin</a> / <a href="#">Lika</a>
					</p>
				</div>
				{/* col 3 */}
				<div className="px-3">
					<h5 className="fw-bolder">Pubblicità</h5>
					<p>
						<a href="#">Pacchetti</a> / <a href="#">Servizi aggiuntivi</a>
					</p>
					<p>
						<a href="#">Banner</a> / <a href="#">Sponsorizzazioni</a>
					</p>
				</div>
				{/* col 4 */}
				<div className="x-3">
					<h5 className="fw-bolder">Utenti</h5>
					<p>
						<a href="#">Accesso</a> / <a href="#">Registrazione</a>
					</p>
				</div>
			</div>
			{/* HR md and larger screens */}
			<hr className="d-none d-md-block container" id="lg-hr-footer" />
			{/*bottom social links md lg */}
			<div className="d-none d-md-flex flex-row justify-content-center container" id="lg-bottom-footer">
				{/* social */}
				<div className="col text-start ms-3">
					<h5 className="fw-bolder">Mezzi sociali</h5>
					<a href="#">
						<span className="fa-stack fa-2x fs-4">
							<i className="fas fa-square fa-stack-2x" style={{ color: '#ffff' }}></i>
							<i className="fab fa-facebook-f fa-stack-1x fa-inverse" style={{ color: '#444654' }}></i>
						</span>
					</a>
				</div>
				{/* copywright */}
				<div className="col-5 text-center ms-3">
					<p className="mb-1" style={{ color: '#A1A2A9' }}>RealEstateCroatia.com non è un agente immobiliare</p>
					<p className="fw-lighter">Copyright &copy; RealEstateCroatia 2024</p>
				</div>
				{/* links */}
				<div className="col text-start ms-3">
					<p className="mb-1">
						<a href="#" className="footer-link">Chi siamo</a> / <a href="#" className="footer-link">Contatto</a>
					</p>
					<p>
						<a href="#" className="footer-link">Termini e Condizioni</a>
					</p>
				</div>
			</div>


			{/* mobile */}
			<div className="container d-md-none" id="footerAccordion">
				<div className="accordion d-md-none">
					{/* section 1 */}
					<div className="accordion-item">
						<h2 className="accordion-header" id="accordionHeading">
							<button
								className="accordion-button collapsed fw-bolder"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="false"
								aria-controls="collapseOne"
							>
								Immobili
							</button>
						</h2>
						<hr className="d-md-none hr-immobili" />
						<div
							id="collapseOne"
							className="accordion-collapse collapse"
							aria-labelledby="headingOne"
							data-bs-parent="#footerAccordion"
						>
							<div className="accordion-body">
								<ul className="list-unstyled">
									<li><a href="#" className="accordion-li">Ricerca</a></li>
									<li><a href="#" className="accordion-li">Elenco agenzie</a></li>
									<li><a href="#" className="accordion-li">Ultimi 20 registrati</a></li>
									<li><a href="#" className="accordion-li">Elenco per citta</a></li>
									<li><a href="#" className="accordion-li">Elenco per regione</a></li>
									<li><a href="#" className="accordion-li">Case nuove</a></li>
									<li><a href="#" className="accordion-li">Prima fila del mare</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* section 2 */}
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingTwo">
							<button
								className="accordion-button collapsed fw-bolder"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								Annunci immobiliari popolari
							</button>
						</h2>
						<hr className="d-md-none hr-immobili" />
						<div
							id="collapseTwo"
							className="accordion-collapse collapse fw-bolder"
							aria-labelledby="headingTwo"
							data-bs-parent="#footerAccordion"
						>
							<div className="accordion-body">
								<ul className="list-unstyled">
									<li><a href="#" className="accordion-li">Istra</a></li>
									<li><a href="#" className="accordion-li">Kvarner</a></li>
									<li><a href="#" className="accordion-li">Dubrovnik</a></li>
									<li><a href="#" className="accordion-li">Zagreb</a></li>
									<li><a href="#" className="accordion-li">Split</a></li>
									<li><a href="#" className="accordion-li">Zadar</a></li>
									<li><a href="#" className="accordion-li">Varazdin</a></li>
									<li><a href="#" className="accordion-li">Lika</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* section 3 */}
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed fw-bolder"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								Pubblicità
							</button>
						</h2>
						<hr className="d-md-none hr-immobili" />
						<div
							id="collapseThree"
							className="accordion-collapse collapse fw-bolder"
							aria-labelledby="headingThree"
							data-bs-parent="#footerAccordion"
						>
							<div className="accordion-body">
								<ul className="list-unstyled">
									<li><a href="#" className="accordion-li">Pacchetti</a></li>
									<li><a href="#" className="accordion-li">Servizi aggiuntivi</a></li>
									<li><a href="#" className="accordion-li">Banner</a></li>
									<li><a href="#" className="accordion-li">Sponsorizzazioni</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* section 4 */}
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingFour">
							<button
								className="accordion-button collapsed fw-bolder"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
								aria-expanded="false"
								aria-controls="collapseFour"
							>
								Utenti
							</button>
						</h2>
						<hr className="d-md-none hr-immobili" />
						<div
							id="collapseFour"
							className="accordion-collapse collapse fw-bolder"
							aria-labelledby="headingFour"
							data-bs-parent="#footerAccordion"
						>
							<div className="accordion-body">
								<ul className="list-unstyled">
									<li><a href="#" className="accordion-li">Accesso</a></li>
									<li><a href="#" className="accordion-li">Registrazione</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/*bottom social links SMALL */}
				<div className="d-flex flex-column align-items-center d-md-none mt-2">
					{/* links */}
					<div className="text-center ">
						<p className="mb-4">
							<a href="#" className="accordion-link">
								Chi siamo
							</a>{' '}
							/{' '}
							<a href="#" className="accordion-link">
								Contatto
							</a>{' '}
							/{' '}
							<a href="#" className="accordion-link">
								Termini e Condizioni
							</a>
						</p>
					</div>
					{/* copywright */}
					<div className="text-center mb-4">
						<p className="mb-1 fw-lighter lh-1 accordion-text" style={{ color: '#A1A2A9' }}>RealEstateCroatia.com non è un agente immobiliare</p>
						<p className="fw-lighter lh-1 accordion-text">Copyright &copy; RealEstateCroatia 2024</p>
					</div>
					{/* social */}
					<div className="text-center mb-3">
						<a href="#">
							<span className="fa-stack fa-2x fs-6">
								<i
									className="fas fa-square fa-stack-2x"
									style={{ color: '#ffff' }}
								></i>
								<i className="fab fa-facebook-f fa-stack-1x fa-inverse" style={{ color: '#444654' }}></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</footer >
	);
}

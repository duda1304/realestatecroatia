import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CheckMark from '../components/CheckMark';


export default function AgencyProperties({ agencyId }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);
	const [propertyType, setPropertyType] = useState(2);

	async function get() {
		setData([]);
		setLoading(true);
		setError(false);

		const queryString = `propertyTypeId=${propertyType}&agencyId=${agencyId}`;

		try {
			const response = await fetch(`https://milicic.net/get.php?${queryString}`);
			if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
			const fetchedData = await response.json();

			if (fetchedData['status'] === 'error') {
				console.log(fetchedData['message']);
				setError(true);
			} else {
				setData(fetchedData['data']);
			}
		} catch (error) {
			console.error('Fetch error:', error);
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		get();
		console.log(`property type: ${propertyType}`);
	}, [propertyType]);

	const formatPrice = (price) => {
		return Number(price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	};
	return (
		<div className="p-3">
			<h2 className="h5 list-title mb-2">Immobili Pubblicati</h2>
			<section className="items-list d-flex flex-column">
				{loading && <Loading />}
				{error && <p>Error getting data from server</p>}
				{!loading && !error && data.length !== 0 &&
					<div className="row gx-2">
						<article className="col-3 mt-3" onClick={() => setPropertyType(1)} style={{ cursor: "pointer" }}>
							<div className="card h-100 rounded position-relative border-0">
								<img src="/img/casa_img.png" className="rounded-bottom" alt="Casa" />
								{propertyType === 1 && <CheckMark />}
								<div className="card-img-overlay d-flex align-items-end p-0">
									<div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
										<span className="text-white stretched-link text-decoration-none fw-bolder">
											Casa
										</span>
									</div>
								</div>
							</div>
						</article>
						<article className="col-3 mt-3" onClick={() => setPropertyType(2)} style={{ cursor: "pointer" }}>
							<div className="card h-100 rounded position-relative border-0 shadow-sm">
								<img src="img/appartamento_img.png" className="rounded-bottom" alt="Appartamento" />
								{propertyType === 2 && <CheckMark />}
								<div className="card-img-overlay d-flex align-items-end p-0">
									<div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
										<span className="text-white stretched-link text-decoration-none fw-bolder">
											Appartamento
										</span>
									</div>
								</div>
							</div>
						</article>
						<article className="col-3 mt-3" onClick={() => setPropertyType(3)} style={{ cursor: "pointer" }}>
							<div className="card h-100 rounded position-relative border-0 shadow-sm">
								<img src="img/terreno_img.png" className="rounded-bottom" alt="Terreno" />
								{propertyType === 3 && <CheckMark />}
								<div className="card-img-overlay d-flex align-items-end p-0">
									<div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
										<span className="text-white stretched-link text-decoration-none fw-bolder">
											Terreno
										</span>
									</div>
								</div>
							</div>
						</article>
						<article className="col-3 mt-3" onClick={() => setPropertyType(4)} style={{ cursor: "pointer" }}>
							<div className="card h-100 rounded position-relative border-0 shadow-sm">
								<img src="img/locale_comm_img.png" className="rounded-bottom" alt="Locale commerciale" />
								{propertyType === 4 && <CheckMark />}
								<div className="card-img-overlay d-flex align-items-end p-0">
									<div className="w-100 text-white text-center py-2 rounded-bottom card-middle">
										<span className="text-white stretched-link text-decoration-none fw-bolder">
											Locale commerciale
										</span>
									</div>
								</div>
							</div>
						</article>
					</div>
				}
			</section>
			<section id="agencyPropertiesList" className="d-flex flex-column align-items-center mt-5 card h-100 rounded border-0 shadow">
				{loading && <Loading />}
				{error && <p>Error loading properties</p>}
				{!loading && !error && data.length > 0 && (
					//property type id and city
					<div className="d-flex flex-column agency-row-width">
						{data.slice(0, 5).map((property) => (
							<div key={property.recId} className="row align-items-center ps-0 pe-0 pb-3 pt-3 border-bottom">
								<div className="col-4 agency-type-city">
									<span>
										{property.propertyTypeId === 1 ? 'Casa' : property.propertyTypeId === 2 ? 'Appartamento' : property.propertyTypeId === 3 ? 'Terreno' : property.propertyTypeId === 4 ? 'Locale commerciale' : 'Unknown'}
									</span> <span>{property.city}</span>
								</div>
								{/* price */}
								<div className="col-4 fw-bold agency-properties-price text-center">
									<span>{formatPrice(property.price)}</span> €
								</div>
								{/* id */}
								<div className="col-4 d-flex justify-content-end">
									<span className="agency-properties-id p-2 rounded-5">ID: <span>{property.recId}</span>
									</span>
								</div>
							</div>
						))}
					</div>
				)}
			</section>
		</div >
	);
}

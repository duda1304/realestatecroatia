import { useNavigate } from 'react-router-dom'

export default function Aside(props) {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); 
    };

    return (
        <aside>
        <nav className="overflow-hidden rounded-3">
            <h3 className="d-flex align-items-center">
                <img src="./src/assets/icon/agencies.png" alt="icon" className="icon me-2" />
                Agenzie
            </h3>
            <ul className="subMenu">
                <li>
                    <a href="/listag" className="link none">Elenco agenzie</a>
                </li>
            </ul>
            <h3 className="d-flex align-items-center">
                <img src="./src/assets/icon/list.png" alt="icon" className="icon me-2" />
                Elenchi
            </h3>
            <ul className="subMenu">
                <li>
                    <a className="link none" onClick={() => handleNavigation('/top-20')}>Ultimi 20 registrati</a>
                </li>
                <li>
                    <a className="link none show-list" onClick={() => handleNavigation('/top-100')}>Ultimi 100 registrati</a>
                </li>
                <li>
                    <a href="/listcity" className="link none">Elenco per citt&#xE0;</a>
                </li>
                <li>
                    <a href="/listzup" className="link none">Elenco per regione</a>
                </li>
            </ul>

            <h3 className="d-flex align-items-center">
                <img src="./src/assets/icon/tag.png" alt="icon" className="icon me-2" />
                Tag
            </h3>
            <ul className="subMenu">
                <li className="featuredtag">
                    <a onClick={() => handleNavigation('/vendita-prima-fila-dal-mare')} className="link none">Prima fila dal mare</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-nuove-costruzioni')} className="link none">Case nuove</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-proprieta-vista-mare')} className="link none">Propriet&#xE0; vista mare</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-casa-di-pietra')} className="link none">Case di pietra</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-appartamenti')} className="link none">Appartamenti</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-proprieta-di-lusso')} className="link none">Propriet&#xE0; di lusso</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-case')} className="link none">Case</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-diretta-dal-proprietario')} className="link none">Vendita diretta dal proprietario</a>
                </li>
                <li>
                    <a onClick={() => handleNavigation('/vendita-albergo')} className="link none">Albergi</a>
                </li>
            </ul>
            <h3 className="d-flex align-items-center">
                <img src="./src/assets/icon/users.png" alt="icon" className="icon me-2" />
                Utenti
            </h3>
            <ul className="subMenu">
                <li>
                    <a href="https://agentor2.realestatecroatia.com/account/register?tip=1" className="link none"> Registrazione - Agenzie</a>
                </li>
                <li>
                    <a href="https://agentor2.realestatecroatia.com/account/register?tip=2" className="link none"> Registrazione - Privata</a>
                </li>
                <li>
                    <a href="https://agentor2.realestatecroatia.com/" className="link none"> Accesso</a>
                </li>
                <li>
                    <a href="/paketi" className="link none">Pubblicit&#xE0;</a>
                </li>
            </ul>
            <ul className="abeceda">
                <li>
                    <a href="/listcity?slovo=a" className="link none">A</a>
                </li>
                <li>
                    <a href="/listcity?slovo=b" className="link none">B</a>
                </li>
                <li>
                    <a href="/listcity?slovo=c" className="link none">C</a>
                </li>
                <li>
                    <a href="/listcity?slovo=č" className="link none">Č</a>
                </li>
                <li>
                    <a href="/listcity?slovo=ć" className="link none">Ć</a>
                </li>
                <li>
                    <a href="/listcity?slovo=d" className="link none">D</a>
                </li>
                <li>
                    <a href="/listcity?slovo=dž" className="link none">Dž</a>
                </li>
                <li>
                    <a href="/listcity?slovo=đ" className="link none">Đ</a>
                </li>
                <li>
                    <a href="/listcity?slovo=e" className="link none">E</a>
                </li>
                <li>
                    <a href="/listcity?slovo=f" className="link none">F</a>
                </li>
                <li>
                    <a href="/listcity?slovo=g" className="link none">G</a>
                </li>
                <li>
                    <a href="/listcity?slovo=h" className="link none">H</a>
                </li>
                <li>
                    <a href="/listcity?slovo=i" className="link none">I</a>
                </li>
                <li>
                    <a href="/listcity?slovo=j" className="link none">J</a>
                </li>
                <li>
                    <a href="/listcity?slovo=k" className="link none">K</a>
                </li>
                <li>
                    <a href="/listcity?slovo=l" className="link none">L</a>
                </li>
                <li>
                    <a href="/listcity?slovo=lj" className="link none">LJ</a>
                </li>
                <li>
                    <a href="/listcity?slovo=m" className="link none">M</a>
                </li>
                <li>
                    <a href="/listcity?slovo=n" className="link none">N</a>
                </li>
                <li>
                    <a href="/listcity?slovo=nj" className="link none">NJ</a>
                </li>
                <li>
                    <a href="/listcity?slovo=o" className="link none">O</a>
                </li>
                <li>
                    <a href="/listcity?slovo=p" className="link none">P</a>
                </li>
                <li>
                    <a href="/listcity?slovo=r" className="link none">R</a>
                </li>
                <li>
                    <a href="/listcity?slovo=s" className="link none">S</a>
                </li>
                <li>
                    <a href="/listcity?slovo=š" className="link none">Š</a>
                </li>
                <li>
                    <a href="/listcity?slovo=t" className="link none">T</a>
                </li>
                <li>
                    <a href="/listcity?slovo=u" className="link none">U</a>
                </li>
                <li>
                    <a href="/listcity?slovo=v" className="link none">V</a>
                </li>
                <li>
                    <a href="/listcity?slovo=z" className="link none">Z</a>
                </li>
                <li>
                    <a href="/listcity?slovo=ž" className="link none">Ž</a>
                </li>
                <li>
                    <a href="/listcity" className="link none">A-Ž</a>
                </li>
            </ul>
        </nav>
        {/* <div className="ajax-preload" data-ajax-id="ajax-leftbanners" data-ajax-link="/Ajax/LeftBanners/">
            <img src="./src/images/ajax-loader.gif" alt="Left Banners" />
        </div> */}
        <div className="cf h950">
            <div className="subAd pt-10">
                <a href="https://kitchen.planner.ikea.com/planner/#/hr/hr/" target="_blank"><img src="https://www.realestatecroatia.com/recbanners/20240124_XURHBYTAJD.jpg" alt="Ikea kitchen" className="w-100 rounded-3 border-0" /></a>
            </div>
            <div className="subAd pt-10">
                <a href="https://dux-immobiliare.it/" target="_blank"><img src="https://www.realestatecroatia.com/recbanners/20221013_VKPCRBVSWT.png" alt="Dux Real Estate" className="w-100 rounded-3 border-0" /></a>
            </div>
            <div className="subAd pt-10">
                <a href="https://www.realestatecroatia.com/vendita-prima-fila-dal-mare" target="_blank"><img src="https://www.realestatecroatia.com/recbanners/20231202_YMYJVCIVCC.jpg" alt="1. row to the sea" className="w-100 rounded-3 border-0" /></a>
            </div>
            <div className="subAd pt-10">
                <a href="https://www.realestatecroatia.com/hrv/default?st=4" target="_blank"><img src="https://www.realestatecroatia.com/recbanners/20231202_TXDHNINGSH.jpg" alt="We search for you" className="w-100 rounded-3 border-0" /></a>
            </div>
            <div className="subAd pt-10">
                <a href="https://www.realestatecroatia.com/vendita-proprieta-di-lusso" target="_blank"><img src="https://www.realestatecroatia.com/recbanners/20231209_DBQWNKXEAT.jpg" alt="Proprieta di lusso" className="w-100 rounded-3 border-0" /></a>
            </div>
        </div>
    </aside>
    )
}
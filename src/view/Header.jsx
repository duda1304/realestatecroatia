import { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

const menuData = [
  {
    title: "Immobili",
    items: [
      { name: "Ricerca", link: "#" },
      { name: "Elenco agenzie", link: "#" },
      { name: "Ultimi 20 registrati", link: "#" },
      { name: "Elenco per città", link: "#" },
      { name: "Elenco per regione", link: "#" },
      { name: "Case nuove", link: "#" },
      { name: "Prima fila del mare", link: "#" },
    ],
  },
  {
    title: "Annunci immobiliari popolari",
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
    items: [
      { name: "Pacchetti", link: "#" },
      { name: "Servizi aggiuntivi", link: "#" },
      { name: "Banner", link: "#" },
      { name: "Sponsorizzazioni", link: "#" },
    ],
  },
  {
    title: "Utenti",
    items: [
      { name: "Accesso", link: "#" },
      { name: "Registrazione", link: "#" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setActiveMenu(null);
    } else {
      setIsOpen(false);
      setActiveMenu(null);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const handleBack = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
  };

  return (
    <header className={`header ${isOpen ? 'show' : ''}`}>
      <div className="d-flex justify-content-between">
        {activeMenu === null ? (
          <div id="logo">
            <a href="/">
              <img src="/assets/img/REC_logo_novo.png" alt="RealEstateCroatia.com" />
            </a>
          </div>
        ) : (
          <button className="back-button" onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
            <span className="back-text">{menuData[activeMenu].title}</span>
          </button>
        )}
        {/* hamburger icon */}
        <div className="mobile-icons d-flex justify-content-end">
          <a href="#" className={`nav-link flag rounded-circle overflow-hidden d-flex justify-content-center align-items-center me-2 language-mobile ${isOpen ? 'd-none' : ''}`}>
            <img src="/assets/flag/flagitaly.png" alt="language" className="img-fluid me-2" />
            <p className="fs-6">ITL</p>
          </a>
          <button
            id="ham2"
            className={`box btn ${isOpen ? 'open' : 'not-open'}`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>
        {/* main banner */}
        <div id="mainBan" className="d-none d-lg-block">
          <a href="https://dogma-exclusive.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.realestatecroatia.com/recbanners/20221013_VACYKTJIUL.png" title="Dogma exclusive" alt="Dogma exclusive" className="rounded-3" />
          </a>
        </div>
      </div>
      <div className="main-navigation d-flex justify-content-between rounded-2">
        <nav id="mainNav" className="mt-2">
          <ul className="main-nav-list">
            <li><a href="/">Immobili</a></li>
            <li><a onClick={() => handleNavigation('/vendita-nuove-costruzioni')} className="link none">Progetti</a></li>
            <li><a onClick={() => handleNavigation('/vendita-prima-fila-dal-mare')} className="link none">Prima fila dal mare</a></li>
            <li><a onClick={() => handleNavigation('/vendita-proprieta-di-lusso')} className="link none">Propriet&#xE0; di lusso</a></li>
            <li><a onClick={() => handleNavigation('/vendita-con-piscina')} className="link none">Ville</a></li>
            <li><a href="/statistika.asp">Statistiche</a></li>
          </ul>
        </nav>
        <div className="d-flex align-items-center language-login-mobile">
          <a href="https://agentor2.realestatecroatia.com" className="nav-link d-flex align-items-center login">
            <img src="/assets/icon/login.png" alt="login" className="img-fluid me-1" />
            Login
          </a>
          <a href="#" className="nav-link flag rounded-circle overflow-hidden d-flex justify-content-center align-items-center ms-3 me-3 language">
            <img src="/assets/flag/flagitaly.png" alt="language" className="img-fluid me-1" />
            ITA
          </a>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <MenuMobile
          isOpen={isOpen}
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
          menuData={menuData}
          closeMenu={closeMenu}
        />
      )}
      <div className="abcd_holder">
        <ul className="abeceda">
          <li>
            <a href="/listcity.asp?slovo=a" className="link abcd">A</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=b" className="link abcd">B</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=c" className="link abcd">C</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=č" className="link abcd">Č</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=ć" className="link abcd">Ć</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=d" className="link abcd">D</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=dž" className="link abcd">Dž</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=đ" className="link abcd">Đ</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=e" className="link abcd">E</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=f" className="link abcd">F</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=g" className="link abcd">G</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=h" className="link abcd">H</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=i" className="link abcd">I</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=j" className="link abcd">J</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=k" className="link abcd">K</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=l" className="link abcd">L</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=lj" className="link abcd">LJ</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=m" className="link abcd">M</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=n" className="link abcd">N</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=nj" className="link abcd">NJ</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=o" className="link abcd">O</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=p" className="link abcd">P</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=r" className="link abcd">R</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=s" className="link abcd">S</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=š" className="link abcd">Š</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=t" className="link abcd">T</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=u" className="link abcd">U</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=v" className="link abcd">V</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=z" className="link abcd">Z</a>
          </li>
          <li>
            <a href="/listcity.asp?slovo=ž" className="link abcd">Ž</a>
          </li>
          <li>
            <a href="/listcity.asp" className="link abcd">A-Ž</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

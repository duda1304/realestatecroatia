import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function MenuMobile({ isOpen, setActiveMenu, activeMenu, menuData, closeMenu }) {

  const firstMenuItemRef = useRef(null);

  useEffect(() => {
    if (activeMenu !== null && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [activeMenu]);

  const handleNavigate = (index) => {
    setActiveMenu(index);
  };
  return (
    <nav
      id="mobile-menu"
      role="navigation"
      aria-label="Mobile Menu"
      className={`header-mobile-container ${isOpen ? 'open' : ''}`}
    >
      {activeMenu === null ? (
        <div className="main-menu">
          {menuData.map((section, index) => (
            <div key={index} className="main-menu-item">
              <button
                className="main-menu-button"
                onClick={() => handleNavigate(index)}
                aria-haspopup="true"
                aria-controls={`submenu-${index}`}
                ref={index === 0 ? firstMenuItemRef : null}
              >
                <span className="main-menu-title">{section.title}</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              </button>
              <hr className="menu-divider" />
            </div>
          ))}
          <div className="main-menu-login">
            <a
              href="https://agentor2.realestatecroatia.com"
              className="login-button"
            >
              LOGIN
            </a>
          </div>
        </div>
      ) : (
        <div className={`sub-menu ${activeMenu !== null ? 'open' : ''}`}>
          <hr className="menu-divider" />
          <ul className="sub-menu-list">
            {menuData[activeMenu].items.map((item, id) => (
              <li key={id} className="sub-menu-list-item">
                <a
                  href={item.link}
                  className="sub-menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
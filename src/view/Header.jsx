export default function Header() {
    return (
        <header className="header">
            <div>
                <div id="logo">
                    <a href="/">
                        <img src="./src/assets/img/REC_logo_novo.png" alt="RealEstateCroatia.com"></img>
                    </a>
                </div>
                <div id="mainBan">
                    {/* <div className="ajax-preload" data-ajax-id="ajax-topbanner" data-ajax-link="/Ajax/TopBanner/">
                        <img src="./src/images/ajax-loader.gif" alt="Top Banner" />
                    </div> */}
                    <a href="https://dogma-exclusive.com/" target="_blank">
                        <img src="https://www.realestatecroatia.com/recbanners/20221013_VACYKTJIUL.png" title="Dogma exclusive" alt="Dogma exclusive" className="rounded-3"/>
                    </a>
                </div>
            </div>

            <div id="ham2">
                <div className="box">
                    <div className="btn not-open">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="main-navigation d-flex justify-content-between rounded-2">
                <nav id="mainNav" className="mt-2">
                    <ul>
                            <li><a href="/">Immobili</a></li>
                            <li><a href="/vendita-nuove-costruzioni">Progetti</a></li>
                            <li><a href="/vendita-prima-fila-dal-mare">Prima fila dal mare</a></li>
                            <li><a href="/vendita-proprieta-di-lusso">Propriet&#xE0; di lusso</a></li>
                            <li><a href="/vendita-con-piscina">Ville</a></li>
                            <li><a href="/statistika.asp">Statistiche</a></li>
                    </ul>
                </nav>
                <div className="d-flex align-items-center">
                  {/* login */}
                    <a href="https://agentor2.realestatecroatia.com" className="nav-link d-flex align-items-center login">
                        <img src="./src/assets/icon/login.png" alt="login image" className="img-fluid me-1"></img>
                        Login
                    </a>
                  {/* language */}
                    <a href="#" className="nav-link flag rounded-circle overflow-hidden d-flex justify-content-center align-items-center ms-3 me-3 language">
                        <img src="./src/assets/flag/flagitaly.png" alt="language image" className="img-fluid me-1"></img>
                        ITA
                    </a>
                </div>
            </div>
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
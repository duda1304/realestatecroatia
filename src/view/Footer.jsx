export default function Footer() {
    return (
        <footer >
        <div  id="preFooter">
            <h2  className="head accordion s600">
                Collegamenti veloci
            </h2>
            <div  className="panel">
                <div >
                    <h3 >Immobili</h3>
                    <ul >
                        <li >
                            <a  href="/itl/" className="link">Ricerca</a>
                        </li>
                        <li >
                            <a  href="/itl/listag.asp" className="link">Elenco agenzie</a>
                        </li>
                        <li >
                            <a  href="/itl/list.asp?top=20" className="link">Ultimi 20 registrati</a>
                        </li>
                        <li >
                            <a  href="/itl/listcity.asp" className="link">Elenco per citt&#xE0;</a>
                        </li>
                        <li >
                            <a  href="/itl/listzup.asp" className="link">Elenco per regione</a>
                        </li>
                    </ul>
                </div>
                <div >
                    <h3 >Case nuove</h3>
                    <ul >
                        <li >
                            <a  href="/itl/vendita-nuove-costruzioni" className="link">Case nuove</a>
                        </li>
                    </ul>
                </div>
                <div >
                    <h3 >Prima fila dal mare</h3>
                    <ul >
                        <li >
                            <a  href="/itl/vendita-prima-fila-dal-mare" className="link">Prima fila dal mare</a>
                        </li>
                    </ul>
                </div>
                <div >
                    <h3 >Pubblicit&#xE0;</h3>
                    <ul >
                        <li >
                            <a  href="/itl/paketi.asp" className="link">Pacchetti</a>
                        </li>
                        <li >
                            <a  href="/itl/paketizavelike.asp" className="link"> Pacchetti per grandi</a>
                        </li>
                        <li >
                            <a  href="/itl/dodatneusluge.asp" className="link"> Pubblicit&#xE0; aggiuntiva</a>
                        </li>
                        <li >
                            <a  href="/itl/banneri.asp" className="link"></a>
                        </li>
                        <li >
                            <a  href="/itl/onama.asp" className="link">Su di noi</a>
                        </li>
                        <li >
                            <a  href="/itl/kontakt.asp" className="link">Ccontatto</a>
                        </li>
                        <li >
                            <a  href="/itl/terminiiuvjeti.asp" className="link">Termini e condizioni</a>
                        </li>
                    </ul>
                </div>
                <div >
                            <h3 >Utenti</h3>
                    <ul >
                        <li >
                                <a  href="http://agentor2.realestatecroatia.com" className="link"> Accesso</a>
                        </li>
                        <li >
                                <a  href="https://www.realestatecroatia.com/agentor/registracija.asp?tip=1" className="link">Registrazione</a>
                        </li>
                    </ul>
                </div>
                <div >
                    <h3 >Statistiche</h3>
                    <ul >
                        {/* <li > */}
                                <li ><a  href="/itl/statistika.asp" className="link">Statistiche</a></li>
                        {/* </li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div  id="mainFooter">
            <h2  className="head accordion s600">Su di noi</h2>
            <div  className="panel">
            <p >RealEstateCroatia.com is not a Real Estate Agent</p>
            <p >LABIN office, Rudarska 1 tel/fax: +385 (0)52 851 205</p>
            <p >Copyright © RealEstateCroatia 2024</p>
            </div>
        </div>
        </footer>
    )
}
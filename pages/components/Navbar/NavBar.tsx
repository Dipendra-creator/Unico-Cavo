import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faSearch, faCartPlus, faAngleLeft, faAngleDown} from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <>
            <header className={"header"}>
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left">
                            <div className="logo"><a href="#">UnicoKabol</a></div>
                        </div>
                        <div className="header-item item-center">
                            <div className="menu-overlay"/>
                            <nav className="menu">
                                <div className="sm-menu-head">
                                    <div className="go-back"><FontAwesomeIcon icon={faAngleLeft}/></div>
                                    <div className="current-menu-title"/>
                                    <div className="sm-menu-close">&times;</div>
                                </div>
                                <ul className="menu-main">
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>

                                    <li className="menu-item-has-children">
                                        <div className="sale-design">
                                            <span className="sale-label">Sale</span>
                                        </div>
                                        <a href="#">Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Discover</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-item item-right">
                            <a href="#" className="search">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                            <a href="#" className="user">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <div className="sm-menu-trigger">
                                <span/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

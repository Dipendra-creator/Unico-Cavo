import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Upperbar() {
    return (
        <div className="social-call">
                <div className="social">
                    <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "facebook"]} /> </a>
                    <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "instagram"]} /></a>

                </div>
                <div className="phone">
                    <span>Call +911234567890</span>
                </div>
            </div>
    )
}

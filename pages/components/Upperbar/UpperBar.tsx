import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function UpperBar() {

    return (
        <>
            {/*UPPER BAR*/}
            <div className="social-call">
                <div className="social">
                    <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "facebook"]} /> </a>
                    <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                    <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
                    <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "github"]} /></a>

                </div>
                <div className="phone">
                    <span>Call +911234567890</span>
                </div>
            </div>
            {/*END OF UPPER BAR*/}
        </>
    )
}

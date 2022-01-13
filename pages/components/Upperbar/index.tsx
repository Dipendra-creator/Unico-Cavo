import '@fortawesome/fontawesome-svg-core/styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Upperbar() {
    return (
        <div className="w-full border-2 border-b border-solid border-transparent flex justify-center
        border-b-2
        ">
            <div className="social">
                <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "facebook"]}/> </a>
                <a className={"link"} href={"#"}><FontAwesomeIcon icon={["fab", "instagram"]}/></a>

            </div>
            <div className="ml-2 text-xl">
                <span>Call +911234567890</span>
            </div>
        </div>
    )
}

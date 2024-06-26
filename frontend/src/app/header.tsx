import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="head">
      <FontAwesomeIcon className="logo" icon={faLaptopMedical}/>
      <h2 className="logo-text">Clinic</h2>
    </div>
  )
}

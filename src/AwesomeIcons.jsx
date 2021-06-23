import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faPhoneAlt, faPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const checkIcon = <FontAwesomeIcon icon={faCheckCircle} size={'2x'} />
const clockIcon = <FontAwesomeIcon icon={faClock} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={'lg'} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} size={'lg'} />
const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />
const pinterestIcon = <FontAwesomeIcon icon={faPinterest} size={'lg'} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={'lg'} />
const planeIcon = <FontAwesomeIcon icon={faPlane} size={'2x'} />

export { checkIcon, clockIcon, facebookIcon, instagramIcon, phoneIcon, pinterestIcon, twitterIcon, planeIcon }